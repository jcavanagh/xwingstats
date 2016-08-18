import _ from 'lodash';
import * as Stats from 'app/math/stats';

import { ATTACK, AGILITY } from './faces';

export default class DiceSeries {
	constructor(attacker, defender) {
		this.attacker = attacker;
		this.defender = defender;
	}

	/**
	 * Simulates a single attack against a defender
	 * Hits are random according to the combat probability distribution
	 *
	 * @return {Number}          Number of hits inflicted
	 */
	singleCombat() {
		var series = this.combatDamageSeries();
		var rnd = Math.random();

		//Find the probability band that the random number lies within
		var accum = 0;
		var index = 0;
		var hits;
		while(accum < rnd) {
			hits = series[index][0];
			accum += series[index][1];
			index++;
		}

		return hits;
	}

	/**
	 * Returns the expected number of hits between an attacker and defender
	 *
	 * @return {Number}          Expected hits
	 */
	averageCombatDamageSeries() {
		var series = this.combatDamageSeries();

		if(series && series.length) {
			return _.reduce(series, function(accum, item) {
				_.forOwn(item, function(val, key, item) {
					if(key !== 'index') {
						accum[key] = accum[key] || 0;
						accum[key] += (val * item.index);
					}
				});

				return accum;
			}, {});
		}
	}

	/**
	 * Creates a combat series item for a particular target damage number, containing probabilities for a specified number of crits and hits
	 * Series item sample: {
	 *     index: 0,
	 *     hit: 0.5,
	 *     crit: 0.125
	 * }
	 *
	 * @param  {Ship}   attacker     The attacking ship
	 * @param  {Ship}   defender     The defending ship
	 * @return {Array}               Probability of: [ hits, crits ]
	 */
	combatDamageSeries() {
		//Calculate chances for specific numbers of hits/evades
		var self = this;
		var numDice = this.attacker.attr('attack') + 1;
		var hitSeries = this.getHitSeries();
		var critSeries = this.getCritSeries();
		var damageSeries = this.getDamageSeries();
		var evades = this.getEvadeSeries();

		//The possibility for a damage at a particular point is the chance that they damage AND do not evade
		return _.map(_.range(numDice), function(targetDamage) {
			var damageProbabilities = _(_.range(numDice)).map(function(damageIndex) {
				var hitChance = hitSeries[damageIndex];
				var critChance = critSeries[damageIndex];
				var damageChance = damageSeries[damageIndex];

				//The probability of a particular damage count is the sum of probabilities for that
				//damage quantity at each level of evasion
				//Returns [ sumOfHitChance, sumOfCritChance ]
				return _(evades).map(function(evadeChance, evadeIndex) {
					//Evade amount goes up by one if we have an evade token, since it adds an evade result to our pool
					if(self.defender.attr('evade')) {
						evadeIndex += 1;
					}

					//Zero damage is an edge case - if damage target is zero, then count damage <= evades
					var isSpecialZero = targetDamage === 0 && damageIndex <= evadeIndex;
					//Otherwise, counts if damage - evades === target
					var isDamage = (damageIndex - evadeIndex) === targetDamage;

					if(isSpecialZero || isDamage) {
						//FIXME: Hits must be cancelled first
						return [ damageChance * evadeChance, hitChance * evadeChance, critChance * evadeChance ];
					}

					return [0, 0];
				}).thru(function(x) { return _.zip.apply(x, x); }).map(_.sum).value();
			}).thru(function(x) { return _.zip.apply(x, x); }).map(_.sum).value();

			return {
				index: targetDamage,
				damage: damageProbabilities[0] || 0,
				hit: damageProbabilities[1] || 0,
				crit: damageProbabilities[2] || 0,
			}
		});
	}

	/**
	 * Determines the probability of a specific number of evades a ship will roll, with any modifiers the attacker might create
	 *
	 * @param  {Ship}   attacker   The attacking ship
	 * @param  {Ship}   defender   The defending ship
	 * @return {Number}            Probability of given number of evades
	 */
	combatEvadeSeries() {
		var self = this;
		var numDice = this.defender.attr('agility') + 1 + this.getEvadeModifier();
		var modifiedEvadeChance = this.getModifiedEvadeChance();
		var evades = this.getEvadeSeries();

		return _.map(_.range(numDice), function(targetEvades) {
			var evadeProbability = _.sum(_.map(evades, function(evadeChance, evadeIndex) {
				if(self.defender.attr('evade')) {
					evadeIndex += 1;
				}

				return evadeIndex === targetEvades ? evadeChance : 0;
			}));

			return {
				index: targetEvades,
				evade: evadeProbability || 0
			}
		});
	}

	//Binomial probability generators
	getDamageSeries() {
		var modifiedHitOrCritChance = this.getModifiedHitOrCritChance();
		var atk = this.attacker.attr('attack');

		return this.binomialExperiment(atk, modifiedHitOrCritChance);
	}

