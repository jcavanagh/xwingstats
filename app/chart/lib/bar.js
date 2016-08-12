import d3 from 'd3';
import _ from 'lodash';

export default function(el, options) {
	var series = options.attr('series').attr();
	var margin = options.attr('margin');
	var width = options.attr('width');
	var height = options.attr('height');
	var colors = options.attr('colors');
	var innerWidth = options.attr('width') - margin.left - margin.right;
	var innerHeight = options.attr('height') - margin.top - margin.bottom;

	//Axis for headers
	var x0 = d3.scale.ordinal()
		.domain(_.range(series.length))
		.rangeRoundBands([0, innerWidth], 0.2);

	//Axis for bars
	var x1 = d3.scale.ordinal();

	var y = d3.scale.linear()
		.range([innerHeight, 0]);

	//Generate data series keys
	var seriesKeys = _.filter(_.keys(series[0]), function(val) { return val !== 'index'; });

	//Transform the dice series into named items, and store on series as a sub-series
	_.each(series, function(item) {
		item.transformed = _.map(seriesKeys, function(key) {
			return {
				key: key,
				val: item[key]
			}
		});
	});

	var seriesMax = d3.max(series, function(d) {
		return d3.max(d.transformed, function(dd) {
			return dd.val;
		});
	});
	//Round up to next multiple of 10-percent
	seriesMax = Math.ceil(seriesMax * 10) / 10;

	x1.domain(seriesKeys).rangeRoundBands([0, x0.rangeBand()]);
	y.domain([0, seriesMax]);

	//Axes
	var xAxis = d3.svg.axis()
		.scale(x0)
		.orient("bottom");

	var yAxis = d3.svg.axis()
		.scale(y)
		.orient("left")
		.tickFormat(d3.format("p"));

	//Actual chart
	var svgEl = d3.select(el.find('svg').get(0));
	svgEl.selectAll("*").remove();

	var svg = svgEl
		.attr('width', width)
		.attr('height', height)
		.attr('class', 'chart')
		.append('g')
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	//Axes
	svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + innerHeight + ")")
		.call(xAxis);

	svg.append("g")
		.attr("class", "y axis")
		.call(yAxis);

	var index = svg.selectAll(".index")
		.data(series)
	.enter().append("g")
		.attr("class", "g")
		.attr("transform", function(d) { return "translate(" + x0(d.index) + ",0)"; });

	index.selectAll(".bar")
		.data(function(d) { return d.transformed; })
	.enter().append("rect")
		.attr("class", "bar")
		.attr("x", function(d) {
			return x1(d.key);
		})
		.attr("width", x1.rangeBand())
		.attr("y", function(d) {
			return y(d.val);
		})
		.attr("height", function(d) {
			return innerHeight - y(d.val);
		})
		.attr("fill", function(d) {
			return colors[d.key];
		});

	var legend = svg.selectAll(".legend")
		.data(seriesKeys.slice().reverse())
	.enter().append("g")
		.attr("class", "legend")
		.attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

	legend.append("rect")
		.attr("x", innerWidth - 18)
		.attr("width", 18)
		.attr("height", 18)
		.style("fill",  function(d) {
			return colors[d];
		});

	legend.append("text")
		.attr("x", innerWidth - 24)
		.attr("y", 9)
		.attr("dy", ".35em")
		.style("text-anchor", "end")
		.text(function(d) { return d; });

}
