import meld from 'meld';
import { ATTACK, AGILITY } from './faces';
import * as Stats from 'app/math/stats';

export var sensor_jammer = {
	priority: 1,
	fn: function(scope) {
		return meld.around(scope, [ 'getDamageSeries', 'getHitSeries' ], function(joinpoint) {
			var attacker = joinpoint.target.attacker;
			var defender = joinpoint.target.defender;
			var series = joinpoint.proceed();

			//Sensor jammer effectively removes an attack die if the attacker is not focused
			if(defender.getUpgrade('sensor_jammer') && !attacker.focus) {
				joinpoint.target.smushLeft(series);
			}

			return series;
		});
	}
}

export var poe_dameron_pilot = {
	priority: 2,
	fn: function(scope) {
		return meld.around(scope, [ 'getFocusModifier' ], function(joinpoint) {
			var attacker = joinpoint.target.attacker;
			var defender = joinpoint.target.defender;
			var currentShip = joinpoint.args[0]
			var original = joinpoint.proceed();

			//This overrides normal focus behavior, since if you are using Poe you intend to not spend the focus
			var focusSeries;
			if(attacker === currentShip && attacker.focus) {
				focusSeries = joinpoint.target.binomialExperiment(attacker.attr('attack'), ATTACK.FOCUS);
			} else if(defender === currentShip && defender.focus) {
				focusSeries = joinpoint.target.binomialExperiment(defender.attr('agility'), AGILITY.FOCUS);
			}

			if(focusSeries) {
				//Return chance of rolling at least one focus
				return _.reduce(focusSeries, function(total, seriesItem, index) {
					return index === 0 ? total : total + seriesItem;
				}, 0);
			} else {
				return original;
			}
		});
	}
}

export var lone_wolf = {
	priority: 3,
	fn: function(scope) {
		return meld.around(scope, [ 'getDamageSeries', 'getHitSeries', 'getCritSeries', 'getEvadeSeries'], function(joinpoint) {
			var attacker = joinpoint.target.attacker;
			var defender = joinpoint.target.defender;
			var series = joinpoint.proceed();

			if(joinpoint.method === 'getEvadeSeries') {
				if(defender.getUpgrade('lone_wolf')) {
					//Calculate the odds of rolling N blanks
					//If we roll a blank, we can reroll one with Lone Wolf
					return joinpoint.target.rerollSeries(defender.attr('agility'), 1, AGILITY.BLANK, joinpoint.target.getModifiedEvadeChance());
				}
			} else if(joinpoint.method === 'getHitSeries' || joinpoint.method === 'getCritSeries' || joinpoint.method === 'getDamageSeries') {
				if(attacker.getUpgrade('lone_wolf')) {
					//Due to the no-multi-reroll rule, target locks supersede this on the attack
					if(!joinpoint.target.hasTargetLock(attacker, defender)) {
						var hitChance;
						if(joinpoint.method === 'getHitSeries') {
							hitChance = joinpoint.target.getModifiedHitChance();
						} else if(joinpoint.method === 'getCritSeries') {
							hitChance = joinpoint.target.getModifiedCritChance();
						} else if(joinpoint.method === 'getDamageSeries') {
							hitChance = joinpoint.target.getModifiedHitOrCritChance();
						}

						return joinpoint.target.rerollSeries(attacker.attr('attack'), 1, ATTACK.BLANK, hitChance);
					}
				}
			}

			return series;
		});
	}
}

function predatorFactory(predatorDice) {
	return function(scope) {
		return meld.around(scope, [ 'getDamageSeries', 'getHitSeries', 'getCritSeries'], function(joinpoint) {
			var attacker = joinpoint.target.attacker;
			var defender = joinpoint.target.defender;
			var series = joinpoint.proceed();

			if(attacker.getUpgrade('predator_' + predatorDice)) {
				if(joinpoint.method === 'getHitSeries' || joinpoint.method === 'getCritSeries' || joinpoint.method === 'getDamageSeries') {
					//Due to the no-multi-reroll rule, target locks supersede this on the attack
					if(!joinpoint.target.hasTargetLock(attacker, defender)) {
						var hitChance;
						var rerollChance = attacker.focus ? ATTACK.BLANK : ATTACK.BLANK + ATTACK.FOCUS;
						if(joinpoint.method === 'getHitSeries') {
							hitChance = joinpoint.target.getModifiedHitChance();
						} else if(joinpoint.method === 'getCritSeries') {
							hitChance = joinpoint.target.getModifiedCritChance();
						} else if(joinpoint.method === 'getDamageSeries') {
							hitChance = joinpoint.target.getModifiedHitOrCritChance();
						}

						return joinpoint.target.rerollSeries(attacker.attr('attack'), predatorDice, rerollChance, hitChance);
					}
				}
			}

			return series;
		});
	}
}

export var predator_1 = {
	priority: 4,
	fn: predatorFactory(1)
}

export var predator_2 = {
	priority: 5,
	fn: predatorFactory(2)
}