	getCritSeries() {
		var modifiedCritChance = this.getModifiedCritChance();
		var atk = this.attacker.attr('attack');

		return this.binomialExperiment(atk, modifiedCritChance);
	}

	getHitSeries() {
		var modifiedHitChance = this.getModifiedHitChance();
		var atk = this.attacker.attr('attack');

		return this.binomialExperiment(atk, modifiedHitChance);
	}

	getEvadeSeries() {
		var modifiedEvadeChance = this.getModifiedEvadeChance();
		var def = this.defender.attr('agility');

		return this.binomialExperiment(def, modifiedEvadeChance);
	}

	//Private helpers
	rerollSeries(numDice, numRerolls, rerollChance, rerollSuccessChance) {
		//We can't reroll more dice than we have
		if(numRerolls > numDice) {
			numRerolls = numDice;
		}

		//NB: This assumes the rerollSuccessChance is the success chance implied by the original series
		//    If those concepts disagree, the reroll expected value will not be accurate
		//TODO: Target lock is probably just a special case of this - may want to reimplement in that way
		var rerollableSeries = this.binomialExperiment(numRerolls, rerollChance);
		var pctReroll = _.reduce(rerollableSeries, function(total, seriesItem, index) {
			//Odds of rolling at least N rerollable die
			return index === 0 ? total : total + seriesItem;
		}, 0);

		var rerollValue = rerollSuccessChance * (pctReroll / (numDice + 1 - numRerolls) );

		return this.binomialExperiment(numDice, rerollSuccessChance + rerollValue );
	}

	binomialExperiment(dice, successChance) {
		return _.times(dice + 1, function(index) {
			return Stats.binomialExperiment(dice, index, successChance, 1 - successChance);
		});
	}

	getModifiedHitOrCritChance() {
		var focusMod = this.getFocusModifier(this.attacker);

		if(this.hasTargetLock(this.attacker, this.defender)) {
			if(focusMod) {
				//If focused, rerolls apply only to blanks
				return (ATTACK.BLANK * (ATTACK.HIT + ATTACK.CRIT + ATTACK.FOCUS)) + (ATTACK.HIT + ATTACK.CRIT + ATTACK.FOCUS);
			} else {
				//If not focused, rerolls apply to focus or blank
				return ((ATTACK.BLANK + ATTACK.FOCUS) * (ATTACK.HIT + ATTACK.CRIT)) + (ATTACK.HIT + ATTACK.CRIT);
			}
		} else {
			return (ATTACK.HIT + ATTACK.CRIT) + (ATTACK.FOCUS * focusMod);
		}
	}

	getModifiedHitChance() {
		var focusMod = this.getFocusModifier(this.attacker);

		if(this.hasTargetLock(this.attacker, this.defender)) {
			if(focusMod) {
				//If focused, rerolls apply only to blanks
				return (ATTACK.BLANK * (ATTACK.HIT + ATTACK.FOCUS)) + (ATTACK.HIT + ATTACK.FOCUS);
			} else {
				//If not focused, rerolls apply to focus or blank
				return ((ATTACK.BLANK + ATTACK.FOCUS) * ATTACK.HIT) + ATTACK.HIT;
			}
		} else {
			return ATTACK.HIT + (ATTACK.FOCUS * focusMod);
		}
	}

	getModifiedCritChance() {
		if(this.hasTargetLock(this.attacker, this.defender)) {
			return ((1 - ATTACK.CRIT) * ATTACK.CRIT) + ATTACK.CRIT;
		} else {
			return ATTACK.CRIT;
		}
	}

	getModifiedEvadeChance() {
		return AGILITY.EVADE + (AGILITY.FOCUS * this.getFocusModifier(this.defender));
	}

	getEvadeModifier() {
		if(_.isNumber(this.defender.attr('evade'))) {
			return this.defender.attr('evade');
		}

		return this.defender.attr('evade') ? 1 : 0;
	}

	getFocusModifier(ship) {
		return ship.attr('focus') ? 1 : 0;
	}

	hasTargetLock(source, destination) {
		return source.getTargetLock(destination);
	}

	//Series rotater
	rotateRight(series) {
		//Rotate right 1
		series.unshift(series.pop());
	}

	rotateLeft(series) {
		//Rotate left 1
		series.push(series.shift());
	}

	smushRight(series) {
		//Zero- or one-length series are not valid
		if(!series || !series.length || series.length == 1) { return; }

		this.rotateRight(series);

		///Combine best and rotated second best
		var last = series.length - 1;
		series[last] = series[0] + series[last];

		//Zero out zero
		series[0] = 0;
	}

	smushLeft(series) {
		//Zero- or one-length series are not valid
		if(!series || !series.length || series.length == 1) { return; }

		this.rotateLeft(series);

		///Combine worst and rotated second worst
		var last = series.length - 1;
		series[0] = series[0] + series[1];

		//Zero out last
		series[last] = 0;
	}
}
