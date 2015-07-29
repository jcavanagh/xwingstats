import _ from 'lodash';

import * as Base from './_base';
import * as Stats from 'app/math/stats';

export function analyze(squad, log) {
	var lifespans = Base.getSquadBreakdown('roundsSurvived', squad, log);

	return {
		squadId: squad.id,
		mean: Stats.mean(lifespans),
		median: Stats.median(lifespans),
		stdDev: Stats.stdDev(lifespans),
		variance: Stats.variance(lifespans)
	};
}