import _ from 'lodash';

import * as Base from './_base';
import * as Stats from 'app/math/stats';

export function analyze(squad, log) {
	var dmgOut = Base.getSquadBreakdown('damageDealt', squad, log);

	return {
		squadId: squad.id,
		mean: Stats.mean(dmgOut),
		median: Stats.median(dmgOut),
		stdDev: Stats.stdDev(dmgOut),
		variance: Stats.variance(dmgOut)
	};
}