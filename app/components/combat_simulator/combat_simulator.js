import can from 'can';
import csTemplate from './combat_simulator.stache!';

import * as Combat from 'app/xwing/combat';
import * as Dice from 'app/xwing/dice';
import * as Format from 'app/util/format';
import Ship from 'app/xwing/ship';
import Squad from 'app/xwing/squad';
import * as Stats from 'app/math/stats';

import * as Lifespan from './metrics/lifespan';
import * as DamageOutput from './metrics/damage_output';
import * as DamageInput from './metrics/damage_input';
import * as Accuracy from './metrics/accuracy';

var metrics = [{
	title: 'Lifespan',
	key: 'lifespan',
	lib: Lifespan
},{
	title: 'Dmg Out',
	key: 'dmg_out',
	lib: DamageOutput
},{
	title: 'Dmg In',
	key: 'dmg_in',
	lib: DamageInput
},{
	title: 'Accuracy',
	key: 'accuracy',
	lib: Accuracy
}];

export default can.Component.extend({
	tag: 'x-combat-simulator',
	template: csTemplate,
	viewModel: {
		//Default configuation
		options: {
			fireMode: 'random',
			iterations: 100
		},

		//Opposing squads
		squad1: new Squad(),
		squad2: new Squad(),

		//Stores data for the ship add modal
		modal: {
			ship: {
				pilotSkill: 9,
				attack: 4,
				defense: 3,
				shield: 2,
				hull: 3
			},

			//One of the above Squad objects to add the new Ship to
			squad: null
		},

		removeShip: function(squad, ship) {
			squad.removeShip(ship);
		}
	},
	helpers: {
		formatNum: function(thing){
			return Format.number(thing, 2);
		},
		stringifyLog: function() {
			return this.attr('combatLog') ? this.attr('combatLog').toString() : 'No log available';
		}
	},
	events: {
		simulate: function() {
			var squads = new can.List([this.viewModel.squad1, this.viewModel.squad2]);
			var log = Combat.simulate(squads, this.viewModel.options);
			var combatData = this.calculateCombatData(squads, log);

			//Set stuff
			this.viewModel.attr('combatLog', log);
			this.viewModel.attr('combatData', combatData);
		},

		addShip: function() {
			var squad = this.viewModel.modal.attr('squad');
			var ship = new Ship(this.viewModel.modal.ship);
			squad.addShip(ship);

			//Clear modal data
			this.viewModel.modal.attr('ship', {
				pilotSkill: 9,
				attack: 4,
				defense: 3,
				shield: 2,
				hull: 3,
				squad: squad
			});
		},

		/**
		 * Calculates combat statistics for all participating squads
		 *
		 * @param  {Array}  squads   Participating squads
		 * @return {Object}          MANY DATAS
		 */
		calculateCombatData: function(squads, log) {
			return _.map(squads, function(squad) {
				return _.reduce(metrics, function(combatData, metric) {
					combatData[metric.key] = {
						title: metric.title,
						data: metric.lib.analyze(squad, log)
					};
					return combatData;
				}, {});
			}, this);
		},

		//Button listeners
		'.combat-options input[type=submit] click': 'simulate',
		'#shipAddModal input[type=submit] click': 'addShip',

		//Squad add button handlers
		'.squad1-table input[type=button] click': function() {
			this.viewModel.modal.attr('squad', this.viewModel.squad1);
		},
		'.squad2-table input[type=button] click': function() {
			this.viewModel.modal.attr('squad', this.viewModel.squad2);
		}
	}
});