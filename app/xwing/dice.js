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
 * @return {Number}          Number of hits inflicted
 */
export function singleCombat(attacker, defender) {
	var series = combatDamageSeries(attacker, defender);
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
 * @return {Number}          Expected hits
 */
export function averageCombatDamageSeries(attacker, defender) {
	var series = combatDamageSeries(attacker, defender);

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
export function combatDamageSeries(attacker, defender) {
	//Calculate chances for specific numbers of hits/evades
	var numDice = attacker.attr('attack') + 1;
	var hitSeries = getHitSeries(attacker, defender);
	var critSeries = getCritSeries(attacker, defender);
	var hitOrCritSeries = getHitOrCritSeries(attacker, defender);
	var evades = getEvadeSeries(attacker, defender);

	//The possibility for a damage at a particular point is the chance that they damage AND do not evade
	return _.map(_.range(numDice), function(targetDamage) {
		var damageProbabilities = _(_.range(numDice)).map(function(damageIndex) {
			var hitChance = hitSeries[damageIndex];
			var critChance = critSeries[damageIndex];
			var damageChance = hitOrCritSeries[damageIndex];

			//The probability of a particular damage count is the sum of probabilities for that
			//damage quantity at each level of evasion
			//Returns [ sumOfHitChance, sumOfCritChance ]
			return _(evades).map(function(evadeChance, evadeIndex) {
				//Evade amount goes up by one if we have an evade token, since it adds an evade result to our pool
				if(defender.attr('evade')) {
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
export function combatEvadeSeries(attacker, defender) {
	var numDice = defender.attr('agility') + 1 + getEvadeModifier(attacker, defender);
	var modifiedEvadeChance = getModifiedEvadeChance(attacker, defender);
	var evades = getEvadeSeries(attacker, defender);

	return _.map(_.range(numDice), function(targetEvades) {
		var evadeProbability = _.sum(_.map(evades, function(evadeChance, evadeIndex) {
			if(defender.attr('evade')) {
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

//Series interceptors
function modifyDamageDicePool(dice, attacker, defender) {
	//No effects, yet
	return dice;
}

//Binomial probability generators
function getHitOrCritSeries(attacker, defender) {
	var modifiedHitOrCritChance = getModifiedHitOrCritChance(attacker, defender);
	var atk = attacker.attr('attack');

	return _.times(atk + 1, function(index) {
		return Stats.binomialExperiment(atk, index, modifiedHitOrCritChance, 1 - modifiedHitOrCritChance);
	});
}

function getCritSeries(attacker, defender) {
	var modifiedCritChance = getModifiedCritChance(attacker, defender);
	var atk = attacker.attr('attack');

	return _.times(atk + 1, function(index) {
		return Stats.binomialExperiment(atk, index, modifiedCritChance, 1 - modifiedCritChance);
	});
}

function getHitSeries(attacker, defender) {
	var modifiedHitChance = getModifiedHitChance(attacker, defender);
	var atk = attacker.attr('attack');

	return _.times(atk + 1, function(index) {
		return Stats.binomialExperiment(atk, index, modifiedHitChance, 1 - modifiedHitChance);
	});
}

function getEvadeSeries(attacker, defender) {
	var modifiedEvadeChance = getModifiedEvadeChance(attacker, defender);
	var def = defender.attr('agility');

	return _.times(def + 1, function(index) {
		return Stats.binomialExperiment(def, index, modifiedEvadeChance, 1 - modifiedEvadeChance);
	});
}

//Private helpers
function getModifiedHitOrCritChance(attacker, defender) {
	var focusMod = getFocusModifier(attacker);

	if(attacker.getTargetLock(defender)) {
		if(focusMod) {
			//If focused, rerolls apply only to blanks
			return (attack.blank * (attack.hit + attack.crit + attack.focus)) + (attack.hit + attack.crit + attack.focus);
		} else {
			//If not focused, rerolls apply to focus or blank
			return ((attack.blank + attack.focus) * (attack.hit + attack.crit)) + (attack.hit + attack.crit);
		}
	} else {
		return (attack.hit + attack.crit) + (attack.focus * focusMod);
	}
}

function getModifiedHitChance(attacker, defender) {
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

function getModifiedCritChance(attacker, defender) {
	if(attacker.getTargetLock(defender)) {
		return ((1 - attack.crit) * attack.crit) + attack.crit;
	} else {
		return attack.crit;
	}
}

function getModifiedEvadeChance(attacker, defender) {
	return defend.evade + (defend.focus * getFocusModifier(defender));
}

function getEvadeModifier(attacker, defender) {
	if(_.isNumber(defender.attr('evade'))) {
		return defender.attr('evade');
	}

	return defender.attr('evade') ? 1 : 0;
}

function getFocusModifier(ship) {
	return ship.attr('focus') ? 1 : 0;
}
