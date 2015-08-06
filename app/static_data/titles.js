export default [{
	id: 'awing_test',
	name: 'A-Wing Test Pilot',
	points: 0,
	text: 'Your upgrade bar gains 1 [ept] upgrade icon. You cannot equip 2 of the same [ept] upgrade cards. You cannot equip this card if your pilot skill is "1" or lower.',
	restrictions: {
		ship: {
			id: 'awing'
		}
	},
	sets: [ 'rebel-aces' ]
},{
	id: 'andrasta',
	name: 'Andrasta',
	points: 0,
	text: 'Your upgrade bar gains two additional [bomb] upgrade icons.',
	unique: true,
	restrictions: {
		ship: {
			id: 'fs31'
		}
	},
	sets: [ 'most-wanted' ]
},{
	id: 'btl_a4_ywing',
	name: 'BTL-A4 Y-Wing',
	points: 0,
	text: 'You cannot attack ships outside your firing arc. After you perform a primary weapon attack, you may immediately perform an attack with a [turret] secondary weapon.',
	restrictions: {
		ship: {
			id: 'ywing'
		}
	},
	sets: [ 'most-wanted' ]
},{
	id: 'ig2000',
	name: 'IG-2000',
	points: 0,
	text: 'You have the pilot ability of each other friendly ship with the IG-2000 Upgrade card (in addition to your own pilot ability).',
	restrictions: {
		ship: {
			id: 'aggr'
		}
	},
	sets: [ 'ig-2000' ]
},{
	id: 'royal_guard',
	name: 'Royal Guard TIE',
	points: 0,
	text: 'You may equip up to 2 different Modification upgrades (instead of 1). You cannot equip this card if your pilot skill is "4" or lower.',
	restrictions: {
		ship: {
			id: 'tie-i'
		}
	},
	sets: [ 'imp-aces' ]
},{
	id: 'slave1',
	name: 'Slave-1',
	points: 0,
	text: 'Your upgrade bar gains the [torpedo] upgrade icon.',
	unique: true,
	restrictions: {
		ship: {
			id: 'fs31'
		}
	},
	sets: [ 'slave-1' ]
},{
	id: 'tie_x1',
	name: 'TIE/x1',
	points: 0,
	text: 'Your upgrade bar gains the [sys_upgrade] upgrade icon. If you equip a [sys_upgrade] upgrade, its squad point cost is reduced by 4 (to a minimum of 0).',
	restrictions: {
		ship: {
			id: 'tie-a'
		}
	},
	sets: [ 'raider' ]
},{
	id: 'virago',
	name: 'Virago',
	points: 1,
	text: 'Your upgrade bar gains the [sys_upgrade] and [illicit] upgrade icons. You cannot equip this card if your pilot skill is "3" or lower.',
	unique: true,
	restrictions: {
		ship: {
			id: 'starviper'
		}
	},
	sets: [ 'starviper' ]
},{
	id: 'millenium_falcon',
	name: 'Millenium Falcon',
	points: 1,
	text: 'Your action bar gains the [evade] action icon.',
	unique: true,
	restrictions: {
		ship: {
			id: 'falcon'
		}
	},
	sets: [ 'falcon' ]
},{
	id: 'dauntless',
	name: 'Dauntless',
	points: 2,
	text: 'After you execute a maneuver that causes you to overlap another ship, you may perform 1 free action. Then receive 1 stress token.',
	unique: true,
	restrictions: {
		ship: {
			id: 'decimator'
		}
	},
	sets: [ 'decimator' ]
},{
	id: 'dutyfree',
	name: 'Dutyfree',
	points: 2,
	text: 'When performing a jam action, you may choose an enemy ship at range 1-3 (instead of at Range 1-2).',
	unique: true,
	restrictions: {
		ship: {
			id: 'gr75'
		}
	},
	sets: [ 'rebel-trans' ]
},{
	id: 'heavy_scyk',
	name: '"Heavy Scyk" Interceptor',
	points: 2,
	text: 'Your upgrade bar gains the [cannon], [torpedo], or [missile] upgrade icon.',
	restrictions: {
		ship: {
			id: 'm3a'
		}
	},
	sets: [ 'm-3a' ]
},{
	id: 'jainas_light',
	name: 'Jaina\s Light',
	points: 2,
	text: 'When defending, once per attack, if you are dealt a faceup Damage card, you may discard it and draw another faceup Damage card.',
	unique: true,
	restrictions: {
		ship: {
			id: 'cr90_fore'
		}
	},
	sets: [ 'tantive-iv' ]
},{
	id: 'moldy_crow',
	name: 'Moldy Crow',
	points: 3,
	text: 'During the End phase, do not remove unused focus tokens from your ship.',
	unique: true,
	restrictions: {
		ship: {
			id: 'hwk290'
		}
	},
	sets: [ 'hwk' ]
},{
	id: 'st321',
	name: 'ST-321',
	points: 3,
	text: 'When acquiring a target lock, you may lock onto any target in the play area.',
	unique: true,
	restrictions: {
		ship: {
			id: 'bus'
		}
	},
	sets: [ 'lambda' ]
},{
	id: 'dodonnas_pride',
	name: 'Dodonna\s Pride',
	points: 4,
	text: 'When you perform a coordinate action, you may choose 2 friendly ships (instead of 1). Those ships may each perform 1 free action.',
	unique: true,
	restrictions: {
		ship: {
			id: 'cr90_fore'
		}
	},
	sets: [ 'tantive-iv' ]
},{
	id: 'quantum_storm',
	name: 'Quantum Storm',
	points: 4,
	text: 'At the start of the End phase, if you have 1 or fewer energy tokens, gain 1 energy token.',
	unique: true,
	restrictions: {
		ship: {
			id: 'gr75'
		}
	},
	sets: [ 'rebel-trans' ]
},{
	id: 'tantive_iv',
	name: 'Tantive IV',
	points: 4,
	text: 'Your fore section upgrade bar gains 1 additional [crew] and 1 additional [team] upgrade icon.',
	unique: true,
	restrictions: {
		ship: {
			id: 'cr90_fore'
		}
	},
	sets: [ 'tantive-iv' ]
},{
	id: 'bright_hope',
	name: 'Bright Hope',
	points: 5,
	text: 'A reinforce token assigned to your fore section adds 2 [evade] results (instead of 1).',
	unique: true,
	restrictions: {
		ship: {
			id: 'gr75'
		}
	},
	sets: [ 'rebel-trans' ]
},{
	id: 'outrider',
	name: 'Outrider',
	points: 5,
	text: 'When you have a [cannon] Upgrade card equipped, you cannot perform primary weapon attacks and you may perform [cannon] secondary weapon attacks against ships outside your firing arc.',
	unique: true,
	restrictions: {
		ship: {
			id: 'yt2400'
		}
	},
	sets: [ 'yt-2400' ]
},{
	id: 'hounds_tooth',
	name: 'Hound\'s Tooth',
	points: 6,
	text: 'After you are destroyed, before you are removed from the play area, you may deploy the Nashtah Pup Pilot. It cannot attack this round.',
	unique: true,
	restrictions: {
		ship: {
			id: 'yv666'
		}
	},
	sets: [ 'hound' ]
}];