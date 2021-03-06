import can from 'can';
import csTemplate from './combat_simulator.stache!';

import * as Combat from 'app/models/combat/combat';
import * as Dice from 'app/models/dice/dice';
import Pilot from 'app/models/pilot/pilot';
import Squad from 'app/models/squad/squad';
import * as Stats from 'app/math/stats';
import * as Format from 'app/util/format';

import * as Lifespan from './metrics/lifespan';
import * as DamageOutput from './metrics/damage_output';
import * as DamageInput from './metrics/damage_input';
import * as Accuracy from './metrics/accuracy';
import * as WinPct from './metrics/win_pct';

var metrics = [{
	title: 'Win %',
	key: 'win_pct',
	lib: WinPct
},{
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
				skill: 9,
				attack: 4,
				agility: 3,
				shield: 2,
				hull: 3
			},

			//One of the above Squad objects to add the new Pilot to
			squad: null
		},

		removePilot: function(squad, ship) {
			squad.removePilot(ship);
		}
	},
	helpers: {
		formatPct: function(thing) {
			return Format.percent(thing) || '-';
		},
		formatNum: function(thing) {
			return Format.number(thing, 2) || '-';
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

		addPilot: function() {
			var squad = this.viewModel.modal.attr('squad');
			var ship = new Pilot(this.viewModel.modal.ship);
			squad.addPilot(ship);

			//Clear modal data
			this.viewModel.modal.attr('ship', {
				skill: 9,
				attack: 4,
				agility: 3,
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
		'#shipAddModal input[type=submit] click': 'addPilot',

		//Squad add button handlers
		'.squad1-table input[type=button] click': function() {
			this.viewModel.modal.attr('squad', this.viewModel.squad1);
		},
		'.squad2-table input[type=button] click': function() {
			this.viewModel.modal.attr('squad', this.viewModel.squad2);
		}
	}
});