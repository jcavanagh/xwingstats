export function percent(val, places) {
	//It could be a compute
	val = _.isFunction(val) ? val() : val;

	return number(val * 100) + '%';
}

export function number(val, places) {
	//It could be a compute
	val = _.isFunction(val) ? val() : val;
	places = places || 3;

	if(val == null) {
		return '';
	}

	//Make it a string
	var strVal = '' + val.toFixed(places);

	//Trim zeroes, and the dot if we trimmed every digit after the decimal
	strVal = _.trimRight(strVal, '0');
	if(_.endsWith(strVal, '.')) {
		strVal = strVal.slice(0, -1);
	}

	return strVal;
}