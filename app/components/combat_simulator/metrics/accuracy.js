import _ from 'lodash';

import * as Base from './_base';
import * as Stats from 'app/math/stats';

export function analyze(squad, log) {
	var attacksMade = Base.getSquadBreakdown('attacksMade', squad, log);
	var damageDealt = Base.getSquadBreakdown('damageDealt', squad, log);

	var accuracy = _.map(damageDealt, function(damage, index) {
		return damage / attacksMade[index];
	});

	return {
		squadId: squad.id,
		mean: Stats.mean(accuracy),
		median: Stats.median(accuracy),
		stdDev: Stats.stdDev(accuracy),
		variance: Stats.stdDev(accuracy)
	};
}