import _ from 'lodash';

import Series from './series';
import * as Upgrades from './upgrades';

//Expose a facade to Series, with upgrade modifications as necessary
export function singleCombat(attacker, defender) {
	return executeWrapped('singleCombat', attacker, defender);
}

export function averageCombatDamageSeries(attacker, defender) {
	return executeWrapped('averageCombatDamageSeries', attacker, defender);
}

export function combatDamageSeries(attacker, defender) {
	return executeWrapped('combatDamageSeries', attacker, defender);
}

export function combatEvadeSeries(attacker, defender) {
	return executeWrapped('combatEvadeSeries', attacker, defender);
}

//Wrapper helpers
function executeWrapped(fn, attacker, defender) {
	var series = new Series(attacker, defender);
	var removers = [];
	var upgrades = attacker.attr('upgrades').concat(defender.attr('upgrades')).attr();

	//Sort upgrades by priority
	var upgradeIds = _.sortBy(
		_.filter(_.pluck(upgrades, 'id'), function(id) {
			return Upgrades[id];
		}),
		function(id) {
			return Upgrades[id].priority;
		}
	);

	_.each(upgradeIds, function(id) {
		//Wrap and store remover
		removers.push(Upgrades[id].fn(series));
	});

	var fnResult = series[fn].call(series, attacker, defender);

	_.each(removers, function(remover) {
		remover && remover.remove && remover.remove()
	});

	return fnResult;
}
