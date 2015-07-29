import can from 'can';
import lodash from 'lodash';

import template from './ship_form.stache!';

export default can.Component.extend({
	tag: 'x-ship-form',
	template: template,

	viewModel: {
		ship: null
	},

	helpers: {
		//None
	},

	events: {
		inserted: function (argument) {
			//Nothing to do
		}
	}
});