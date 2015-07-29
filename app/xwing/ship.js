import can from 'can';
import ShipStats from './ship_stats';

/**
 * Models an X-Wing ship
 *
 * @param {ShipStats} shipData Data to construct ShipStats
 *
 * @typedef {Object} Ship
 */
export default can.Construct.extend({
	//Auto-incrementing ID generator
	currentId: 0,
	getId: function() {
		return 'ship_' + this.currentId++;
	}
},{
	init: function(shipData) {
		this.id = this.constructor.getId();
		this.base = new ShipStats(shipData);
		this.current = new ShipStats(shipData);
		this.squad = null;	//Assigned by Squad when added
	},

	//Combat manipulation
	applyDamage: function(hits) {
		var shield = this.current.attr('shield');

		//Absorb with shields first
		if(shield >= hits) {
			this.current.attr('shield', shield - hits);
		} else {
			var hullDamage = hits - shield;
			this.current.attr('shield', 0);
			this.current.attr('hull', this.current.attr('hull') - hullDamage);
		}
	},

	isDestroyed: function() {
		return this.current.attr('hull') <= 0;
	},

	//Cleanup
	reset: function() {
		this.current = new ShipStats(this.base.attr());
	},

	toString: function() {
		return '[' + this.squad.id + ']' + this.current.name + '-' + this.current.type + '(' + this.current.attr('shield') + ', ' + this.current.attr('hull') + ')';
	}
});