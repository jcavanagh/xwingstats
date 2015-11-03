import can from 'can';

/**
 * Models an XWing ship state
 *
 * @param {Number}  attack      Number of attack dice
 * @param {Number}  agility     Number of defense dice
 * @param {Number}  hull        Number of hull points
 * @param {Number}  shield      Number of shield points
 * @param {Number}  maneuvers   Maneuvers available to this ship
 *
 * @type {Object}
 * @typedef {Ship}
 */
export default can.Map.extend({
	//Ship object
	//See static ship def for details
	define: {
		attack: {
			type: 'number',
			value: 0
		},
		agility: {
			type: 'number',
			value: 0
		},
		hull: {
			type: 'number',
			value: 0
		},
		shield: {
			type: 'number',
			value: 0
		},
		//2D Maneuver array
		maneuvers: {
			type: 'array',
			value: [[]]
		}
	}
});
