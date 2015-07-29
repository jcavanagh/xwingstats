import _ from 'lodash';

import * as Base from './_base';
import * as Stats from 'app/math/stats';

export function analyze(squad, log) {
	var dmgIn = Base.getSquadBreakdown('damageReceived', squad, log);

	return {
		squadId: squad.id,
		mean: Stats.mean(dmgIn),
		median: Stats.median(dmgIn),
		stdDev: Stats.stdDev(dmgIn),
		variance: Stats.variance(dmgIn)
	};
}