export default [{
	id: 'bwing_e2',
	name: 'B-Wing/E2',
	points: 1,
	text: 'Your upgrade bar gains the [crew] icon.',
	restrictions: {
		ship: {
			id: 'bwing'
		}
	},
	sets: [ 'rebel-aces' ]
},{
	id: 'manuevering_fins',
	name: 'Maneuvering Fins',
	points: 1,
	text: 'When you reveal a turn maneuver ([hard left] or [hard right]), you may rotate your dial to the corresponding bank maneuver ([bank left] or [bank right]) of the same speed.',
	restrictions: {
		ship: {
			id: 'yv666'
		}
	},
	sets: [ 'hound' ]
},{
	id: 'munitions_failsafe',
	name: 'Munitions Failsafe',
	points: 1,
	text: 'When attacking with a secondary weapon that instructs you to discard it to perform the attack, do not discard it unless the attack hits.',
	restrictions: {},
	sets: [ 'z-95', 'tie-d' ]
},{
	id: 'tactical_jammer',
	name: 'Tactical Jammer',
	points: 1,
	text: 'Your ship can obstruct enemy attacks.',
	restrictions: {
		ship: {
			size: 'large'
		}
	},
	sets: [ 'decimator' ]
},{
	id: 'tie_mk2',
	name: 'Twin Ion Engine Mk. II',
	points: 1,
	text: 'Your upgrade bar gains the [crew] icon.',
	restrictions: {
		ship: {
			id: 'tie-*'
		}
	},
	sets: [ 'tie-pu' ]
},{
	id: 'adv_slam',
	name: 'Advanced SLAM',
	points: 2,
	text: 'After performing a SLAM action, if you did not overlap an obstacle or another ship, you may perform a free action.',
	restrictions: {},
	sets: [ 'kw' ]
},{
	id: 'anti_pursuit_lasers',
	name: 'Anti-Pursuit Lasers',
	points: 2,
	text: 'After an enemy ship performs a maneuver that causes it to overlap your ship, roll 1 attack die. On a [hit] or [crit] result, the enemy ship suffers 1 damage.',
	restrictions: {
		ship: {
			size: 'large'
		}
	},
	sets: [ 'lambda' ]
},{
	id: 'ion_projector',
	name: 'Ion Projector',
	points: 2,
	text: 'After an enemy ship executes a maneuver that causes it to overlap your ship, roll 1 attack die. On a [hit] or [crit] result, the enemy ship receives 1 ion token.',
	restrictions: {
		ship: {
			size: 'large'
		}
	},
	sets: [ 'hound' ]
},{
	id: 'tgt_computer',
	name: 'Targeting Computer',
	points: 2,
	text: 'Your action bar gains the [targetlock] icon.',
	restrictions: {},
	sets: [ 'imp-aces' ]
},{
	id: 'stygium',
	name: 'Stygium Particle Accelerator',
	points: 2,
	text: 'When you either decloak or perform a cloak action, you may perform a free evade action.',
	restrictions: {},
	sets: [ 'tie-ph' ]
},{
	id: 'countermeasures',
	name: 'Counter-Measures',
	points: 3,
	text: 'At the start of the Combat phase, you may discard this card to increase your agility value by 1 for the rest of the round. Then you may remove 1 enemy target lock token from your ship.',
	restrictions: {
		ship: {
			size: 'large'
		}
	},
	sets: [ 'yt-2400' ]
},{
	id: 'exp_interface',
	name: 'Experimental Interface',
	points: 3,
	text: 'Once per round, after you perform an action, you may perform 1 free action from an equipped Upgrade card with the "Action:" header. Then receive 1 stress token.',
	unique: true,
	restrictions: {},
	sets: [ 'yt-2400' ]
},{
	id: 'hull_upgrade',
	name: 'Hull Upgrade',
	points: 3,
	text: 'Increase your hull value by 1',
	restrictions: {},
	sets: [ 'imp-aces', 'starviper' ]
},{
	id: 'stealth_device',
	name: 'Stealth Device',
	points: 3,
	text: 'Increase your agility value by 1. If you are hit by an attack, discard this card.',
	restrictions: {},
	sets: [ 'slave-1', 'm-3a' ]
},{
	id: 'adv_cloaking',
	name: 'Advanced Cloaking Device',
	points: 4,
	text: 'After you perform an attack, you may perform a free cloak action.',
	restrictions: {
		ship: {
			id: 'tie-ph'
		}
	},
	sets: [ 'tie-ph' ]
},{
	id: 'engine_upgrade',
	name: 'Engine Upgrade',
	points: 4,
	text: 'Your action bar gains the [boost] action icon.',
	restrictions: {},
	sets: [ 'falcon' ]
},{
	id: 'shield_upgrade',
	name: 'Shield Upgrade',
	points: 4,
	text: 'Increase your shield value by 1',
	restrictions: {},
	sets: [ 'falcom', 'imp-aces' ]
},{
	id: 'combat_retrofit',
	name: 'Combat Retrofit',
	points: 10,
	text: 'Increase your hull value by 2 and your shield value by 1.',
	restrictions: {
		ship: {
			id: 'gr75',
			size: 'huge'
		}
	},
	sets: [ 'rebel-trans' ]
}];