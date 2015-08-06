/**
 * Models an XWing ship state
 *
 * @param {String}  name        Pilot name
 * @param {String}  type        Ship type
 * @param {Number}  attack      Number of attack dice
 * @param {Number}  agility     Number of defense dice
 * @param {Number}  hull        Number of hull points
 * @param {Number}  shield      Number of shield points
 *
 * @param {Boolean} focus       Number of focus tokens
 * @param {Boolean} evade       Number of evade tokens
 *
 * @type {Object}
 */
export default can.Map.extend({
	define: {
		//Pilot name
		name: {
			value: '',
			type: 'string'
		},

		faction: {
			type: 'string'
		},

		//Ship type
		type: {
			value: '',
			type: 'string'
		},

		//Ship features
		maneuvers: {
			type: 'array'
		},

		upgrades: {
			type: 'array'
		},

		//Squad assignment
		squad: {
			type: 'string'
		},

		unique: {
			value: false,
			type: 'boolean'
		},

		//Ship stats
		pilotSkill: {
			type: 'number'
		},
		attack: {
			type: 'number'
		},
		agility: {
			type: 'number'
		},
		hull: {
			type: 'number'
		},
		shield: {
			type: 'number'
		},

		//Tokens and such
		focus: {
			type: 'number'
		},
		evade: {
			type: 'number'
		},
		stress: {
			type: 'number'
		}
	}
});