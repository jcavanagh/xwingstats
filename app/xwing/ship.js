/**
 * Models an X-Wing ship
 *
 * @param {Number}  attack      Number of attack dice
 * @param {Number}  defense     Number of defense dice
 * @param {Number}  hull        Number of hull points
 * @param {Number}  shield      Number of shield points
 * @param {Boolean} focus       Probability that ship has a focus token
 * @param {Boolean} evade       Probability that ship has an evade token
 *
 * @typedef {Object} Ship
 */
export default can.Map.extend({
	define: {
		attack: {
			value: null,
			type: 'number'
		},
		defense: {
			value: null,
			type: 'number'
		},
		hull: {
			value: null,
			type: 'number'
		},
		shield: {
			value: null,
			type: 'number'
		},
		focus: {
			value: false,
			type: 'number'
		},
		evade: {
			value: false,
			type: 'number'
		},
		stress: {
			value: false,
			type: 'number'
		}
	}
});