import can from 'can';
import csTemplate from './combat_simulator.stache!';

import * as Combat from 'app/xwing/combat';
import * as Dice from 'app/xwing/dice';
import * as Format from 'app/util/format';
import Ship from 'app/xwing/ship';
import Squad from 'app/xwing/squad';
import * as Stats from 'app/math/stats';

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
				return {
					lifespan: {
						squadId: squad.id,
						mean: this.lifespanMean(squad, log),
						median: this.lifespanMedian(squad, log),
						variance: this.lifespanVariance(squad, log),
						stdDev: this.lifespanStdDev(squad, log)
					}
				};
			}, this);
		},

		getSquadLifespans: function(squad, log) {
			var lifespans = [];
			var squadData = log.shipData[squad.id];

			//2D array, one array per ship, array filled with lifespan for each iteration
			var shipLifespans = _.transform(squadData, function(spans, ship) {
				//Get average lifespan for each ship
				spans.push(this.getShipLifespans(ship, log));
			}, [], this);

			//Zip by iteration, average each one
			return _.map(_.zip.apply(this, shipLifespans), function(span) {
				return Stats.mean(_.compact(span));
			});
		},

		getShipLifespans: function(ship, log) {
			return _.transform(ship, function(spans, shipIteration, index) {
				spans.push(shipIteration.roundsSurvived);
			}, []);
		},

		lifespanMean: function(squad, log) {
			return Stats.mean(this.getSquadLifespans(squad, log));
		},

		lifespanMedian: function(squad, log) {
			return Stats.median(this.getSquadLifespans(squad, log));
		},

		lifespanVariance: function(squad, log) {
			return Stats.variance(this.getSquadLifespans(squad, log));
		},

		lifespanStdDev: function(squad, log) {
			return Stats.stdDev(this.getSquadLifespans(squad, log));
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