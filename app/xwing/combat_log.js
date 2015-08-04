import _ from 'lodash';
import * as WriteDeep from 'app/util/write_deep';

export default class CombatLog {
	constructor() {
		/**
		 * Ship data
		 *
		 * combatData: {
		 * 	0: {
		 * 	  "squad": {
		 * 	    //All data for the squad in general
		 * 	  },
		 * 	  "ship_0": {
		 * 	    //All data for a ship
		 * 	  }
		 * 	}
		 * }
		 *
		 * @property roundsSurvived
		 * @property attacksMade
		 * @property damageDealt
		 * @property damageReceived
		 */
		this.combatData = {};

		//Stores a text description of each round
		this.combatText = {};

		//Total iterations
		this.iterations = 0;
		//Current iteration
		this.iteration = 0;
		//Current round
		this.round = 0;
	}

	/**
	 * Adds a combat data point to this iteration for the ship
	 * Sums, does not replace
	 *
	 * @param {Squad}  squad  The squad to log data for
	 * @param {Ship}   [ship] The ship to log data for
	 * @param {String} prop   The property to modify
	 * @param {Number} value  The value to add to the property
	 */
	addCombatData(squad, ship, prop, value) {
		if(ship) {
			WriteDeep.addDeep(this.combatData, value, [squad.id, ship.id, this.iteration, prop]);
		} else {
			WriteDeep.addDeep(this.combatData, value, [squad.id, 'squad', this.iteration, prop]);
		}
	}

	getSquadData(squad) {
		return this.combatData[squad.id]['squad'];
	}

	getSquadShipData(squad) {
		//Strip the squad data container, leave only the ship containers
		return _.omit(this.combatData[squad.id], 'squad');
	}

	/**
	 * Logs a combat round
	 *
	 * @param  {Array}  attackers  Attacking ships
	 * @param  {Array}  defenders  Defending ships
	 */
	log(attacker, defender, hits) {
		var hitStr = (hits === 1) ? 'hit' : 'hits';
		this.writeText(attacker.toString(), 'scores', hits, hitStr + ' against', defender.toString());
	}

	/**
	 * Writes a string representation of a round
	 *
	 * @param {String} args Variable number of strings to concat, space separated
	 */
	writeText() {
		if(this.iteration == null) {
			return;
		}

		//Stringify args, inserting spaces
		var logStr = _.reduce(arguments, function(str, arg) {
			str += arg + ' ';
			return str;
		}, '');

		var scope = WriteDeep.buildHierarchy(this.combatText, [this.iteration, this.round], []);
		scope.push(logStr);
	}

	/**
	 * Serializes a particular iteration of combat
	 * If no iteration is provided, serializes all of it
	 *
	 * @param  {Array} [iteration]  The iteration array
	 * @return {String}             Stringified combat
	 */
	toString(iteration) {
		function stringifyIteration(iter) {
			return _.reduce(iter, function(iterStr, round, roundIndex) {
				return iterStr + _.reduce(round, function(roundStr, logItem, roundItemIndex) {
					//Generate the round prefix if it's the first item being processed this round
					var prefix = (parseInt(roundIndex, 10) + 1) + ': ';
					if(roundItemIndex !== 0) {
						//If it's not the first round, just pad the indent to match
						prefix = _.pad('', prefix.length);
					}

					return roundStr + prefix + logItem + '\n';
				}, '');
			}, '');
		}

		if(iteration == null) {
			return _.reduce(this.combatText, function(str, val, key) {
				var iterStr = stringifyIteration(val);
				return str + '***ITERATION ' + key + '***\n' + iterStr + '\n\n';
			}, '', this);
		} else {
			return stringifyIteration(this.combatText[iteration]);
		}
	}
}