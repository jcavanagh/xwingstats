import meld from 'meld';
import { ATTACK, AGILITY } from './faces';
import * as Stats from 'app/math/stats';

export var sensor_jammer = {
	priority: 1,
	fn: function(scope) {
		return meld.around(scope, [ 'getHitOrCritSeries', 'getHitSeries' ], function(joinpoint) {
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
		return meld.around(scope, [ 'getHitOrCritSeries', 'getHitSeries', 'getCritSeries', 'getEvadeSeries'], function(joinpoint) {
			var attacker = joinpoint.target.attacker;
			var defender = joinpoint.target.defender;
			var series = joinpoint.proceed();

			if(joinpoint.method === 'getEvadeSeries') {
				if(defender.getUpgrade('lone_wolf')) {
					//Calculate the odds of rolling N blanks
					//If we roll a blank, we can reroll one with Lone Wolf
					return joinpoint.target.rerollSeries(series, defender.attr('agility'), 1, AGILITY.BLANK, joinpoint.target.getModifiedEvadeChance());
				}
			} else if(joinpoint.method === 'getHitSeries' || joinpoint.method === 'getCritSeries' || joinpoint.method === 'getHitOrCritSeries') {
				if(attacker.getUpgrade('lone_wolf')) {
					//Due to the no-multi-reroll rule, target locks supersede lone wolf on the attack
					if(!attacker.getTargetLock(defender)) {
						var hitChance;
						if(joinpoint.method === 'getHitSeries') {
							hitChance = joinpoint.target.getModifiedHitChance();
						} else if(joinpoint.method === 'getCritSeries') {
							hitChance = joinpoint.target.getModifiedCritChance();
						} else if(joinpoint.method === 'getHitOrCritSeries') {
							hitChance = joinpoint.target.getModifiedHitOrCritChance();
						}

						return joinpoint.target.rerollSeries(series, attacker.attr('attack'), 1, ATTACK.BLANK, hitChance);
					}
				}
			}

			return series;
		});
	}
}

export var han_solo_pilot = {
	priority: 97,
	fn: function(scope) {
		return meld.around(scope, [ 'getHitSeries', 'getCritSeries', 'getHitOrCritSeries' ], function(joinpoint) {
			var attacker = joinpoint.target.attacker;
			var defender = joinpoint.target.defender;
			var sourceShip = joinpoint.args[0]
			var series = joinpoint.proceed();

			//FIXME: Should the code below use a weighted comparison between probability bands?  Currently is very staircase-like
			var hanUsedPct;
			if(joinpoint.method === 'getHitSeries') {
				//Here we assume you'll use a Han reroll when your rolled hits are less than 3/8 of your dice, the expectation on bare dice
				hanUsedPct = _.reduce(series, function(total, seriesItem, index) {
					return ( index < (attacker.attr('attack') * 3/8) ) ? total : total + seriesItem;
				}, 0);

				return joinpoint.target.rerollSeries(series, attacker.attr('attack'), 1, hanUsedPct, joinpoint.target.getModifiedHitChance());
			} else if(joinpoint.method === 'getCritSeries') {
				//Here we assume you'll use a Han reroll if your rolled crits are less than 1/8 of your dice, the expectation on bare dice
				hanUsedPct = _.reduce(series, function(total, seriesItem, index) {
					return ( index < (attacker.attr('attack') / 4) ) ? total : total + seriesItem;
				}, 0);

				return joinpoint.target.rerollSeries(series, attacker.attr('attack'), 1, hanUsedPct, joinpoint.target.getModifiedCritChance());
			} else if(joinpoint.method === 'getHitOrCritSeries') {
				//Combining the above, sort of - assume we Han reroll if the total of hits and crits is less than half of your dice
				hanUsedPct = _.reduce(series, function(total, seriesItem, index) {
					return ( index < (attacker.attr('attack') / 2) ) ? total : total + seriesItem;
				}, 0);

				return joinpoint.target.rerollSeries(series, attacker.attr('attack'), 1, hanUsedPct, joinpoint.target.getModifiedHitOrCritChance());
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
			var defender = joinpoint.target.defender;
			var evadeChance = joinpoint.proceed();

			if(attacker.getUpgrade('zuckuss')) {
				return Math.pow(evadeChance, 2);
			} else {
				return evadeChance;
			}
		});
	}
}

export var emperor_palpatine = {
	priority: 99,
	fn: function(scope) {
		return meld.around(scope, [ 'getHitOrCritSeries', 'getCritSeries', 'getEvadeSeries' ], function(joinpoint) {
			var attacker = joinpoint.target.attacker;
			var defender = joinpoint.target.defender;
			var series = joinpoint.proceed();

			//The Emperor guarantees at least one crit/evade, so the entire distribution shifts
			if(joinpoint.method === 'getEvadeSeries') {
				if(defender.getUpgrade('emperor_palpatine')) {
					joinpoint.target.smushRight(series);
				}
			} else if(joinpoint.method === 'getCritSeries' || joinpoint.method === 'getHitOrCritSeries') {
				if(attacker.getUpgrade('emperor_palpatine')) {
					joinpoint.target.smushRight(series);
				}
			}

			return series;
		});
	}
}
