import _ from 'lodash';

var idMap = {};

/**
 * Creates and maintains auto-incrementing unique IDs for a particular prefix
 *
 * Not persisted in any way, and only unique per session
 *
 * @param  {String} prefix ID prefix
 * @return {String}        Unique ID in the form prefix_N i.e. kittens_0
 */
export default function uniqueId(prefix) {
	if(_.has(idMap, prefix)) {
		idMap[prefix] += 1;
	} else {
		idMap[prefix] = 0;
	}

	return prefix + '_' + idMap[prefix];
}