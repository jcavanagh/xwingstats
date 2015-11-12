import meld from 'meld';

export var sensor_jammer = {
	priority: 1,
	fn: function(scope) {
		//NYI
	}
}

export var emperor_palpatine = {
	priority: 99,
	fn: function(scope) {
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

		return meld.around(scope, [ 'getHitOrCritSeries', 'getCritSeries', 'getEvadeSeries'], function(joinpoint) {
			var attacker = joinpoint.target.attacker;
			var defender = joinpoint.target.defender;
			var series = joinpoint.proceed();

			//The Emperor guarantees at least one crit/evade, so the entire distribution shifts right
			if(joinpoint.method === 'getEvadeSeries') {
				if(defender.getUpgrade('emperor_palpatine')) {
					smushRight(series);
				}
			} else {
				if(attacker.getUpgrade('emperor_palpatine')) {
					smushRight(series);
				}
			}

			return series;
		});
	}
}
