export default [{
	id: 'bomb_loadout',
	name: 'Bomb Loadout',
	points: 0,
	text: 'Your upgrade bar gains the  icon. Limited.',
	limited: true,
	restrictions: {
		ship: {
			id: 'ywing'
		}
	},
	sets: [ 'most-wanted' ]
},{
	id: 'extra_munitions',
	name: 'Extra Munitions',
	points: 2,
	text: 'When you equip this card, place 1 ordnance token on each equipped [torpedo], [missile], and [bomb] Upgrade card. When you are instructed to discard an Upgrade card, you may discard 1 ordnance token on that card instead. Limited.',
	limited: true,
	restrictions: {},
	sets: [ 'kw', 'tie-pu' ]
},{
	id: 'flechette_torpedoes',
	name: 'Flechette Torpedoes',
	points: 2,
	text: 'Attack [Target Lock]: Spend you target lock an discard this card to perform this attack. After you perform this attack, the defender receives 1 stress token if its hull value is "4" or less. Attack value: 3. Range: 2-3.',
	attack: 3,
	range: [ 2, 3 ],
	restrictions: {},
	sets: [ 'ew', 'rebel-trans', 'tie-pu' ]
},{
	id: 'plasma_torpedoes',
	name: 'Plasma Torpedoes',
	points: 3,
	text: 'Attack [Target Lock]: Spend your target lock and discard this card to perform this attack. If this attack hits, after dealing damage, remove 1 shield token from the defender.  Attack value: 4. Range: 2-3.',
	attack: 4,
	range: [ 2, 3 ],
	restrictions: {},
	sets: [ 'kw', 'tie-pu' ]
},{
	id: 'proton_torpedoes',
	name: 'Proton Torpedoes',
	points: 4,
	text: 'Attack [Target Lock]: Spend your target lock and discard this card to perform this attack. You may change one of your [focus] results to a [crit] result. Attack value: 4. Range: 2-3.',
	attack: 4,
	range: [ 2, 3 ],
	restrictions: {},
	sets: [ 'core', 'xw', 'yw', 'bw' ]
},{
	id: 'ion_torpedoes',
	name: 'Ion Torpedoes',
	points: 5,
	text: 'Attack [Target Lock]: Spend your target lock and discard this card to perform this attack. If the attack hits, the defender and each ship at Range 1 of it receives 1 ion token. Attack value: 4. Range: 2-3.',
	attack: 4,
	range: [ 2, 3 ],
	restrictions: {},
	sets: [ 'decimator', 'starviper' ]
},{
	id: 'adv_proton_torpedoes',
	name: 'Advanced Proton Torpedoes',
	points: 6,
	text: 'Attack [Target Lock]: Spend your target lock and discard this card to attack. You may change up to 3 of your blank results to [focus] results. Attack value: 5. Range: 1.',
	attack: 5,
	range: [ 1 ],
	restrictions: {},
	sets: [ 'tie-b', 'bw' ]
}];