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

export var lone_wolf = {
	priority: 2,
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

export var poe_dameron = {
	priority: 1,
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
