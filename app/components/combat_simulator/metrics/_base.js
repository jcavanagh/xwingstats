import _ from 'lodash';

import * as Stats from 'app/math/stats';

/**
 * Computes a squad metric by averaging a metric for each individual ship
 *
 * @param  {String}    logProp The log property to read the metric from
 * @param  {Squad}     squad   The squad to analyze
 * @param  {CombatLog} log     The combat log from the simulation
 * @return {Array}             Ship-average of metric across all iterations for this squad
 */
export function getSquadBreakdown(logProp, squad, log) {
	var squadData = log.getSquadShipData(squad);

	//2D array, one array per ship, array filled with metric for each iteration
	var shipData = _.transform(squadData, function(spans, ship) {
		//Get metric value for each ship
		spans.push(readShipLogProperty(logProp, ship, log));
	}, []);

	//Zip to iteration, average all
	return _.map(_.zip.apply(this, shipData), function(span) {
		return Stats.mean(span);
	});
}

/**
 * Reads a log property for each iteration for a particular ship
 *
 * @param  {String}    logProp  The log property to read the value from
 * @param  {String}    shipData The set of ship data by iteration
 * @param  {CombatLog} log      The combat log from the simulation
 * @return {Array}              The value of the desired log entry by iteration, or zero if not present
 */
function readShipLogProperty(logProp, shipDataIndex, log) {
	return _.transform(shipDataIndex, function(collection, shipIteration, index) {
		collection.push(shipIteration[logProp] || 0);
	}, []);
}
