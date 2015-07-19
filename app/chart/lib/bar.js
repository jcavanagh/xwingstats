import d3 from 'd3';

export default function(el, options) {
	var series = options.attr('series');
	var margin = options.attr('margin');
	var width = options.attr('width');
	var height = options.attr('height');
	var innerWidth = options.attr('width') - margin.left - margin.right;
	var innerHeight = options.attr('height') - margin.top - margin.bottom;

	//Axis scales
	var xMax = d3.max(series, function(d) {
		return d[0];
	});

	var x = d3.scale.ordinal()
		.rangeRoundBands([0, innerWidth], 0.2);

	var y = d3.scale.linear()
		.range([innerHeight, 0]);

	//Axes
	var xAxis = d3.svg.axis()
		.scale(x)
		.orient("bottom");

	var yAxis = d3.svg.axis()
		.scale(y)
		.orient("left")
		.ticks(10, "%");

	//Actual chart
	var svgEl = d3.select(el.find('svg').get(0));
	svgEl.selectAll("*").remove();

	var svg = svgEl
		.attr('width', width)
		.attr('height', height)
		.attr('class', 'chart')
		.append('g')
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	//Generate data series
	x.domain(_.map(series, function(d) { return d[0]; }));
	y.domain([0, d3.max(series, function(d) { return d[1]; })]);

	svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + innerHeight + ")")
		.call(xAxis);

	svg.append("g")
		.attr("class", "y axis")
		.call(yAxis);

	svg.selectAll(".bar")
		.data(options.attr('series'))
	.enter().append("rect")
		.attr("class", "bar")
		.attr("x", function(d) { return x(d[0]); })
		.attr("width", x.rangeBand())
		.attr("y", function(d) { return y(d[1]); })
		.attr("height", function(d) { return innerHeight - y(d[1]); });
}