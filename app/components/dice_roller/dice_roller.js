import can from 'can';
import diceRollerTemplate from './dice_roller.stache!';

import Chart from 'app/chart/chart';

import * as Format from 'app/util/format';

import * as Dice from 'app/xwing/dice';
import Pilot from 'app/xwing/pilot';

export default can.Component.extend({
	tag: 'x-dice-roller',
	template: diceRollerTemplate,
	viewModel: {
		attacker: new Pilot(),
		defender: new Pilot(),

		//Combat configuration
		config: {
			//Calculate evades instead of hits
			invert: false
		},

		//Chart stuff
		series: [],
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
		atLeast: function(targetHits, series) {
			//If its zero or more, it's obviously 100% - don't bother showing it
			if(targetHits() === 0) { return '-'; }

			//Comes in as ordered pairs, we only care about the second point
			var hitChances = _.map(series(), function(s) { return s[1]; });
			return Format.percent(_.sum(_.takeRight(hitChances, hitChances.length - targetHits())));
		},
		formatPct: function(val) {
			return Format.percent(val);
		},
		damagePerRound: function(options) {
			var series = options.context.attr('series');
			var expectedDamage = _.reduce(series, function(accum, item) {
				return accum + (item[0] * item[1]);
			}, 0);

			return Format.number(expectedDamage);
		}
	},
	events: {
		inserted: function() {
			this.calculate();
		},

		calculate: function() {
			var series = Dice.combatSeries(this.viewModel.attacker, this.viewModel.defender, this.viewModel.config);
			this.viewModel.attr('series', series);
		},

		'{viewModel.attacker} change': 'calculate',
		'{viewModel.defender} change': 'calculate',
		'{viewModel.config} change': 'calculate'
	}
});