import can from 'can';
import diceRollerTemplate from './dice_roller.stache!';

import Chart from 'app/chart/chart';

import * as Format from 'app/util/format';

import * as Dice from 'app/xwing/dice';
import Ship from 'app/xwing/ship';

export default can.Component.extend({
	tag: 'x-dice-roller',
	template: diceRollerTemplate,
	viewModel: {
		attacker: new Ship(),
		defender: new Ship(),

		//Combat configuration
		config: {
			//Calculate evades instead of hits
			invert: false
		},

		//Chart stuff
		series: [],
		width: 300,
		height: 300
	},
	helpers: {
		atLeast: function(targetHits, series) {
			//If its zero or more, it's obviously 100% - don't bother showing it
			if(targetHits() === 0) { return '-'; }

			//Comes in as ordered pairs, we only care about the second point
			var hitChances = _.map(series(), function(s) { return s[1]; });
			return Format.percent(_.sum(_.takeRight(hitChances, hitChances.length - targetHits())));
		},
		formatPct: function(val) {
			return Format.percent(val);
		}
	},
	events: {
		calculate: function() {
			var series = Dice.combatSeries(this.viewModel.attacker, this.viewModel.defender, this.viewModel.config);
			this.viewModel.attr('series', series);
		}
	}
});