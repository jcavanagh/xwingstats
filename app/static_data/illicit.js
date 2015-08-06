export default [{
	id: 'inertial',
	name: 'Inertial Dampeners',
	points: 1,
	text: 'When you reveal your maneuver, you may discard this card to instead perform a white [stop] maneuver. Then receive a stress token.',
	restrictions: {},
	sets: [ 'starviper', 'ig-2000' ]
},{
	id: 'cloaking_device',
	name: 'Cloaking Device',
	points: 2,
	unique: true,
	unreleased: true,
	text: 'Action: Perform a free cloak action. At the end of the each round, if you are cloaked, roll 1 attack dice. On a [focus] result, discard this card, then decloak or discard your cloak token.',
	restrictions: {},
	sets: [ 'mist-hunter' ]
},{
	id: 'dead_mans_switch',
	name: 'Dead Man\'s Switch',
	points: 2,
	text: 'When you are destroyed, each ship at Range 1 suffers 1 damage.',
	restrictions: {},
	sets: [ 'ig-2000' ]
},{
	id: 'feedback_array',
	name: 'Feedback Array',
	points: 2,
	text: 'During the Combat phase, instead of performing any attacks, you may receive 1 ion token and suffer 1 damage to choose 1 enemy ship at Range 1. That ship suffers 1 damage.',
	restrictions: {},
	sets: [ 'ig-2000' ]
},{
	id: 'glitterstim',
	name: 'Glitterstim',
	points: 2,
	text: 'At the start of the Combat phase, you may discard this card and receive 1 stress token. If you do, until the end of the round, when attacking or defending, you may change all of your [focus] results to [hit] or [evade] results.',
	restrictions: {},
	sets: [ 'hound' ]
},{
	id: 'hot_shot_blaster',
	name: '"Hot Shot" Blaster',
	points: 3,
	text: 'Attack: Discard this card to attack 1 ship (even a ship outside your firing arc). Attack: 3. Range 1-2.',
	attack: 3,
	range: [ 1, 2 ],
	restrictions: {},
	sets: [ 'most-wanted', 'ig-2000' ]
}];