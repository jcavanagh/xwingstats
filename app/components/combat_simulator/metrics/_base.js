import _ from 'lodash';

import * as Stats from 'app/math/stats';

export function getSquadBreakdown(logProp, squad, log) {
	var squadData = log.shipData[squad.id];

	//2D array, one array per ship, array filled with lifespan for each iteration
	var shipData = _.transform(squadData, function(spans, ship) {
		//Get average lifespan for each ship
		spans.push(readLogProperty(logProp, ship, log));
	}, []);

	//Zip by iteration, average each one
	return _.map(_.zip.apply(this, shipData), function(span) {
		return Stats.mean(span);
	});
}

function readLogProperty(logProp, ship, log) {
	return _.transform(ship, function(collection, shipIteration, index) {
		collection.push(shipIteration[logProp] || 0);
	}, []);
}