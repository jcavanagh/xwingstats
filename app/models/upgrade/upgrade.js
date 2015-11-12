import _ from 'lodash';

export default can.Map.extend({
	define: {
		id: {
			type: 'string'
		},
		name: {
			type: 'string'
		},
		points: {
			type: 'number'
		},
		text: {
			type: 'text',
			set: function(text) {
				//TODO: Process text, replace with images and other such nonsense
				return text;
			}
		},
		restrictions: {},
		sets: {
			type: 'array'
		},
		weapon: {
			define: {
				//Hook for when this weapon is deployed
				//Available hooks are: 'attack', 'reveal', 'action'
				//TODO: Custom hook points?
				deployHook: {
					type: 'string'
				},
				//Hook for when this weapon is activated
				//Available hooks are: 'deploy', 'attack', 'reveal', 'action'
				activateHook: {
					type: 'string'
				},
				attack: {
					type: 'number'
				},
				range: {
					type: 'array'
				}
			}
		}
	},

	/**
	 * Returns a collection of rules that this upgrade can provide
	 */
	rules: function() {
		console.warn('No rules implemented for upgrade:', this.name);
		return [];
	}

	/**
	 * Determines if this upgrade is valid for a particular pilot
	 *
	 * @return {Boolean} Valid or not
	 */
	validate: function(pilot) {
		//TODO: Process restrictions against pilot
		return true;
	}
});
