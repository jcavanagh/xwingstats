export default [{
	id: 'autoblaster_turret',
	name: 'Autoblaster Turret',
	points: 2,
	text: 'Attack: Attack 1 ship (even a ship outside your firing arc). Your [hit] results cannot be cancelled by defense dice. The defender may cancel [crit] results before [hit] results. Attack: 2. Range: 1.',
	attack: 2,
	range: [ 1 ],
	restrictions: {},
	sets: [ 'most-wanted' ]
},{
	id: 'blaster_turret',
	name: 'Blaster Turret',
	points: 4,
	text: 'Attack (Focus): Spend 1 focus token to perform this attack against 1 ship (even a ship outside your firing arc). Attack value: 3. Range: 1-2.',
	attack: 3,
	range: [ 1, 2 ],
	restrictions: {},
	sets: [ 'hwk' ]
},{
	id: 'ion_cannon_turret',
	name: 'Ion Cannon Turret',
	points: 5,
	text: 'Attack: Attack 1 ship (even a ship outside your firing arc). If this attack hits the target ship, the ship suffers 1 damage and receives 1 ion token. Then cancel all dice results. Attack value: 3. Range: 1-2.',
	attack: 3,
	range: [ 1, 2 ],
	restrictions: {},
	sets: [ 'hwk', 'yw' ]
},{
	id: 'twin_laser_turret',
	name: 'Twin Laser Turret',
	points: 6,
	text: 'Attack: Perform this attack twice (even against a ship outside your firing arc). Each time this attack hits, the defender suffers 1 damage. Then cancel all dice results. Attack: 3. Range: 2-3.',
	attack: 3,
	range: [ 2, 3 ],
	restrictions: {},
	sets: [ 'kw' ]
}];