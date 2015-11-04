import chartTemplate from './chart_template.stache!';

//Chart types
import bar from './lib/bar';

export default can.Component.extend({
	tag: 'x-chart',
	template: chartTemplate,
	viewModel: {
		series: [],
		type: 'bar',
		colors: {
			damage: 'orange',
			hit: 'yellow',
			crit: 'red',
			evade: 'green'
		},

		width: 500,
		height: 500,

		margin: {
			top: 20,
			left: 40,
			bottom: 40,
			right: 20
		},

		renderer: bar
	},
	events: {
		inserted: function() {
			this.render();
		},

		render: function() {
			this.viewModel.renderer(this.element, this.viewModel);
		},

		'{viewModel} series': function() {
			this.render();
		}
	}
});