export var han_solo_pilot = {
	priority: 97,
	fn: function(scope) {
		return meld.around(scope, [ 'getHitSeries', 'getCritSeries', 'getDamageSeries' ], function(joinpoint) {
			var attacker = joinpoint.target.attacker;
			var defender = joinpoint.target.defender;
			var sourceShip = joinpoint.args[0]
			var series = joinpoint.proceed();

			if(attacker.getUpgrade('han_solo_pilot')) {
				//Target lock is strictly better than Han
				if(!joinpoint.target.hasTargetLock(attacker, defender)) {
					//FIXME: Should the code below use a weighted comparison between probability bands?  Currently is very staircase-like
					var hanUsedPct;
					if(joinpoint.method === 'getHitSeries') {
						//Here we assume you'll use a Han reroll when your rolled hits are less than 3/8 of your dice, the expectation on bare dice
						hanUsedPct = _.reduce(series, function(total, seriesItem, index) {
							return ( index < (attacker.attr('attack') * 3/8) ) ? total : total + seriesItem;
						}, 0);

						return joinpoint.target.rerollSeries(attacker.attr('attack'), attacker.attr('attack'), hanUsedPct, joinpoint.target.getModifiedHitChance());
					} else if(joinpoint.method === 'getCritSeries') {
						//Here we assume you'll use a Han reroll if your rolled crits are less than 1/8 of your dice, the expectation on bare dice
						hanUsedPct = _.reduce(series, function(total, seriesItem, index) {
							return ( index < (attacker.attr('attack') / 4) ) ? total : total + seriesItem;
						}, 0);

						return joinpoint.target.rerollSeries(attacker.attr('attack'), attacker.attr('attack'), hanUsedPct, joinpoint.target.getModifiedCritChance());
					} else if(joinpoint.method === 'getDamageSeries') {
						//Combining the above, sort of - assume we Han reroll if the total of hits and crits is less than half of your dice
						hanUsedPct = _.reduce(series, function(total, seriesItem, index) {
							return ( index < (attacker.attr('attack') / 2) ) ? total : total + seriesItem;
						}, 0);

						return joinpoint.target.rerollSeries(attacker.attr('attack'), attacker.attr('attack'), hanUsedPct, joinpoint.target.getModifiedHitOrCritChance());
					}
				}
			}

			return series;
		});
	}
}

export var zuckuss = {
	priority: 98,
	fn: function(scope) {
		return meld.around(scope, [ 'getModifiedEvadeChance' ], function(joinpoint) {
			var attacker = joinpoint.target.attacker;
			var evadeChance = joinpoint.proceed();

			if(attacker.getUpgrade('zuckuss')) {
				return Math.pow(evadeChance, 2);
			}

			return evadeChance;
		});
	}
}

export var emperor_palpatine = {
	priority: 99,
	fn: function(scope) {
		return meld.around(scope, [ 'getDamageSeries', 'getCritSeries', 'getEvadeSeries' ], function(joinpoint) {
			var attacker = joinpoint.target.attacker;
			var defender = joinpoint.target.defender;
			var series = joinpoint.proceed();

			//The Emperor guarantees at least one crit/evade, so the entire distribution shifts
			if(joinpoint.method === 'getEvadeSeries') {
				if(defender.getUpgrade('emperor_palpatine')) {
					joinpoint.target.smushRight(series);
				}
			} else if(joinpoint.method === 'getCritSeries' || joinpoint.method === 'getDamageSeries') {
				if(attacker.getUpgrade('emperor_palpatine')) {
					joinpoint.target.smushRight(series);
				}
			}

			return series;
		});
	}
}

//This must be the very last dice modification - the card reads 'Your dice cannot be modified again this attack'
export var accuracy_corrector = {
	priority: 100,
	fn: function(scope) {
		return meld.around(scope, [ 'getHitSeries', 'getCritSeries', 'getDamageSeries' ], function(joinpoint) {
			var attacker = joinpoint.target.attacker;
			var defender = joinpoint.target.defender;
			var series = joinpoint.proceed();

			if(attacker.getUpgrade('accuracy_corrector')) {
				if(joinpoint.method === 'getDamageSeries' || joinpoint.method === 'getHitSeries') {
					if(series.length >= 2) {
						var zero = series[0];

						//Can't ever get zero results, becomes 2 (or 1 if we only have one die)
						series[0] = 0;
						series[1] += zero; 
						
						if(series.length >= 3) {
							var one = series[1];

							//Can't ever get 1 result, becomes 2
							series[1] = 0;
							series[2] += one;
						}

						return series;
					}
				} else if(joinpoint.method === 'getCritSeries') {
					series[0] = series[0] ? 0 : series[0];
					series[1] = series[1] ? 0 : series[1];
				}
			}

			return series;
		});
	}
}

export var twin_laser_turret = {
	priority: 101,
	fn: function(scope) {
		return meld.around(scope, [ 'getDamageSeries' ], function(joinpoint) {
			var attacker = joinpoint.target.attacker;
			var defender = joinpoint.target.defender;
			var series = joinpoint.proceed();

			if(attacker.getUpgrade('twin_laser_turret')) {
				if(joinpoint.method === 'getDamageSeries') {
					//All numbers above 1 become 1
				}
			}

			return series;
		});
	}
}