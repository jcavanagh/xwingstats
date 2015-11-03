import can from 'can';
import uniqueId from 'app/util/unique_id';

/**
 * Models an X-Wing squad
 *
 * @typedef {Object} Squad
 */
export default can.Map.extend({
	define: {
		id: {
			value: uniqueId('squad')
		}
	},

	addPilot: function(pilot) {
		//Add to collection
		this.attr('pilots').push(pilot);

		//Set squad ref on pilot
		pilot.attr('squad', this);
	},

	removePilot: function(pilot) {
		var index = this.attr('pilots').indexOf(pilot);
		this.attr('pilots').splice(index, 1);
	}
});