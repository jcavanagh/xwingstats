import _ from 'lodash';

import * as Base from './_base';
import * as Stats from 'app/math/stats';

export function analyze(squad, log) {
	var squadData = log.getSquadData(squad);
	var winPct = _.reduce(squadData, function(total, iteration) {
		return total + (iteration['win'] || 0);
	}, 0) / log.iterations;


	return {
		squadId: squad.id,
		value: winPct
	};
}