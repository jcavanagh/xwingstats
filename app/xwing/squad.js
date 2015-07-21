import can from 'can';

/**
 * Models an X-Wing squad
 *
 * @typedef {Object} Squad
 */
export default can.Construct.extend({
	//Auto-incrementing ID generator
	currentId: 0,
	getId: function() {
		return 'squad_' + this.currentId++;
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