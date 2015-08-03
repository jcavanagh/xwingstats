import can from 'can';
import uniqueId from 'app/util/unique_id';

/**
 * Models an X-Wing squad
 *
 * @typedef {Object} Squad
 */
export default can.Construct.extend({
	getId: function() {
		return uniqueId('squad');
	}
},{
	init: function() {
		this.id = this.constructor.getId();
		this.ships = new can.List();
	},

	addShip: function(ship) {
		//Add to collection
		this.ships.push(ship);

		//Set squad ref on ship
		ship.squad = this;
	},

	removeShip: function(ship) {
		var index = this.ships.indexOf(ship);
		this.ships.splice(index, 1);
	}
});