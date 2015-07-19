import can from 'can';
import diceRollerTemplate from './dice_roller.stache!';

import chart from 'app/chart/chart';

import * as dice from 'app/xwing/dice';

export default can.Component.extend({
	tag: 'x-dice-roller',
	template: diceRollerTemplate,
	viewModel: {
		define: {
			//Form stuff, normally strings, coerce to number
			attack: {
				value: null,
				type: 'number'
			},
			defense: {
				value: null,
				type: 'number'
			},
			atkFocus: {
				value: false,
				type: 'boolean'
			},
			defFocus: {
				value: false,
				type: 'boolean'
			},
			defEvade: {
				value: false,
				type: 'boolean'
			}
		},

		//Chart stuff
		series: [],
		width: 300,
		height: 300
	},
	events: {
		calculate: function() {
			if(this.viewModel.attack != null && this.viewModel.defense != null) {
				var series = dice.getCombatSeries(
					this.viewModel.attack,
					this.viewModel.defense,
					this.viewModel.atkFocus,
					this.viewModel.defFocus,
					this.viewModel.defEvade
				);
				this.viewModel.attr('series', series);
			}
		},

		'{viewModel} attack': 'calculate',
		'{viewModel} defense': 'calculate',
		'{viewModel} atkFocus': 'calculate',
		'{viewModel} defFocus': 'calculate',
		'{viewModel} defEvade': 'calculate'
	}
});