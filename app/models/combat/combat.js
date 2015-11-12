import  _ from 'lodash';

import CombatLog from 'app/models/combat_log/combat_log';
import * as Dice from 'app/models/dice/dice';

//Map fire modes to functions
var fireModes = {
	random: fireRandom,
	weakest: fireWeakest,
	strongest: fireStrongest,
	maximize: fireMaximizeHit
};

/**
 * Simulates a combat between a set of attackers and defenders
 *
 * @param  {Array}  squads     Collection of squadrons
 * @param  {Object} options    Combat configuration
 * @return {CombatLog}         Combat log
 */
export function simulate(squads, options) {
	var log = new CombatLog();
	log.iterations = options.iterations;
	log.fireMode = options.fireMode;

	_.times(options.iterations, function(iteration) {
		var currentRound = 0;
		while(true) {
			//Set current iteration/round
			log.iteration = iteration;
			log.round = currentRound;

			//Execute combat round
			round(squads, log);

			if(remainingSquads(squads) <= 1) {
				//Combat is done
				break;
			} else {
				//Combat continues
				//Increment round
				currentRound++;
			}
		}

		//Log which squad won
		var winner = winningSquad(squads);
		var losers = losingSquads(squads);
		log.addCombatData(winner, null, 'win', 1);
		_.each(losers, function(loser) {
			log.addCombatData(loser, null, 'loss', 1);
		});
	});

	return log;
}

function allShips(squads) {
	return _.reduce(squads, function(all, squad) {
		return all.concat(squad.ships.attr());
	}, []);
}

/**
 * Returns a flattened list of all non-destroyed ships
 *
 * @param  {Array}   squads Collection of squadrons
 * @return {Array}          Non-destroyed ships
 */
function allRemainingShips(squads) {
	var all = allShips(squads);

	return _.filter(all, function(ship) {
		return !ship.isDestroyed();
	});
}

/**
 * Returns all non-destroyed ships in a ship collection
 *
 * @param  {Array} squad Collection of ships
 * @return {Array}       Non-destroyed ships in collection
 */
function remainingShips(squad) {
	return _.filter(squad.ships, function(ship) {
		return !ship.isDestroyed();
	});
}

/**
 * Determines the number of squads with any non-destroyed ships that remain
 *
 * @param  {Array}   squads Collection of squadrons
 * @return {Boolean}        Whether any squad has remaining ships
 */
function remainingSquads(squads) {
	var squadsRemaining = _.reduce(squads, function(remaining, squad) {
		return remaining + (remainingShips(squad).length ? 1 : 0);
	}, 0);

	return squadsRemaining;
}

/**
 * Executes a round of combat
 *
 * @param  {Array}     attackers Attacking ships
 * @param  {CombatLog} log       Combat log
 * @return {Boolean}             Returns true if combat is complete
 */
function round(squads, log) {
	var fireMode = log.fireMode;
	var combatOrder = _.sortBy(allShips(squads), 'skill');

	_.each(combatOrder, function(attacker) {
		//Double-check the combat order and ignore ships that are dead
		if(attacker.isDestroyed()) {
			return;
		}

		//Find eligible defenders
		var defenders = _.filter(combatOrder, function(ship) {
			return (ship.squad.id !== attacker.squad.id) && !ship.isDestroyed();
		});

		//Double check to see if we have any defenders
		if(!defenders.length) {
			return;
		}

		//Choose a ship to fire at, based on configuration
		var defender = fireModes[fireMode](attacker, defenders, log);
		var hits = Dice.singleCombat(attacker, defender);

		//Log it first, so ships show current state in output, instead of post-attack state
		log.log(attacker, defender, hits);
		log.addCombatData(attacker.squad, attacker, 'attacksMade', attacker.attack);
		log.addCombatData(attacker.squad, attacker, 'damageDealt', hits);
		log.addCombatData(defender.squad, defender, 'damageReceived', hits);

		//Get wrecked
		defender.applyDamage(hits);
	});

	//Mark ships that survived this round
	_.each(allRemainingShips(squads), function(ship) {
		log.addCombatData(ship.squad, ship, 'roundsSurvived', 1);
	});
}

//Post combat analysis
function winningSquad(squads) {
	return _.find(squads, function(squad) {
		return remainingShips(squad).length > 0;
	});
}

function losingSquads(squads) {
	return _.filter(squads, function(squad) {
		return remainingShips(squad).length === 0;
	});
}

//Fire mode functions
function fireRandom(attacker, defenders, log) {
	return _.sample(defenders, 1)[0];
}

function fireWeakest(attacker, defenders, log) {
	return _.min(defenders, function(defender) {
		//TODO: This is probably too simplistic
		return defender.shield + defender.hull;
	});
}

function fireStrongest(attacker, defenders, log) {
	return _.max(defenders, function(defender) {
		//TODO: This is probably too simplistic
		return defender.attack;
	});
}

function fireMaximizeHit(attacker, defenders, log) {
	return _.max(defenders, function(defender) {
		return Dice.averageCombatSeries(attacker, defender);
	});
}
