import meld from 'meld';
import { AGILITY } from './faces';

//Series rotater
function smushRight(series) {
	//Zero- or one-length series are not valid
	if(!series || !series.length || series.length == 1) { return ; }

	//Rotate right 1
	series.unshift(series.pop());

	///Combine best and rotated second best
	var last = series.length - 1;
	series[last] = series[0] + series[last];

	//Zero out zero
	series[0] = 0;
}

function smushLeft(series) {
	//Zero- or one-length series are not valid
	if(!series || !series.length || series.length == 1) { return ; }

	//Rotate left 1
	series.push(series.shift());

	///Combine worst and rotated second worst
	var last = series.length - 1;
	series[last] = series[0] + series[last];

	//Zero out last
	series[last] = 0;
}

export var sensor_jammer = {
	priority: 1,
	fn: function(scope) {
		return meld.around(scope, [ 'getHitOrCritSeries', 'getHitSeries'], function(joinpoint) {
			var attacker = joinpoint.target.attacker;
			var defender = joinpoint.target.defender;
			var series = joinpoint.proceed();

			//Sensor jammer effectively removes an attack die if the attacker is not focused
			if(defender.getUpgrade('sensor_jammer') && !attacker.focus) {
				smushLeft(series);
			}

			return series;
		});
	}
}

export var emperor_palpatine = {
	priority: 99,
	fn: function(scope) {
		return meld.around(scope, [ 'getHitOrCritSeries', 'getCritSeries', 'getEvadeSeries'], function(joinpoint) {
			var attacker = joinpoint.target.attacker;
			var defender = joinpoint.target.defender;
			var series = joinpoint.proceed();

			//The Emperor guarantees at least one crit/evade, so the entire distribution shifts
			if(joinpoint.method === 'getEvadeSeries') {
				if(defender.getUpgrade('emperor_palpatine')) {
					smushRight(series);
				}
			} else if(joinpoint.method === 'getCritSeries' || joinpoint.method === 'getHitOrCritSeries') {
				if(attacker.getUpgrade('emperor_palpatine')) {
					smushRight(series);
				}
			}

			return series;
		});
	}
}

export var zuckuss = {
	priority: 99,
	fn: function(scope) {
		return meld.around(scope, [ 'getModifiedEvadeChance' ], function(joinpoint) {
			var attacker = joinpoint.target.attacker;
			var defender = joinpoint.target.defender;
			var series = joinpoint.proceed();

			if(attacker.getUpgrade('zuckuss')) {
				//Force reroll on blanks, or blanks and focus if defender is focused
				if(defender.focus) {
					return Math.pow(AGILITY.EVADE + AGILITY.FOCUS, 2);
				} else {
					return Math.pow(AGILITY.EVADE, 2);
				}
			}
		});
	}
}