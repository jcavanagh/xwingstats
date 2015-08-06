export default [{
	id: 'chardaan_refit',
	name: 'Chardaan Refit',
	points: -2,
	text: 'This card has a negative squad point cost.',
	restrictions: {},
	sets: [ 'rebel-aces' ]
},{
	id: 'xx23_tracers',
	name: 'XX-23 S-thread Tracers',
	points: 1,
	text: 'Attack [Focus]: Discard this card to perform this attack. If this attack hits, each friendly ship at Range 1-2 of you may acquire a target lock on the defender. Then cancel all dice results. Attack value 3. Range 1-3.',
	attack: 3,
	range: [ 1, 2, 3 ],
	unreleased: true,
	restrictions: {},
	sets: [ 'inquisitor' ]
},{
	id: 'adv_homing',
	name: 'Advanced Homing Missiles',
	points: 3,
	text: 'Attack [Target lock]: Discard this card to perform this attack. If this attack hits, deal 1 faceup Damage card to the defender. Then cancel all dice results. Attack value 4. Range 2-3.',
	attack: 4,
	range: [ 2, 3 ],
	restrictions: {},
	sets: [ 'kw', 'tie-pu' ]
},{
	id: 'ion_pulse',
	name: 'Ion Pulse Missiles',
	points: 3,
	text: 'Attack [Target Lock]: Discard this card to perform this attack. If the attack hits, the defender suffers 1 damage and receives 2 ion tokens. Then cancel all dice results. Attack: 3. Range 2-3.',
	attack: 3,
	range: [ 2, 3 ],
	restrictions: {},
	sets: [ 'z-95', 'tie-d' ]
},{
	id: 'proton_rockets',
	name: 'Proton Rockets',
	points: 3,
	text: 'Attack [Focus]: Discard this card to perform this attack. You may roll additional attack dice equal to your agility value, to a maximum of 3 additional dice. Attack value: 2. Range: 1.',
	attack: [ 2, 'defense' ],
	range: [ 1 ],
	restrictions: {},
	sets: [ 'rebel-aces', 'yt-2400' ]
},{
	id: 'cluster_missiles',
	name: 'Cluster Missiles',
	points: 4,
	text: 'Attack [Target Lock]: Spend your Target Lock and discard this card to perform this attack twice. Attack value: 3. Range: 1-2.',
	attack: 3,
	range: [ 1, 2 ],
	restrictions: {},
	sets: [ 'tie-a', 'aw' ]
},{
	id: 'conc_missiles',
	name: 'Concussion Missiles',
	points: 4,
	text: 'Attack [Target Lock]: Spend your Target Lock and discard this card to perform this attack. You may change 1 of your blank results to a  result. Attack value: 4. Range: 2-3.',
	attack: 4,
	range: [ 2, 3 ],
	restrictions: {},
	sets: [ 'tie-a', 'aw', 'falcon' ]
},{
	id: 'assault_missiles',
	name: 'Assault Missiles',
	points: 5,
	text: 'Attack [Target Lock]: Spend your target lock and discard this card to perform this attack. If this attack hits, each other ship at range 1 of the defender suffers 1 damage. Attack: 4. Range 2-3.',
	attack: 4,
	range: [ 2, 3 ],
	restrictions: {},
	sets: [ 'slave-1', 'falcon', 'tie-b', 'z-95', 'aw' ]
},{
	id: 'homing_missiles',
	name: 'Homing Missiles',
	points: 5,
	text: 'Attack [Target Lock]: Discard this card to perform this attack. The defender cannot spend evade tokens during this attack. Attack: 4. Range 2-3.',
	attack: 4,
	range: [ 2, 3 ],
	restrictions: {},
	sets: [ 'slave-1', 'aw' ]
}];