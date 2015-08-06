export default [{
	id: 'tractor_beam',
	name: 'Tractor Beam',
	points: 1,
	range: [ 1, 2, 3 ],
	attack: 3,
	text: 'Attack: Attack 1 ship. If this attack hits, the defender receives 1 tractor beam token. Then cancel all dice results. Range 1-3. Attack value: 3.',
	unreleased: true,
	restrictions: {},
	sets: [ 'mist-hunter' ]
},{
	id: 'flechette',
	name: 'Flechette Cannon',
	points: 2,
	range: [ 1, 2, 3 ],
	attack: 3,
	text: 'Attack: Attack 1 ship. If this attack hits, the defender suffers 1 damage and, if the defender is not stressed, it also receives 1 stress token. Then cancel all dice results. Range: 1-3. Attack value: 3.',
	restrictions: {},
	sets: [ 'm-3a' ]
},{
	id: 'ion_cannon',
	name: 'Ion Cannon',
	points: 3,
	range: [ 1, 2, 3 ],
	attack: 3,
	text: 'Attack: Attack 1 ship. If this attack hits the target ship, the ship suffers 1 damage and receives 1 ion token. Then cancel all dice results. Attack value: 3. Range: 1-3.',
	restrictions: {},
	sets: [ 'slave-1', 'bw', 'tie-d', 'm-3a' ]
},{
	id: 'mangler',
	name: '"Mangler" Cannon',
	points: 4,
	range: [ 1, 2, 3 ],
	attack: 3,
	text: 'Attack: Attack 1 ship. When attacking, you may change 1 of your [hit] results to a [crit] result. Range: 1-3. Attack value: 3.',
	restrictions: {},
	sets: [ 'm-3a', 'ig-2000' ]
},{
	id: 'autoblaster',
	name: 'Autoblaster',
	points: 5,
	range: [ 1 ],
	attack: 3,
	text: 'Attack: Attack 1 ship. Your [hit] results cannot be cancelled by defense dice. The defender may cancel [crit] results before [hit] results. Attack value: 3. Range 1.',
	restrictions: {},
	sets: [ 'bw', 'ig-2000' ]
},{
	id: 'hlc',
	name: 'Heavy Laser Cannon',
	points: 7,
	range: [ 2, 3 ],
	attack: 4,
	text: 'Attack: Attack 1 ship. Immediately after rolling your attack dice, you must change all your [crit] results to [hit] results. Attack value: 4. Range: 2-3.',
	restrictions: {},
	sets: [ 'bw', 'ig-2000' ]
}];