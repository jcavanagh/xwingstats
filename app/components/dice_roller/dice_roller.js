import can from 'can';
import define from 'can/map/define/define';
import diceRollerTemplate from './dice_roller.stache!';

import Chart from 'app/chart/chart';

import * as Format from 'app/util/format';

import * as Dice from 'app/models/dice/dice';
import Pilot from 'app/models/pilot/pilot';

export default can.Component.extend({
	tag: 'x-dice-roller',
	template: diceRollerTemplate,
	viewModel: {
		define: {
			series: {
				value: []
			},

			avgSeries: {}
		},

		attacker: new Pilot({
			attack: 1
		}),
		defender: new Pilot({
			agility: 1
		}),

		//Combat configuration
		config: {
			//Calculate evades instead of hits
			invert: false
		},

		//Chart stuff
		width: 300,
		height: 300,

		setUpgrade: function(context, el, ev) {
			var upgradeId = el.data('upgradeId');
			var ship = this.attr(el.data('ship'));

			if(ship.getUpgrade(upgradeId)) {
				ship.removeUpgrade(upgradeId);
			} else {
				ship.addUpgrade(upgradeId);
			}
		},

		setFocus: function(context, el, ev) {
			var ship = this.attr(el.data('ship'));

			if(ship.attr('focus')) {
				ship.attr('focus', 0);
			} else {
				ship.attr('focus', 1);
			}
		},

		setTargetLock: function(context, el, ev) {
			var ship = this.attr(el.data('ship'));
			var target = this.attr(el.data('target'))

			if(ship.getTargetLock(target)) {
				ship.removeTargetLock(target);
			} else {
				ship.addTargetLock(target);
			}
		},

		setEvade: function(context, el, ev) {
			var ship = this.attr(el.data('ship'));

			if(ship.attr('evade')) {
				ship.attr('evade', 0);
			} else {
				ship.attr('evade', 1);
			}
		}
	},
	helpers: {
		atLeast: function(index, key) {
			var series = this.attr('series').attr();
			index = _.isFunction(index) ? index() : index;
			key = _.isFunction(key) ? key() : key;

			//If its zero or more, it's obviously 100% - don't bother showing it
			if(index === 0) { return '-'; }

			//Take a portion of the series up to the specified index
			var keyData = _.pluck(series, key);
			return Format.percent(_.sum(_.takeRight(keyData, keyData.length - index)));
		},
		formatPct: function(val) {
			return Format.percent(val);
		},
		formatNum: function(val) {
			return Format.number(val);
		},
		getDamage: function(index) {
			index = _.isFunction(index) ? index() : index;
			var item = this.attr('series').attr(index);
			return Format.percent((item['hit'] + item['crit']) || 0);
		}
	},
	events: {
		inserted: function() {
			this.calculate();
		},

		calculate: function() {
			var config = this.viewModel.attr('config');
			var series = [];
			var avgSeries = null;

			if(config && config.invert) {
				series = Dice.combatEvadeSeries(this.viewModel.attacker, this.viewModel.defender);
			} else {
				series = Dice.combatDamageSeries(this.viewModel.attacker, this.viewModel.defender);
				avgSeries = Dice.averageCombatDamageSeries(this.viewModel.attacker, this.viewModel.defender);
			}

			this.viewModel.attr('series', series);
			this.viewModel.attr('avgSeries', avgSeries);
		},

		'{viewModel.attacker} change': 'calculate',
		'{viewModel.defender} change': 'calculate',
		'{viewModel.config} change': 'calculate'
	}
});