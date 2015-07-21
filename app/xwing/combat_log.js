import _ from 'lodash';

export default class CombatLog {
	constructor() {
		//Stores a text description of each round
		this.combatLog = {};

		//Total iterations
		this.iterations = 0;
		//Current iteration
		this.iteration = 0;
		//Current round
		this.round = 0;

		/**
		 * Ship data
		 *
		 * shipData: {
		 * 	0: {
		 * 	  "ship_0": {
		 * 	    //All data
		 * 	  }
		 * 	}
		 * }
		 *
		 * @property roundsSurvived
		 * @property attacksMade
		 * @property damageDealt
		 * @property damageReceived
		 */
		this.shipData = {};
	}

	/**
	 * Adds a combat data point to this iteration for the ship
	 * Sums, does not replace
	 *
	 * @param {Ship}   ship  The ship to log data for
	 * @param {String} prop  The property to modify
	 * @param {Number} value The value to add to the property
	 */
	addCombatData(ship, prop, value) {
		var iterationPtr, shipPtr, squadPtr;

		//Build structure if we don't have it
		if(!this.shipData[ship.squad.id]) {
			this.shipData[ship.squad.id] = {};
		}
		squadPtr = this.shipData[ship.squad.id];

		if(!squadPtr[ship.id]) {
			squadPtr[ship.id] = {
				//If we need a ship ref, data processing needs to special case this key
				// _ship: ship
			};
		}
		shipPtr = squadPtr[ship.id];

		if(!shipPtr[this.iteration]) {
			shipPtr[this.iteration] = {};
		}
		iterationPtr = shipPtr[this.iteration];

		if(iterationPtr[prop] == null) {
			iterationPtr[prop] = 0;
		}

		//Save the prop
		iterationPtr[prop] += value;
	}

	/**
	 * Logs a combat round
	 *
	 * @param  {Number} iteration  The current combat iteration
	 * @param  {Number} round      The current combat round within an iteration
	 * @param  {Array}  attackers  Attacking ships
	 * @param  {Array}  defenders  Defending ships
	 */
	log(attacker, defender, hits) {
		var hitStr = (hits === 1) ? 'hit' : 'hits';
		this.write(this.iteration, this.round, attacker.toString(), 'scores', hits, hitStr + ' against', defender.toString());
	}

	/**
	 * Writes a string representation of a round
	 *
	 * @param {Number} iteration The current combat iteration
	 * @param {Number} round     The current combat round within an iteration
	 * @param {String} args      Variable number of strings to concat, space separated
	 */
	write() {
		//Peel off static args
		var args = Array.prototype.slice.call(arguments);
		var iteration = args.shift();
		var round = args.shift();

		if(iteration == null) {
			return;
		}

		//Stringify args, inserting spaces
		var logStr = _.reduce(args, function(str, arg) {
			str += arg + ' ';
			return str;
		}, '');

		if(!this.combatLog[iteration]) {
			this.combatLog[iteration] = [];
		}

		if(!this.combatLog[iteration][round]) {
			this.combatLog[iteration][round] = [];
		}

		this.combatLog[iteration][round].push(logStr);
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
					var prefix = (roundIndex + 1) + ': ';
					if(roundItemIndex !== 0) {
						//If it's not the first round, just pad the indent to match
						prefix = _.pad('', prefix.length);
					}

					return roundStr + prefix + logItem + '\n';
				}, '');
			}, '');
		}

		if(iteration == null) {
			return _.reduce(this.combatLog, function(str, val, key) {
				var iterStr = stringifyIteration(val);
				return str + '***ITERATION ' + key + '***\n' + iterStr + '\n\n';
			}, '', this);
		} else {
			return stringifyIteration(this.combatLog[iteration]);
		}
	}
}