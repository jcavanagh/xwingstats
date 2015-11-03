import can from 'can';
import uniqueId from 'app/util/unique_id';

import Ship from 'app/xwing/ship';

/**
 * Applies upgrades and effects to a particular stat
 *
 * @param  {String} stat The stat to apply
 * @return {Number}      The final value of the stat after all effects
 */
function applyEffects(stat) {
	
}

/**
 * Models an XWing pilot state
 *
 * @param {String}  name        Pilot name
 * @param {String}  faction     Pilot faction
 * @param {Ship}    ship        Base ship data
 * @param {Array}   upgrades    Collection of Upgrades
 * @param {String}  squad       Squad ID
 * @param {Boolean} unique      Unique pilot or not
 * @param {Number}  skill       Pilot skill value
 *
 * @param {Boolean} focus       Number of focus tokens
 * @param {Boolean} evade       Number of evade tokens
 * @param {Boolean} stress      Number of stress tokens
 *
 * @type {Object}
 * @typedef {Pilot}
 */
// var PilotStats = can.Map.extend({
// 	init: function(shipStats) {
// 		this.attr('ship', new Ship(shipStats));
// 	},

// 	define: {
// 		//Pilot name
// 		name: {
// 			value: '',
// 			type: 'string'
// 		},

// 		//Faction object
// 		faction: {},

// 		//Ship object
// 		//See static ship def for details
// 		ship: {},

// 		//Collection of upgrade objects
// 		upgrades: {
// 			type: 'array'
// 		},

// 		//Squad assignment
// 		squad: {
// 			type: 'string'
// 		},

// 		//Pilot uniqueness
// 		unique: {
// 			value: false,
// 			type: 'boolean'
// 		},

// 		//Tokens and such
// 		focus: {
// 			type: 'number'
// 		},
// 		evade: {
// 			type: 'number'
// 		},
// 		stress: {
// 			type: 'number'
// 		}
// 	}
// });

/**
 * Models an X-Wing pilot
 *
 * The attributes themselves are the base stats, and they are modified by adding to a collection of effects that is evaluated
 * to get the current value of a particular stat
 *
 * @param {PilotStats} pilotData Data to construct PilotStats
 *
 * @typedef {Object} Pilot
 */
export default can.Map.extend({
	// init: function(pilotData) {
	// 	// this.attr(pilotData);
	// },

	define: {
		id: {
			value: uniqueId('pilot')
		},

		effects: {
			value: []
		},

		upgrades: {
			value: []
		},

		focus: {
			type: 'number'
		},
		evade: {
			type: 'number'
		},
		stress: {
			type: 'number'
		},

		targetLocks: {
			value: []
		},

		squad: {},	//Assigned by Squad when added

		//Stat wrappers to compute values based on current game state
		attack: {
			type: 'number',
			// get: function() {
			// 	//TODO: Effects that modify attack
			// 	return this.statSum('attack');
			// },
			// set: function(newVal) {
			// 	this.attr('base').attr('attack', newVal);
			// }
		},

		agility: {
			type: 'number',
			// get: function() {
			// 	//TODO: Effects that modify agility
			// 	return this.statSum('agility');
			// },
			// set: function(newVal) {
			// 	this.attr('base').attr('agility', newVal);
			// }
		},

		hull: {
			type: 'number',
			// get: function() {
			// 	//TODO: Effects that modify hull
			// 	return this.statSum('hull');
			// },
			// set: function(newVal) {
			// 	this.attr('base').attr('hull', newVal);
			// }
		},

		shield: {
			type: 'number',
			// get: function() {
			// 	//TODO: Effects that modify shield
			// 	return this.statSum('shield');
			// },
			// set: function(newVal) {
			// 	this.attr('base').attr('shield', newVal);
			// }
		},

		//Pilot skill
		//Not purely computed, also has a builtin base value
		skill: {
			type: 'number',
			// get: function() {
			// 	//TODO: Effects that modify skill
			// 	return this.attr('skill');
			// }
		}
	},

	//Upgrade helpers
	addUpgrade: function(upgradeId) {
		//TODO: Find actual upgrade object from static
		this.attr('upgrades').push({
			id: upgradeId
		});
	},

	removeUpgrade: function(upgradeId) {
		//TODO: Find actual upgrade object from static
		var index = _.findIndex(this.attr('upgrades'), { id: upgradeId });

		if(index >= 0) {
			this.attr('upgrades').splice(index, 1);
		}
	},

	getUpgrade: function(upgradeId) {
		return _.find(this.attr('upgrades'), function(upgrade) {
			return upgrade.attr('id') === upgradeId;
		});
	},

	//TL helpers
	addTargetLock: function(pilot) {
		this.attr('targetLocks').push({
			pilot: pilot
		});
	},

	removeTargetLock: function(pilot) {
		var index = _.findIndex(this.attr('targetLocks'), function(tl) {
			return pilot && tl.pilot && tl.pilot.attr('id') === pilot.attr('id');
		});

		if(index >= 0) {
			this.attr('targetLocks').splice(index, 1);
		}
	},

	getTargetLock: function(pilot) {
		return _.find(this.attr('targetLocks'), function(tl) {
			return pilot && tl.pilot && tl.pilot.attr('id') === pilot.attr('id');
		});
	},

	//Combat manipulation
	applyDamage: function(hits) {
		var shield = this.attr('shield');

		//Absorb with shields first
		if(shield >= hits) {
			this.attr('shield', shield - hits);
		} else {
			var hullDamage = hits - shield;
			this.attr('shield', 0);
			this.attr('hull', this.attr('hull') - hullDamage);
		}
	},

	isDestroyed: function() {
		return this.attr('hull') <= 0;
	},

	toString: function() {
		return '[' + this.squad.attr('id') + ']' + this.attr('name') + '-' + this.attr('type') + '(' + this.attr('shield') + ', ' + this.attr('hull') + ')';
	}
});