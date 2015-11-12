import _ from 'lodash';
import should from 'should';

import Pilot from 'app/models/pilot/pilot';
import * as Dice from 'app/models/dice/dice';

//Approximation fudge factor for results
var FUDGE = 0.01;

var basicTests = [{
	attack: 1,
	agility: 0,
	series: [{
		index: 0,
		damage: .5,
		hit: .625,
		crit: .875
	},{
		index: 1,
		damage: .5,
		hit: .375,
		crit: .125
	}]
},{
	attack: 2,
	agility: 0,
	series: [{
		index: 0,
		damage: .25,
		hit: .3906,
		crit: .7656,
	},{
		index: 1,
		damage: .5,
		hit: .4688,
		crit: .2188
	},{
		index: 2,
		damage: .25,
		hit: .1406,
		crit: .0156
	}]
}];

describe('Dice Roller', function() {
	describe('Basic Opposed Rolls', function() {
		_.each(basicTests, function(test) {
			it(test.attack + ' vs ' + test.agility, function() {
				var attacker = new Pilot({ attack: test.attack });
				var defender = new Pilot({ agility: test.agility });
				var series = Dice.combatDamageSeries(attacker, defender);

				series.length.should.equal(test.series.length);

				_.each(series, function(seriesItem, index) {
					var testSeriesItem = _.find(test.series, { index: index });
					_.each([ 'damage', 'hit', 'crit' ], function(resultType) {
						seriesItem[resultType].should.be.approximately(testSeriesItem[resultType], FUDGE);	
					});
				});
			});
		});
	});
});