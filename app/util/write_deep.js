import _ from 'lodash';

/**
 * Writes a value to an arbitrary key at any depth
 *
 * @param  {Object} obj   The root object to write into.  Props are applied starting here
 * @param  {Object} val   The value to write into the object
 * @param  {Array} props  Properties to create, in order
 */
export function writeDeep(obj, val, props) {
	if(!obj || !props || !props.length) { return; }

	var lastProp = props[props.length - 1];
	var scope = buildHierarchy(obj, props);

	scope[lastProp] = val;
}

/**
 * Adds a value to another at any depth
 *
 * @param  {Object} obj   The root object to write into.  Props are applied starting here
 * @param  {Object} val   The value to add into the object
 * @param  {Array} props  Properties to create, in order
 */
export function addDeep(obj, val, props) {
	if(!obj || !props || !props.length) { return; }

	var lastProp = props[props.length - 1];
	var scope = buildHierarchy(obj, props);

	if(_.has(scope, lastProp)) {
		scope[lastProp] += val;
	} else {
		scope[lastProp] = val;
	}
}

/**
 * Constructs a deep object hierarchy
 * Will overwrite intermediate keys if they are non-objects that already exist
 *
 * @param  {Object}  obj          Object to dive into
 * @param  {Array}   props        Properties to create, in order
 * @param  {Object}  initialValue Initial value to set.  If an object, returns that scope.  Otherwise, returns containing scope.
 * @return {[Object}              Scope at lowest depth
 */
export function buildHierarchy(obj, props, initialValue) {
	return _.reduce(props, function(scope, prop, index) {
		var isLastProp = index === props.length - 1;

		//Create this property if we need to
		if(!isLastProp) {
			if(!_.has(scope, prop)) {
				//Do not create a container for the last property
				scope[prop] = {};
			} else if(!_.isObject(scope[prop])) {
				console.warn('Overwriting non-object property', prop, 'in', scope);
				//If we have a current non-object value, overwrite it
				scope[prop] = {};
			}

			//Dive into the new scope
			return scope[prop];
		} else if(initialValue) {
			//Insert the initial value if we have one
			scope[prop] = initialValue;

			//If our initial value is an object, return that as the new scope
			//Otherwise, return the containing scope
			return _.isObject(scope[prop]) ? scope[prop] : scope;
		} else {
			//Without an initial value, just return the new scope
			return scope;
		}
	}, obj);
}