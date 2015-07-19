import _ from 'lodash';
import * as stats from 'app/math/stats';

//Dice
var sides = 8;

var attack = {
	crit: 1 / sides,
	hit: 3 / sides,
	focus: 2 / sides,
	blank: 2 / sides
};
attack.hitOrCrit = attack.crit + attack.hit;

var defend = {
	evade: 3 / sides,
	focus: 2 / sides,
	blank: 3 / sides
};

/**
 * Calculates a series of hit probabilities in a simple opposed atk/def die roll
 *
 * @param  {Number} atkDice     Number of attack dice
 * @param  {Number} defDice     Number of defense dice
 * @param  {Boolean} atkFocus   If the attacker has a Focus token
 * @param  {Boolean} defFocus   If the defender has a Focus token
 * @param  {Boolean} defEvade   If the defender has an Evade token
 * @return {Array}              Array of ordered pairs [# hits, probability]
 */
export function getCombatSeries(atkDice, defDice, atkFocus, defFocus, defEvade) {
	//Upper bound on hits is number of attack dice
	return _.times(atkDice + 1, function(index) {
		return [ index, getHitChance(index, atkDice, defDice, atkFocus, defFocus, defEvade) ];
	});
}

/**
 * Determines the probability of a specific number of hits with an opposed die roll
 *
 * @param  {Number}  targetHits Target number of hits
 * @param  {Number}  atkDice    Number of attack dice
 * @param  {Number}  defDice    Number of defense dice
 * @param  {Boolean} atkFocus   If the attacker has a Focus token
 * @param  {Boolean} defFocus   If the defender has a Focus token
 * @param  {Boolean} defEvade   If the defender has an Evade token
 * @return {Number}             Probability of given number of hits
 */
export function getHitChance(targetHits, atkDice, defDice, atkFocus, defFocus, defEvade) {
	//Calculate chances for specific numbers of hits/evades
	var modifiedHitChance = attack.hitOrCrit + (atkFocus ? attack.focus : 0);
	var modifiedEvadeChance = defend.evade + (defFocus ? defend.focus : 0);

	var hits = _.times(atkDice + 1, function(index) {
		return stats.binomialExperiment(atkDice, index, modifiedHitChance, 1 - modifiedHitChance);
	});

	var evades = _.times(defDice + 1, function(index) {
		return stats.binomialExperiment(defDice, index, modifiedEvadeChance, 1 - modifiedEvadeChance);
	});

	//The possibility for a hit at a particular point is the chance that they hit AND do not evade
	// console.log('TARGET HITS:', targetHits);
	var combatResults = _.sum(_.map(hits, function(hitChance, hitIndex) {
		//The probability of a particular hit count is the sum of probabilities for that
		//hit quantity at each level of evasion
		return _.sum(_.map(evades, function(evadeChance, evadeIndex) {
			//Our minimum amount of evades is 1
			if(defEvade) {
				evadeIndex += 1;
			}

			//Zero is an edge case - counts if hits are zero OR hits <= evades
			var isZeroHit = targetHits === 0 && hitIndex <= evadeIndex;
			//Otherwise, counts if hits - evades == target
			var isHit = (hitIndex - evadeIndex) === targetHits;

			if(isZeroHit || isHit) {
				// console.log('[' + hitIndex + ', ' + evadeIndex + ']:', hitChance * evadeChance);
				return hitChance * evadeChance;
			}
			// console.log('[' + hitIndex + ', ' + evadeIndex + ']:', 0);
			return 0;
		}));
	}));

	// console.log('hits:', hits);
	// console.log('evades:', evades);
	// console.log('results:', combatResults);

	return combatResults;
}