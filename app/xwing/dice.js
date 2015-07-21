import _ from 'lodash';
import * as Stats from 'app/math/stats';

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
 * Simulates a single attack against a defender
 * Hits are random according to the combat probability distribution
 *
 * @param  {Ship} attacker The attacking ship
 * @param  {Ship} defender The defending ship
 * @return {Number}        Number of hits inflicted
 */
export function singleCombat(attacker, defender) {
	var series = combatSeries(attacker, defender);
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
 * @param  {Ship} attacker The attacking ship
 * @param  {Ship} defender The defending ship
 * @return {Number}        Expected hits
 */
export function averageCombatSeries(attacker, defender) {
	var series = combatSeries(attacker, defender);

	return _.reduce(series, function(accum, item) {
		return accum + (item[0] * item[1]);
	}, 0);
}

/**
 * Calculates a series of hit probabilities in a simple opposed atk/def die roll
 *
 * @param  {Ship} attacker The attacking ship
 * @param  {Ship} defender The defending ship
 * @return {Array}         Array of ordered pairs [# hits, probability]
 */
export function combatSeries(attacker, defender) {
	//Upper bound on hits is number of attack dice
	return _.times(attacker.current.attack + 1, function(index) {
		return [ index, combatHitChance(index, attacker, defender) ];
	});
}

/**
 * Determines the probability of a specific number of hits with an opposed die roll
 *
 * @param  {Number} targetHits Target number of hits
 * @param  {Ship}   attacker   The attacking ship
 * @param  {Ship}   defender   The defending ship
 * @return {Number}            Probability of given number of hits
 */
export function combatHitChance(targetHits, attacker, defender) {
	//Calculate chances for specific numbers of hits/evades
	var modifiedHitChance = attack.hitOrCrit + (attacker.current.focus ? attack.focus : 0);
	var modifiedEvadeChance = defend.evade + (defender.current.focus ? defend.focus : 0);

	var hits = _.times(attacker.current.attack + 1, function(index) {
		return Stats.binomialExperiment(attacker.current.attack, index, modifiedHitChance, 1 - modifiedHitChance);
	});

	var evades = _.times(defender.current.defense + 1, function(index) {
		return Stats.binomialExperiment(defender.current.defense, index, modifiedEvadeChance, 1 - modifiedEvadeChance);
	});

	//The possibility for a hit at a particular point is the chance that they hit AND do not evade
	var combatResults = _.sum(_.map(hits, function(hitChance, hitIndex) {
		//The probability of a particular hit count is the sum of probabilities for that
		//hit quantity at each level of evasion
		return _.sum(_.map(evades, function(evadeChance, evadeIndex) {
			//Evade amount goes up by one if we have an evade token
			if(defender.current.evade) {
				evadeIndex += 1;
			}

			//Zero is an edge case - counts if hits are zero OR hits <= evades
			var isZeroHit = targetHits === 0 && hitIndex <= evadeIndex;
			//Otherwise, counts if hits - evades == target
			var isHit = (hitIndex - evadeIndex) === targetHits;

			if(isZeroHit || isHit) {
				return hitChance * evadeChance;
			}

			return 0;
		}));
	}));

	return combatResults;
}