import _ from 'lodash';
import * as Stats from 'app/math/stats';

//Dice
var sides = 8;

var attack = {
	crit: 1 / sides,
	hit: 3 / sides,
	focus: 2 / sides,
	blank: 2 / sides,
	baseHit: 3,
	baseCrit: 1
};

var defend = {
	evade: 3 / sides,
	focus: 2 / sides,
	blank: 3 / sides
};

/**
 * Simulates a single attack against a defender
 * Hits are random according to the combat probability distribution
 *
 * @param  {Ship}   attacker The attacking ship
 * @param  {Ship}   defender The defending ship
 * @param  {Object} config   Combat configuration
 * @return {Number}          Number of hits inflicted
 */
export function singleCombat(attacker, defender, config) {
	var series = combatSeries(attacker, defender, config);
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
 * @param  {Ship}   attacker The attacking ship
 * @param  {Ship}   defender The defending ship
 * @param  {Object} config   Combat configuration
 * @return {Number}          Expected hits
 */
export function averageCombatSeries(attacker, defender, config) {
	var series = combatSeries(attacker, defender, config);

	return _.reduce(series, function(accum, item) {
		return accum + (item[0] * item[1]);
	}, 0);
}

/**
 * Calculates a series of hit/evade probabilities in a simple opposed atk/def die roll
 *
 * @param  {Ship}   attacker The attacking ship
 * @param  {Ship}   defender The defending ship
 * @param  {Object} config   Combat configuration
 * @return {Array}           Array of ordered pairs [# hits, probability]
 */
export function combatSeries(attacker, defender, config) {
	var fn = combatHitChance;
	var numDice = attacker.attr('attack') + 1;

	if(config && config.invert) {
		fn = combatEvadeChance;
		numDice = defender.attr('agility') + 1 + getEvadeModifier(attacker, defender, config);
	}

	//Upper bound on hits/evades is number of attack/defense dice
	var combatResults = _.times(numDice, function(index) {
		return [ index, fn(index, attacker, defender, config) ];
	});

	return combatResults;
}

/**
 * Determines the probability of a specific number of hits with an opposed die roll
 *
 * @param  {Number} targetHits Target number of hits
 * @param  {Ship}   attacker   The attacking ship
 * @param  {Ship}   defender   The defending ship
 * @return {Number}            Probability of given number of hits
 */
export function combatHitChance(targetHits, attacker, defender, config) {
	//Calculate chances for specific numbers of hits/evades
	var hits = getHitOrCritSeries(attacker, defender, config);
	var evades = getEvadeSeries(attacker, defender, config);

	//The possibility for a hit at a particular point is the chance that they hit AND do not evade
	var combatResults = _.sum(_.map(hits, function(hitChance, hitIndex) {
		//FIXME: Not entirely correct, crits cannot be sensor jammed, so all-crit rolls would be incorrect
		if(defender.getUpgrade('sensor_jammer') && !attacker.attr('focus')) {
			hitIndex -= 1;
		}

		//The probability of a particular hit count is the sum of probabilities for that
		//hit quantity at each level of evasion
		return _.sum(_.map(evades, function(evadeChance, evadeIndex) {
			//Evade amount goes up by one if we have an evade token
			if(defender.attr('evade')) {
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

/**
 * Determines the probability of a specific number of evades a ship will roll, with any modifiers the attacker might create
 *
 * @param  {Number} targetHits Target number of evades
 * @param  {Ship}   attacker   The attacking ship
 * @param  {Ship}   defender   The defending ship
 * @return {Number}            Probability of given number of evades
 */
export function combatEvadeChance(targetEvades, attacker, defender, config) {
	var modifiedEvadeChance = getModifiedEvadeChance(attacker, defender, config);
	var evades = getEvadeSeries(attacker, defender, config);

	return _.sum(_.map(evades, function(evadeChance, evadeIndex) {
		if(defender.attr('evade')) {
			evadeIndex += 1;
		}
		return evadeIndex === targetEvades ? evadeChance : 0;
	}));
}

//Private helpers
function getModifiedHitChance(attacker, defender, config) {
	var focusMod = getFocusModifier(attacker);

	if(attacker.getTargetLock(defender)) {
		if(focusMod) {
			//If focused, rerolls apply only to blanks
			return (attack.blank * (attack.hit + attack.focus)) + (attack.hit + attack.focus);
		} else {
			//If not focused, rerolls apply to focus or blank
			return ((attack.blank + attack.focus) * attack.hit) + attack.hit;
		}
	} else {
		return attack.hit + (attack.focus * focusMod);
	}
}

function getModifiedCritChance(attacker, defender, config) {
	if(attacker.getTargetLock(defender)) {
		return ((1 - attack.crit) * attack.crit) + attack.crit;
	} else {
		return attack.crit;
	}
}

function getModifiedEvadeChance(attacker, defender, config) {
	return defend.evade + (defend.focus * getFocusModifier(defender));
}

function getCritSeries(attacker, defender, config) {
	var modifiedCritChance = getModifiedCritChance(attacker, defender, config);
	var atk = attacker.attr('attack');

	return _.times(atk + 1, function(index) {
		return Stats.binomialExperiment(atk, index, modifiedCritChance, 1 - modifiedCritChance);
	});
}

function getHitSeries(attacker, defender, config) {
	var modifiedHitChance = getModifiedHitChance(attacker, defender, config);
	var atk = attacker.attr('attack');

	return _.times(atk + 1, function(index) {
		return Stats.binomialExperiment(atk, index, modifiedHitChance, 1 - modifiedHitChance);
	});
}

function getHitOrCritSeries(attacker, defender, config) {
	var modifiedHitOrCritChance = getModifiedHitChance(attacker, defender, config) + getModifiedCritChance(attacker, defender, config);
	var atk = attacker.attr('attack');

	return _.times(atk + 1, function(index) {
		return Stats.binomialExperiment(atk, index, modifiedHitOrCritChance, 1 - modifiedHitOrCritChance);
	});
}

function getEvadeSeries(attacker, defender, config) {
	var modifiedEvadeChance = getModifiedEvadeChance(attacker, defender, config);
	var def = defender.attr('agility');

	return _.times(def + 1, function(index) {
		return Stats.binomialExperiment(def, index, modifiedEvadeChance, 1 - modifiedEvadeChance);
	});
}

function getEvadeModifier(attacker, defender, config) {
	if(_.isNumber(defender.attr('evade'))) {
		return defender.attr('evade');
	}

	return defender.attr('evade') ? 1 : 0;
}

function getFocusModifier(ship, config) {
	if(_.isNumber(ship.attr('focus'))) {
		return ship.attr('focus');
	}

	return ship.attr('focus') ? 1 : 0;
}
