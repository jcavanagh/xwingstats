export function percent(val, places) {
	//It could be a compute
	val = _.isFunction(val) ? val() : val;
	places = places || 3

	//Make it a string
	var strVal = ''+(val * 100).toFixed(places);

	//Trim zeroes, and the dot if we trimmed every digit after the decimal
	strVal = _.trimRight(strVal, '0');
	if(_.endsWith(strVal, '.')) {
		strVal = strVal.slice(0, -1);
	}

	//Done!
	return strVal + '%';
}