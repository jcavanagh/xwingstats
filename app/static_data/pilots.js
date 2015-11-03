export default [{
	name: 'Prototype Pilot',
	shipId: 'awing',
	factionId: 'rebel',
	skill: 1,
	points: 17,
	upgrades: [ 'missile', 'mod' ]
},{
	name: 'Green Squadron Pilot',
	shipId: 'awing',
	factionId: 'rebel',
	skill: 3,
	points: 19,
	upgrades: [ 'missile', 'mod', 'title', 'ept' ]
},{
	name: 'Gemmer Sojan',
	shipId: 'awing',
	factionId: 'rebel',
	skill: 5,
	points: 22,
	unique: true,
	upgrades: [ 'missile', 'mod', 'title' ],
	ability: {
		id: 'gemmer_sojan',
		text: 'While you are at Range 1 of at least 1 enemy ship, increase your agility value by 1.'
	}
},{
	name: 'Arvel Crynyd',
	shipId: 'awing',
	factionId: 'rebel',
	skill: 6,
	points: 23,
	unique: true,
	upgrades: [ 'missile', 'mod', 'title' ],
	ability: {
		id: 'arvel_crynyd',
		text: 'You may declare an enemy ship inside your firing arc that you are touching as the target of your attack.'
	}
},{
	name: 'Jake Farrell',
	shipId: 'awing',
	factionId: 'rebel',
	skill: 7,
	points: 24,
	unique: true,
	upgrades: [ 'missile', 'mod', 'title', 'ept' ],
	ability: {
		id: 'jake_farrell',
		text: 'After you perform focus action or are assigned a focus token, you may perform a free boost or barrel roll action.'
	}
},{
	name: 'Tycho Celchu',
	shipId: 'awing',
	factionId: 'rebel',
	skill: 8,
	points: 26,
	unique: true,
	upgrades: [ 'missile', 'mod', 'title', 'ept' ],
	ability: {
		id: 'tycho_celchu',
		text: 'You may perform actions even while you have a stress token.'
	}
},{
	name: 'Blue Squadron Pilot',
	shipId: 'bwing',
	factionId: 'rebel',
	skill: 2,
	points: 22,
	upgrades: [ 'torpedo', 'torpedo', 'mod', 'system', 'cannon' ]
},{
	name: 'Dagger Squadron Pilot',
	shipId: 'bwing',
	factionId: 'rebel',
	skill: 4,
	points: 24,
	upgrades: [ 'torpedo', 'torpedo', 'mod', 'system', 'cannon' ]
},{
	name: 'Nera Dantels',
	shipId: 'bwing',
	factionId: 'rebel',
	skill: 5,
	points: 26,
	unique: true,
	upgrades: [ 'torpedo', 'torpedo', 'mod', 'system', 'cannon', 'ept' ],
	ability: {
		id: 'nera_dantels',
		text: 'You can perform torpedo secondary weapon attacks at ships outside your firing arc.'
	}
},{
	name: 'Ibtisam',
	shipId: 'bwing',
	factionId: 'rebel',
	skill: 6,
	points: 22,
	unique: true,
	upgrades: [ 'torpedo', 'torpedo', 'mod', 'system', 'cannon', 'ept' ],
	ability: {
		id: 'ibtisam',
		text: 'When attacking or defending, if you have at least one stress token, you may reroll 1 of your dice.'
	}
},{
	name: 'Keyan Farlander',
	shipId: 'bwing',
	factionId: 'rebel',
	skill: 7,
	points: 29,
	unique: true,
	upgrades: [ 'torpedo', 'torpedo', 'mod', 'system', 'cannon', 'ept' ],
	ability: {
		id: 'keyan_farlander',
		text: 'When attacking, you may remove 1 stress token to change all of your [focus] results to [hit] results.'
	}
},{
	name: 'Ten Numb',
	shipId: 'bwing',
	factionId: 'rebel',
	skill: 8,
	points: 31,
	unique: true,
	upgrades: [ 'torpedo', 'torpedo', 'mod', 'system', 'cannon' ],
	ability: {
		id: 'ten_numb',
		text: 'When attacking, 1 of your [crit] results cannot be cancelled by defense dice.'
	}
},{
	name: 'Knave Squadron Pilot',
	shipId: 'ewing',
	factionId: 'rebel',
	skill: 1,
	points: 27,
	upgrades: [ 'astromech', 'torpedo', 'mod', 'system' ]
},{
	name: 'Blackmoon Squadron Pilot',
	shipId: 'ewing',
	factionId: 'rebel',
	skill: 3,
	points: 29,
	upgrades: [ 'astromech', 'torpedo', 'mod', 'system' ]
},{
	name: 'Etahn A\'baht',
	shipId: 'ewing',
	factionId: 'rebel',
	skill: 5,
	points: 32,
	unique: true,
	upgrades: [ 'astromech', 'torpedo', 'mod', 'system', 'ept' ],
	ability: {
		id: 'etahn_abaht',
		text: 'When an enemy ship inside your firing arc at Range 1-3 is defending, the attacker may change 1 of its [hit] results to a [crit] result.'
	}
},{
	name: 'Corran Horn',
	shipId: 'ewing',
	factionId: 'rebel',
	skill: 8,
	points: 35,
	unique: true,
	upgrades: [ 'astromech', 'torpedo', 'mod', 'system' ],
	ability: {
		id: 'corran_horn',
		text: 'At the start of the End phase, you may perform 1 attack. You may not attack next round.'
	}
},{
	name: 'Rookie Pilot',
	shipId: 'xwing',
	factionId: 'rebel',
	skill: 2,
	points: 21,
	upgrades: [ 'astromech', 'torpedo', 'mod' ]
},{
	name: 'Red Squadron Pilot',
	shipId: 'xwing',
	factionId: 'rebel',
	skill: 4,
	points: 23,
	upgrades: [ 'astromech', 'torpedo', 'mod' ]
},{
	name: 'Tarn Mison',
	shipId: 'xwing',
	factionId: 'rebel',
	skill: 3,
	points: 23,
	unique: true,
	upgrades: [ 'astromech', 'torpedo', 'mod' ],
	ability: {
		id: 'tarn_mison',
		text: 'When an enemy ship declares you as the target of an attack, you may acquire a target lock on that ship.'
	}
},{
	name: '"Hobbie" Klivian',
	shipId: 'xwing',
	factionId: 'rebel',
	skill: 5,
	points: 25,
	unique: true,
	upgrades: [ 'astromech', 'torpedo', 'mod' ],
	ability: {
		id: 'hobbie_klivian',
		text: 'When you acquire or spend a target lock, you may remove 1 stress token from your ship.'
	}
},{
	name: 'Biggs Darklighter',
	shipId: 'xwing',
	factionId: 'rebel',
	skill: 5,
	points: 25,
	unique: true,
	upgrades: [ 'astromech', 'torpedo', 'mod' ],
	ability: {
		id: 'biggs_darklighter',
		text: 'Other friendly ships at Range 1 cannot be targeted by attacks if the attacker could target you instead.'
	}
},{
	name: 'Garvin Dreis',
	shipId: 'xwing',
	factionId: 'rebel',
	skill: 6,
	points: 26,
	unique: true,
	upgrades: [ 'astromech', 'torpedo', 'mod' ],
	ability: {
		id: 'garvin_dreis',
		text: 'After spending a focus token, you may place that token on any other friendly ship at Range 1-2 (instead of discarding it).'
	}
},{
	name: 'Jek Porkins',
	shipId: 'xwing',
	factionId: 'rebel',
	skill: 7,
	points: 26,
	unique: true,
	upgrades: [ 'astromech', 'torpedo', 'mod', 'ept' ],
	ability: {
		id: 'jek_porkins',
		text: 'When you receive a stress token, you may remove it and roll 1 attack die. On a [hit] result, deal 1 facedown damage card to this ship.'
	}
},{
	name: 'Luke Skywalker',
	shipId: 'xwing',
	factionId: 'rebel',
	skill: 8,
	points: 28,
	unique: true,
	upgrades: [ 'astromech', 'torpedo', 'mod', 'ept' ],
	ability: {
		id: 'luke_skywalker',
		text: 'When defending, you may change 1 of your [focus] results to an [evade] result.'
	}
},{
	name: 'Wedge Antilles',
	shipId: 'xwing',
	factionId: 'rebel',
	skill: 9,
	points: 29,
	unique: true,
	upgrades: [ 'astromech', 'torpedo', 'mod', 'ept' ],
	ability: {
		id: 'wedge_antilles',
		text: 'When attacking, reduce the defender\'s agility value by 1 (to a minimum of 0)'
	}
},{
	name: 'Wes Janson',
	shipId: 'xwing',
	factionId: 'rebel',
	skill: 9,
	points: 29,
	unique: true,
	upgrades: [ 'astromech', 'torpedo', 'mod', 'ept' ],
	ability: {
		id: 'wes_janson',
		text: 'After you perform an attack, you may remove 1 focus, evade or blue target lock token from the defender.'
	}
},{
	name: 'Gold Squadron Pilot',
	shipId: 'ywing',
	factionId: 'rebel',
	skill: 2,
	points: 18,
	upgrades: [ 'astromech', 'torpedo', 'torpedo', 'mod', 'turret', 'title' ]
},{
	name: 'Gray Squadron Pilot',
	shipId: 'ywing',
	factionId: 'rebel',
	skill: 4,
	points: 20,
	upgrades: [ 'astromech', 'torpedo', 'torpedo', 'mod', 'turret', 'title' ]
},{
	name: '"Dutch" Vander',
	shipId: 'ywing',
	factionId: 'rebel',
	skill: 6,
	points: 24,
	unique: true,
	upgrades: [ 'astromech', 'torpedo', 'torpedo', 'mod', 'turret', 'title' ],
	ability: {
		id: 'dutch_vander',
		text: 'After acquiring a target lock, choose another friendly ship at Range 1-2. The ship may immediately acquire a target lock.'
	}
},{
	name: 'Horton Salm',
	shipId: 'ywing',
	factionId: 'rebel',
	skill: 8,
	points: 25,
	unique: true,
	upgrades: [ 'astromech', 'torpedo', 'torpedo', 'mod', 'turret', 'title' ],
	ability: {
		id: 'horton_salm',
		text: 'When attacking at Range 2-3, you may reroll any of your blank results.'
	}
},{
	name: 'Bandit Squadron Pilot',
	shipId: 'z95',
	factionId: 'rebel',
	skill: 2,
	points: 12,
	upgrades: [ 'missile', 'mod' ]
},{
	name: 'Tala Squadron Pilot',
	shipId: 'z95',
	factionId: 'rebel',
	skill: 4,
	points: 13,
	upgrades: [ 'missile', 'mod' ]
},{
	name: 'Lieutenant Blount',
	shipId: 'z95',
	factionId: 'rebel',
	skill: 6,
	points: 17,
	unique: true,
	upgrades: [ 'missile', 'mod', 'ept' ],
	ability: {
		id: 'lt_blount',
		text: 'When attacking, the defender is hit by your attack, even if he does not suffer any damage.'
	}
},{
	name: 'Airen Cracken',
	shipId: 'z95',
	factionId: 'rebel',
	skill: 8,
	points: 19,
	unique: true,
	upgrades: [ 'missile', 'mod', 'ept' ],
	ability: {
		id: 'airen_cracken',
		text: 'After you perform an attack, you may choose another friendly ship at Range 1. That ship may perform 1 free action.'
	}
},{
	name: 'Rebel Operative',
	shipId: 'hwk290',
	factionId: 'rebel',
	skill: 2,
	points: 16,
	upgrades: [ 'turret', 'mod', 'title', 'crew' ]
},{
	name: 'Roark Garnet',
	shipId: 'hwk290',
	factionId: 'rebel',
	skill: 4,
	points: 19,
	unique: true,
	upgrades: [ 'turret', 'mod', 'title', 'crew' ],
	ability: {
		id: 'roark_garnet',
		text: 'At the start of the combat phase choose 1 other friendly ship at Range 1-3. Until the end of the phase, treat that pilot\'s pilot skill value as 12.'
	}
},{
	name: 'Kyle Katarn',
	shipId: 'hwk290',
	factionId: 'rebel',
	skill: 6,
	points: 21,
	unique: true,
	upgrades: [ 'turret', 'mod', 'title', 'crew', 'ept' ],
	ability: {
		id: 'kyle_katarn',
		text: 'At the start of the Combat Phase, you may assign 1 of your focus tokens to another friendly ship at Range 1-3.'
	}
},{
	name: 'Jan Ors',
	shipId: 'hwk290',
	factionId: 'rebel',
	skill: 8,
	points: 25,
	unique: true,
	upgrades: [ 'turret', 'mod', 'title', 'crew', 'ept' ],
	ability: {
		id: 'jan_ors',
		text: 'When another friendly ship at Range 1-3 is attacking, if you have no stress tokens, you may receive 1 stress token to allow that ship to roll 1 additional attack die.'
	}
},{
	name: 'Warden Squadron Pilot',
	shipId: 'kwing',
	factionId: 'rebel',
	skill: 2,
	points: 23,
	upgrades: [ 'turret', 'torpedo', 'torpedo', 'missile', 'crew', 'mod', 'bomb', 'bomb' ]
},{
	name: 'Guardian Squadron Pilot',
	shipId: 'kwing',
	factionId: 'rebel',
	skill: 4,
	points: 25,
	upgrades: [ 'turret', 'torpedo', 'torpedo', 'missile', 'crew', 'mod', 'bomb', 'bomb' ]
},{
	name: 'Esege Tuketu',
	shipId: 'kwing',
	factionId: 'rebel',
	skill: 6,
	points: 28,
	unique: true,
	upgrades: [ 'turret', 'torpedo', 'torpedo', 'missile', 'crew', 'mod', 'bomb', 'bomb' ],
	ability: {
		id: 'esege_tuketu',
		text: 'When another friendly ship at Range 1-2 is attacking, it may treat your focus tokens as its own.'
	}
},{
	name: 'Miranda Doni',
	shipId: 'kwing',
	factionId: 'rebel',
	skill: 8,
	points: 29,
	upgrades: [ 'turret', 'torpedo', 'torpedo', 'missile', 'crew', 'mod', 'bomb', 'bomb', 'ept' ],
	ability: {
		id: 'miranda_doni',
		text: 'Once per round when attacking, you may either spend 1 shield to roll 1 additional attack die or roll 1 fewer attack die to recover 1 shield.'
	}
},{
	name: 'Outer Rim Smuggler',
	shipId: 'yt1300',
	factionId: 'rebel',
	skill: 1,
	points: 27,
	upgrades: [ 'crew', 'crew', 'title', 'mod' ],
	overrides: {
		//All the other YT-1300s are 3 attack
		ship: {
			attack: 2
		}
	}
},{
	name: 'Chewbacca',
	shipId: 'yt1300',
	factionId: 'rebel',
	skill: 5,
	points: 42,
	unique: true,
	upgrades: [ 'crew', 'crew', 'title', 'mod', 'ept' ],
	ability: {
		id: 'chewbacca',
		text: 'When you are dealt a faceup damage card, immediately flip it facedown (without resolving its ability).'
	}
},{
	name: 'Lando Calrissian',
	shipId: 'yt1300',
	factionId: 'rebel',
	skill: 7,
	points: 44,
	unique: true,
	upgrades: [ 'crew', 'crew', 'title', 'mod', 'ept' ],
	ability: {
		id: 'lando_calrissian',
		text: 'After you execute a green maneuver, choose one other friendly ship at Range 1. That ship may perform 1 free action on its action bar.'
	}
},{
	name: 'Han Solo',
	shipId: 'yt1300',
	factionId: 'rebel',
	skill: 9,
	points: 46,
	unique: true,
	upgrades: [ 'crew', 'crew', 'title', 'mod', 'ept' ],
	ability: {
		id: 'han_solo',
		text: 'When attacking, you may reroll all of your dice. If you choose to do so, you must reroll as many of your dice as possible.'
	}
},{
	name: 'Wild Space Fringer',
	shipId: 'yt2400',
	factionId: 'rebel',
	skill: 2,
	points: 30,
	upgrades: [ 'cannon', 'crew', 'title', 'mod', 'missile' ]
},{
	name: 'Eaden Vrill',
	shipId: 'yt2400',
	factionId: 'rebel',
	skill: 3,
	points: 32,
	unique: true,
	upgrades: [ 'cannon', 'crew', 'title', 'mod', 'missile' ],
	ability: {
		id: 'eaden_vrill',
		text: 'When performing a primary weapon attack against a stressed ship, roll 1 additional attack dice.'
	}
},{
	name: '"Leebo"',
	shipId: 'yt2400',
	factionId: 'rebel',
	skill: 5,
	points: 34,
	unique: true,
	upgrades: [ 'cannon', 'crew', 'title', 'mod', 'missile', 'ept' ],
	ability: {
		id: 'leebo',
		text: 'When performing a primary weapon attack against a stressed ship, roll 1 additional attack dice.'
	}
},{
	name: 'Dash Rendar',
	shipId: 'yt2400',
	factionId: 'rebel',
	skill: 7,
	points: 36,
	unique: true,
	upgrades: [ 'cannon', 'crew', 'title', 'mod', 'missile', 'ept' ],
	ability: {
		id: 'dash_rendar',
		text: 'You may ignore obstacles during the Activation phase and when performing actions.'
	}
},{
	name: 'Academy Pilot',
	shipId: 'tief',
	factionId: 'imperial',
	skill: 1,
	points: 12,
	upgrades: [ 'mod' ]
},{
	name: 'Obsidian Squadron Pilot',
	shipId: 'tief',
	factionId: 'imperial',
	skill: 3,
	points: 13,
	upgrades: [ 'mod' ]
},{
	name: 'Black Squadron Pilot',
	shipId: 'tief',
	factionId: 'imperial',
	skill: 4,
	points: 14,
	upgrades: [ 'mod', 'ept' ]
},{
	name: 'Night Beast',
	shipId: 'tief',
	factionId: 'imperial',
	skill: 5,
	points: 15,
	unique: true,
	upgrades: [ 'mod' ],
	ability: {
		id: 'night_beast',
		text: 'After executing a green maneuver, you may perform a free focus action.'
	}
},{
	name: 'Winged Gundark',
	shipId: 'tief',
	factionId: 'imperial',
	skill: 5,
	points: 15,
	unique: true,
	upgrades: [ 'mod' ],
	ability: {
		id: 'winged_gundark',
		text: 'When attacking at Range 1, you may change 1 of your [hit] results to a [crit] result.'
	}
},{
	name: 'Backstabber',
	shipId: 'tief',
	factionId: 'imperial',
	skill: 6,
	points: 16,
	unique: true,
	upgrades: [ 'mod' ],
	ability: {
		id: 'backstabber',
		text: 'When attacking from outside the defender\'s firing arc, roll 1 additional attack die.'
	}
},{
	name: 'Dark Curse',
	shipId: 'tief',
	factionId: 'imperial',
	skill: 6,
	points: 16,
	unique: true,
	upgrades: [ 'mod' ],
	ability: {
		id: 'dark_curse',
		text: 'When defending, ships attacking you cannot spend focus tokens or reroll attack dice.'
	}
},{
	name: '"Scourge"',
	shipId: 'tief',
	factionId: 'imperial',
	skill: 7,
	points: 17,
	unique: true,
	upgrades: [ 'mod', 'ept' ],
	ability: {
		id: 'scourge',
		text: 'When attacking a defender that has 1 or more Damage cards, roll 1 additional attack die.'
	}
},{
	name: 'Mauler Mithel',
	shipId: 'tief',
	factionId: 'imperial',
	skill: 7,
	points: 17,
	unique: true,
	upgrades: [ 'mod', 'ept' ],
	ability: {
		id: 'mauler_mithel',
		text: 'When attacking at Range 1, roll 1 additional attack die.'
	}
},{
	name: 'Howlrunner',
	shipId: 'tief',
	factionId: 'imperial',
	skill: 8,
	points: 18,
	unique: true,
	upgrades: [ 'mod', 'ept' ],
	ability: {
		id: 'howlrunner',
		text: 'When another friendly ship at Range 1 is attacking with its primary weapon, it may reroll 1 attack die.'
	}
},{
	name: 'Tempest Squadron Pilot',
	shipId: 'tiea',
	factionId: 'imperial',
	skill: 2,
	points: 21,
	upgrades: [ 'mod', 'title', 'missile' ]
},{
	name: 'Storm Squadron Pilot',
	shipId: 'tiea',
	factionId: 'imperial',
	skill: 4,
	points: 23,
	upgrades: [ 'mod', 'title', 'missile' ]
},{
	name: 'Lieutenant Colzet',
	shipId: 'tiea',
	factionId: 'imperial',
	skill: 3,
	points: 23,
	unique: true,
	unreleased: true,
	upgrades: [ 'mod', 'title', 'missile' ],
	ability: {
		id: 'lt_colzet',
		text: 'At the start of the End phase, you may spend a target lock you have on an enemy ship to flip 1 random facedown Damage card assigned to it faceup.'
	}
},{
	name: 'Commander Alozen',
	shipId: 'tiea',
	factionId: 'imperial',
	skill: 5,
	points: 25,
	unique: true,
	unreleased: true,
	upgrades: [ 'mod', 'title', 'missile', 'ept' ],
	ability: {
		id: 'cmdr_alozen',
		text: 'At the start of the Combat phase, you may acquire a target lock on an enemy ship at Range 1.'
	}
},{
	name: 'Zertik Strom',
	shipId: 'tiea',
	factionId: 'imperial',
	skill: 6,
	points: 26,
	unique: true,
	unreleased: true,
	upgrades: [ 'mod', 'title', 'missile', 'ept' ],
	ability: {
		id: 'zertik_strom',
		text: 'Enemy ships at Range 1 cannot add their range combat bonus when attacking.'
	}
},{
	name: 'Maarek Stele',
	shipId: 'tiea',
	factionId: 'imperial',
	skill: 7,
	points: 27,
	unique: true,
	upgrades: [ 'mod', 'title', 'missile', 'ept' ],
	ability: {
		id: 'maarek_stele',
		text: 'When your attack deals a faceup Damage card to the defender, instead draw 3 Damage cards, choose 1 to deal, and discard the others.'
	}
},{
	name: 'Juno Eclipse',
	shipId: 'tiea',
	factionId: 'imperial',
	skill: 8,
	points: 28,
	unique: true,
	unreleased: true,
	upgrades: [ 'mod', 'title', 'missile', 'ept' ],
	ability: {
		id: 'juno_eclipse',
		text: 'When you reveal your maneuver, you may increase or decrease its speed by 1 (to a minimum of 1).'
	}
},{
	name: 'Darth Vader',
	shipId: 'tiea',
	factionId: 'imperial',
	skill: 9,
	points: 29,
	unique: true,
	upgrades: [ 'mod', 'title', 'missile', 'ept' ],
	ability: {
		id: 'darth_vader',
		text: 'During your "Perform Action" step, you may perform 2 actions.'
	}
},{
	name: 'Scimitar Squadron Pilot',
	shipId: 'tieb',
	factionId: 'imperial',
	skill: 2,
	points: 16,
	upgrades: [ 'torpedo', 'torpedo', 'missile', 'missile', 'bomb', 'mod' ]
},{
	name: 'Gamma Squadron Pilot',
	shipId: 'tieb',
	factionId: 'imperial',
	skill: 4,
	points: 18,
	upgrades: [ 'torpedo', 'torpedo', 'missile', 'missile', 'bomb', 'mod' ]
},{
	name: 'Captain Jonus',
	shipId: 'tieb',
	factionId: 'imperial',
	skill: 6,
	points: 22,
	unique: true,
	upgrades: [ 'torpedo', 'torpedo', 'missile', 'missile', 'bomb', 'mod', 'ept' ],
	ability: {
		id: 'cpt_jonus',
		text: 'When another friendly ship at Range 1 attacks with a secondary weapon, it may reroll up to 2 attack dice.'
	}
},{
	name: 'Major Rhymer',
	shipId: 'tieb',
	factionId: 'imperial',
	skill: 7,
	points: 26,
	upgrades: [ 'torpedo', 'torpedo', 'missile', 'missile', 'bomb', 'mod', 'ept' ],
	ability: {
		id: 'maj_rhymer',
		text: 'When another friendly ship at Range 1 attacks with a secondary weapon, it may reroll up to 2 attack dice.'
	}
},{
	name: 'Delta Squadron Pilot',
	shipId: 'tied',
	factionId: 'imperial',
	skill: 1,
	points: 30,
	upgrades: [ 'missile', 'cannon', 'mod' ]
},{
	name: 'Onyx Squadron Pilot',
	shipId: 'tied',
	factionId: 'imperial',
	skill: 3,
	points: 32,
	upgrades: [ 'missile', 'cannon', 'mod' ]
},{
	name: 'Colonel Vessery',
	shipId: 'tied',
	factionId: 'imperial',
	skill: 6,
	points: 35,
	unique: true,
	upgrades: [ 'missile', 'cannon', 'mod', 'ept' ],
	ability: {
		id: 'col_vessery',
		text: 'When attacking, immediately after you roll attack dice, you may acquire a target lock on the defender if it already has a red target lock token.'
	}
},{
	name: 'Rexler Brath',
	shipId: 'tied',
	factionId: 'imperial',
	skill: 8,
	points: 37,
	unique: true,
	upgrades: [ 'missile', 'cannon', 'mod', 'ept' ],
	ability: {
		id: 'col_vessery',
		text: 'After you perform an attack that deals at least 1 Damage card to the defender, you may spend a focus token to flip those cards faceup.'
	}
},{
	name: 'Alpha Squadron Pilot',
	shipId: 'tiei',
	factionId: 'imperial',
	skill: 1,
	points: 18,
	upgrades: [ 'mod' ]
},{
	name: 'Avenger Squadron Pilot',
	shipId: 'tiei',
	factionId: 'imperial',
	skill: 3,
	points: 20,
	upgrades: [ 'mod' ]
},{
	name: 'saber Squadron Pilot',
	shipId: 'tiei',
	factionId: 'imperial',
	skill: 4,
	points: 21,
	upgrades: [ 'mod', 'ept' ]
},{
	name: 'Royal Guard Pilot',
	shipId: 'tiei',
	factionId: 'imperial',
	skill: 6,
	points: 22,
	upgrades: [ 'mod', 'title', 'ept' ]
},{
	name: '"Fel\'s Wrath"',
	shipId: 'tiei',
	factionId: 'imperial',
	skill: 5,
	points: 23,
	unique: true,
	upgrades: [ 'mod', 'title' ],
	ability: {
		id: 'fels_wrath',
		text: 'When the number of damage cards assigned to you equals or exceeds your hull value, you are not destroyed unti the end of the round.'
	}
},{
	name: 'Lieutenant Lorrir',
	shipId: 'tiei',
	factionId: 'imperial',
	skill: 5,
	points: 23,
	unique: true,
	upgrades: [ 'mod', 'title' ],
	ability: {
		id: 'lt_lorrir',
		text: 'When performing a barrel roll action, you may receive 1 stress token to use the [1 bank left] or [1 bank right] template instead of the [1 straight] template.'
	}
},{
	name: 'Kir Kanos',
	shipId: 'tiei',
	factionId: 'imperial',
	skill: 6,
	points: 24,
	unique: true,
	upgrades: [ 'mod', 'title' ],
	ability: {
		id: 'kir_kanos',
		text: 'When attacking at Range 2-3, you may spend 1 evade token to add one [hit] result to you roll.'
	}
},{
	name: 'Tetran Cowall',
	shipId: 'tiei',
	factionId: 'imperial',
	skill: 7,
	points: 24,
	unique: true,
	upgrades: [ 'mod', 'title', 'ept' ],
	ability: {
		id: 'tetran_cowall',
		text: 'When you reveal a [k-turn] maneuver, you may treat the speed of that meaneuver as "1", "3" or "5".'
	}
},{
	name: 'Turr Phennir',
	shipId: 'tiei',
	factionId: 'imperial',
	skill: 7,
	points: 25,
	unique: true,
	upgrades: [ 'mod', 'title', 'ept' ],
	ability: {
		id: 'turr_phennir',
		text: 'After you perform an attack, you may perform a free boost or barrel roll action.'
	}
},{
	name: 'Carnor Jax',
	shipId: 'tiei',
	factionId: 'imperial',
	skill: 8,
	points: 26,
	unique: true,
	upgrades: [ 'mod', 'title', 'ept' ],
	ability: {
		id: 'carnor_jax',
		text: 'Enemy ships at Range 1 cannot perform focus or evade actions and cannot spend focus or evade tokens.'
	}
},{
	name: 'Soontir Fel',
	shipId: 'tiei',
	factionId: 'imperial',
	skill: 9,
	points: 27,
	unique: true,
	upgrades: [ 'mod', 'title', 'ept' ],
	ability: {
		id: 'soontir_fel',
		text: 'When you receive a stress token, you may assign 1 focus token to your ship.'
	}
},{
	name: 'Sigma Squadron Pilot',
	shipId: 'tieph',
	factionId: 'imperial',
	skill: 3,
	points: 25,
	upgrades: [ 'system', 'mod', 'crew' ]
},{
	name: 'Shadow Squadron Pilot',
	shipId: 'tieph',
	factionId: 'imperial',
	skill: 5,
	points: 27,
	upgrades: [ 'system', 'mod', 'crew' ]
},{
	name: '"Echo"',
	shipId: 'tieph',
	factionId: 'imperial',
	skill: 6,
	points: 30,
	unique: true,
	upgrades: [ 'system', 'mod', 'crew', 'ept' ],
	ability: {
		id: 'echo',
		text: 'When you decloak, you must use the [2 bank left] or [2 bank right] template instead of the [2 straight] template.'
	}
},{
	name: '"Whisper"',
	shipId: 'tieph',
	factionId: 'imperial',
	skill: 7,
	points: 32,
	unique: true,
	upgrades: [ 'system', 'mod', 'crew', 'ept' ],
	ability: {
		id: 'whisper',
		text: 'After you perform an attack that hits, you may assign 1 focus token to your ship.'
	}
},{
	name: 'Cutlass Squadron Pilot',
	shipId: 'tiepu',
	factionId: 'imperial',
	skill: 6,
	points: 21,
	unreleased: true,
	upgrades: [ 'system', 'torpedo', 'torpedo', 'missile', 'missile', 'bomb', 'bomb', 'title', 'mod' ]
},{
	name: '"Deathrain"',
	shipId: 'tiepu',
	factionId: 'imperial',
	skill: 6,
	points: 26,
	unique: true,
	unreleased: true,
	upgrades: [ 'system', 'torpedo', 'torpedo', 'missile', 'missile', 'bomb', 'bomb', 'title', 'mod' ],
	ability: {
		id: 'deathrain',
		text: 'When dropping a bomb, you may use the front guides of your ship. After dropping a bomb you may perform a free barrel roll action.'
	}
},{
	name: '"Redline"',
	shipId: 'tiepu',
	factionId: 'imperial',
	skill: 6,
	points: 27,
	unique: true,
	unreleased: true,
	upgrades: [ 'system', 'torpedo', 'torpedo', 'missile', 'missile', 'bomb', 'bomb', 'title', 'mod' ],
	ability: {
		id: 'redline',
		text: 'You may maintain 2 target locks on the same ship. When you acquire a target lock, you may acquire a second lock on that ship.'
	}
},{
	name: 'The Inquisitor',
	shipId: 'tieap',
	factionId: 'imperial',
	skill: 8,
	points: 25,
	unique: true,
	unreleased: true,
	upgrades: [ 'ept', 'missile', 'title', 'mod' ],
	ability: {
		id: 'inquisitor',
		text: 'When attacking with your primary weapon at Range 2-3, treat the range of the attack as Range 1.'
	}
},{
	name: 'Bounty Hunter',
	shipId: 'fs31',
	factionId: 'imperial',
	skill: 3,
	points: 33,
	upgrades: [ 'cannon', 'missile', 'title', 'mod', 'bomb', 'crew' ]
},{
	name: 'Krassis Trellix',
	shipId: 'fs31',
	factionId: 'imperial',
	skill: 5,
	points: 36,
	unique: true,
	upgrades: [ 'cannon', 'missile', 'title', 'mod', 'bomb', 'crew' ],
	ability: {
		id: 'krassis_trellix',
		text: 'When attacking with a secondary weapon, you may reroll 1 attack die.'
	}
},{
	name: 'Kath Scarlet',
	shipId: 'fs31',
	factionId: 'imperial',
	skill: 7,
	points: 38,
	unique: true,
	upgrades: [ 'cannon', 'missile', 'title', 'mod', 'bomb', 'crew', 'ept' ],
	ability: {
		id: 'kath_scarlet',
		text: 'When attacking, the defender receives 1 stress token if he cancels at least 1 [crit] result.'
	}
},{
	name: 'Boba Fett',
	shipId: 'fs31',
	factionId: 'imperial',
	skill: 8,
	points: 38,
	unique: true,
	upgrades: [ 'cannon', 'missile', 'title', 'mod', 'bomb', 'crew', 'ept' ],
	ability: {
		id: 'fetts_vette',
		text: 'When you reveal a bank maneuver ([bank left] or [bank right]), you may rotate your dial to the other bank maneuver of the same speed.'
	}
},{
	name: 'Omicron Group Pilot',
	shipId: 'bus',
	factionId: 'imperial',
	skill: 2,
	points: 21,
	upgrades: [ 'system', 'cannon', 'crew', 'crew', 'title', 'mod' ]
},{
	name: 'Captain Yorr',
	shipId: 'bus',
	factionId: 'imperial',
	skill: 4,
	points: 24,
	unique: true,
	upgrades: [ 'system', 'cannon', 'crew', 'crew', 'title', 'mod' ],
	ability: {
		id: 'cpt_yorr',
		text: 'When another friendly ship at Range 1-2 would receive a stress token, if you have 2 or fewer stress tokens, you may receive that token instead.'
	}
},{
	name: 'Colonel Jendon',
	shipId: 'bus',
	factionId: 'imperial',
	skill: 6,
	points: 26,
	unique: true,
	upgrades: [ 'system', 'cannon', 'crew', 'crew', 'title', 'mod' ],
	ability: {
		id: 'col_jendon',
		text: 'At the start of the Combat Phase, you may assign 1 of your blue target lock tokens to a friendly ship at Range 1 if it does not have a blue target lock token.'
	}
},{
	name: 'Captain Kagi',
	shipId: 'bus',
	factionId: 'imperial',
	skill: 8,
	points: 27,
	unique: true,
	upgrades: [ 'system', 'cannon', 'crew', 'crew', 'title', 'mod' ],
	ability: {
		id: 'cpt_kagi',
		text: 'When an enemy ship acquires a target lock, it must lock onto your ship if able.'
	}
},{
	name: 'Patrol Leader',
	shipId: 'vt49',
	factionId: 'imperial',
	skill: 3,
	points: 40,
	upgrades: [ 'bomb', 'crew', 'crew', 'crew', 'crew', 'torpedo', 'title', 'mod' ]
},{
	name: 'Captain Oicunn',
	shipId: 'vt49',
	factionId: 'imperial',
	skill: 4,
	points: 42,
	unique: true,
	upgrades: [ 'bomb', 'crew', 'crew', 'crew', 'crew', 'torpedo', 'title', 'mod', 'ept' ],
	ability: {
		id: 'cpt_oicunn',
		text: 'After executing a maneuver, each enemy ship you are touching suffers 1 Damage.'
	}
},{
	name: 'Commander Kenkirk',
	shipId: 'vt49',
	factionId: 'imperial',
	skill: 6,
	points: 44,
	unique: true,
	upgrades: [ 'bomb', 'crew', 'crew', 'crew', 'crew', 'torpedo', 'title', 'mod', 'ept' ],
	ability: {
		id: 'cmdr_kenkirk',
		text: 'If you have no shields and at least 1 Damage card assigned to you, increase your agility value by 1.'
	}
},{
	name: 'Rear Admiral Chiraneau',
	shipId: 'vt49',
	factionId: 'imperial',
	skill: 8,
	points: 46,
	unique: true,
	upgrades: [ 'bomb', 'crew', 'crew', 'crew', 'crew', 'torpedo', 'title', 'mod', 'ept' ],
	ability: {
		id: 'chiraneau',
		text: 'When attacking at Range 1-2, you may change 1 of your [focus] results to a [crit] result.'
	}
},{
	name: 'Cartel Spacer',
	shipId: 'm3a',
	factionId: 'scum',
	skill: 2,
	points: 14,
	upgrades: [ 'title', 'mod' ]
},{
	name: 'Tansarii Point Veteran',
	shipId: 'm3a',
	factionId: 'scum',
	skill: 5,
	points: 17,
	upgrades: [ 'title', 'mod', 'ept' ]
},{
	name: 'Laetin A\'shera',
	shipId: 'm3a',
	factionId: 'scum',
	skill: 6,
	points: 18,
	unique: true,
	upgrades: [ 'title', 'mod', 'ept' ],
	ability: {
		id: 'laetin_ashera',
		text: 'After you defend against an attack, if the attack did not hit, you may assign 1 evade token to your ship.'
	}
},{
	name: 'Serissu',
	shipId: 'm3a',
	factionId: 'scum',
	skill: 8,
	points: 20,
	unique: true,
	upgrades: [ 'title', 'mod', 'ept' ],
	ability: {
		id: 'serissu',
		text: 'When another friendly ship at Range 1 is defending, he may reroll 1 defense dice.'
	}
},{
	name: 'Cartel Marauder',
	shipId: 'kihraxz',
	factionId: 'scum',
	skill: 2,
	points: 20,
	upgrades: [ 'missile', 'illicit', 'mod' ]
},{
	name: 'Black Sun Ace',
	shipId: 'kihraxz',
	factionId: 'scum',
	skill: 5,
	points: 23,
	upgrades: [ 'missile', 'illicit', 'mod', 'ept' ]
},{
	name: 'Graz the Hunter',
	shipId: 'kihraxz',
	factionId: 'scum',
	skill: 6,
	points: 25,
	unique: true,
	upgrades: [ 'missile', 'illicit', 'mod' ],
	ability: {
		id: 'graz_the_hunter',
		text: 'When defending, if the attacker is inside your firing arc, roll 1 additional defense die.'
	}
},{
	name: 'Talonbane Cobra',
	shipId: 'kihraxz',
	factionId: 'scum',
	skill: 9,
	points: 28,
	unique: true,
	upgrades: [ 'missile', 'illicit', 'mod', 'ept' ],
	ability: {
		id: 'talonbane_cobra',
		text: 'When attacking or defending, double the effect of your range combat bonuses.'
	}
},{
	name: 'Syndicate Thug',
	shipId: 'ywing',
	factionId: 'scum',
	skill: 2,
	points: 18,
	upgrades: [ 'torpedo', 'torpedo', 'mod', 'turret', 'salvaged_astromech', 'title' ]
},{
	name: 'Hired Gun',
	shipId: 'ywing',
	factionId: 'scum',
	skill: 4,
	points: 20,
	upgrades: [ 'torpedo', 'torpedo', 'mod', 'turret', 'salvaged_astromech', 'title' ]
},{
	name: 'Drea Renthal',
	shipId: 'ywing',
	factionId: 'scum',
	skill: 5,
	points: 22,
	unique: true,
	upgrades: [ 'torpedo', 'torpedo', 'mod', 'turret', 'salvaged_astromech', 'title' ],
	ability: {
		id: 'drea_renthal',
		text: 'After you spend a target lock, you may receive 1 stress token to acquire a target lock.'
	}
},{
	name: 'Kavil',
	shipId: 'ywing',
	factionId: 'scum',
	skill: 7,
	points: 24,
	unique: true,
	upgrades: [ 'torpedo', 'torpedo', 'mod', 'turret', 'salvaged_astromech', 'title', 'ept' ],
	ability: {
		id: 'kavil',
		text: 'When attacking a ship outside your firing arc, roll 1 additional attack die.'
	}
},{
	name: 'Binarye Pirate',
	shipId: 'z95',
	factionId: 'scum',
	skill: 1,
	points: 12,
	upgrades: [ 'missile', 'illicit', 'mod' ]
},{
	name: 'Black Sun Soldier',
	shipId: 'z95',
	factionId: 'scum',
	skill: 3,
	points: 13,
	upgrades: [ 'missile', 'illicit', 'mod' ]
},{
	name: 'Kaa\'to Leeachos',
	shipId: 'z95',
	factionId: 'scum',
	skill: 5,
	points: 15,
	unique: true,
	upgrades: [ 'missile', 'illicit', 'mod', 'ept' ],
	ability: {
		id: 'kaato_leeachos',
		text: 'At the start of the Combat phase, you may remove 1 focus or evade token from another friendly ship at Range 1-2 and assign it to yourself.'
	}
},{
	name: 'N\'Dru Suhlak',
	shipId: 'z95',
	factionId: 'scum',
	skill: 7,
	points: 17,
	unique: true,
	upgrades: [ 'missile', 'illicit', 'mod', 'ept' ],
	ability: {
		id: 'ndru_suhlak',
		text: 'When attacking, if there are no other friendly ships at Range 1-2, roll 1 additional attack die.'
	}
},{
	name: 'Spice Runner',
	shipId: 'hwk290',
	factionId: 'scum',
	skill: 1,
	points: 16,
	upgrades: [ 'turret', 'crew', 'mod', 'illicit', 'title' ]
},{
	name: 'Torkhil Mux',
	shipId: 'hwk290',
	factionId: 'scum',
	skill: 3,
	points: 19,
	unique: true,
	upgrades: [ 'turret', 'crew', 'mod', 'illicit', 'title' ],
	ability: {
		id: 'torkhil_mux',
		text: 'At the end of the Activation phase, choose 1 enemy ship at Range 1-2. Until the end of the Combat phase, treat that ship\'s pilot skill value as "0".'
	}
},{
	name: 'Palob Godalhi',
	shipId: 'hwk290',
	factionId: 'scum',
	skill: 5,
	points: 20,
	unique: true,
	upgrades: [ 'turret', 'crew', 'mod', 'illicit', 'title', 'ept' ],
	ability: {
		id: 'palob_godalhi',
		text: 'At the start of the Combat phase, you may remove 1 focus or evade token from an enemy ship at Range 1-2 and assign it to yourself.'
	}
},{
	name: 'Dace Bonearm',
	shipId: 'hwk290',
	factionId: 'scum',
	skill: 7,
	points: 23,
	unique: true,
	upgrades: [ 'turret', 'crew', 'mod', 'illicit', 'title', 'ept' ],
	ability: {
		id: 'dace_bonearm',
		text: 'When an enemy ship at Range 1-3 receives at least 1 ion token, if you are not stressed, you may receive 1 stress token to cause that ship to suffer 1 damage.'
	}
},{
	name: 'Black Sun Enforcer',
	shipId: 'viper',
	factionId: 'scum',
	skill: 1,
	points: 25,
	upgrades: [ 'torpedo', 'mod', 'title' ]
},{
	name: 'Black Sun Vigo',
	shipId: 'viper',
	factionId: 'scum',
	skill: 3,
	points: 27,
	upgrades: [ 'torpedo', 'mod', 'title' ]
},{
	name: 'Guri',
	shipId: 'viper',
	factionId: 'scum',
	skill: 5,
	points: 30,
	unique: true,
	upgrades: [ 'torpedo', 'mod', 'title', 'ept' ],
	ability: {
		id: 'guri',
		text: 'At the start of the Combat phase, if you are at Range 1 of an enemy ship, you may assign 1 focus token to your ship'
	}
},{
	name: 'Prince Xisor',
	shipId: 'viper',
	factionId: 'scum',
	skill: 7,
	points: 31,
	unique: true,
	upgrades: [ 'torpedo', 'mod', 'title', 'ept' ],
	ability: {
		id: 'prince_xizor',
		text: 'When defending, a friendly ship at Range 1 may suffer 1 uncancelled [hit] or [crit] result instead of you.'
	}
},{
	name: 'Mandalorian Mercenary',
	shipId: 'fs31',
	factionId: 'scum',
	skill: 5,
	points: 35,
	upgrades: [ 'cannon', 'bomb', 'crew', 'missile', 'illicit', 'title', 'ept', 'mod' ]
},{
	name: 'Emon Azzameen',
	shipId: 'fs31',
	factionId: 'scum',
	skill: 6,
	points: 36,
	unique: true,
	upgrades: [ 'cannon', 'bomb', 'crew', 'missile', 'illicit', 'title', 'mod' ],
	ability: {
		id: 'emon_azzameen',
		text: 'When dropping a bomb, you may use the [3 hard left], [3 straight] or [3 hard right] template instead of the [1 straight] template.'
	}
},{
	name: 'Kath Scarlet',
	shipId: 'fs31',
	factionId: 'scum',
	skill: 7,
	points: 38,
	unique: true,
	upgrades: [ 'cannon', 'bomb', 'crew', 'missile', 'illicit', 'title', 'mod', 'ept' ],
	ability: {
		id: 'kath_scarlet_scum',
		text: 'When attacking a ship inside your auxiliary firing arc, roll 1 additional die.'
	}
},{
	name: 'Boba Fett',
	shipId: 'fs31',
	factionId: 'scum',
	skill: 8,
	points: 39,
	unique: true,
	upgrades: [ 'cannon', 'bomb', 'crew', 'missile', 'illicit', 'title', 'mod', 'ept' ],
	ability: {
		id: 'fetts_vette_scum',
		text: 'When attacking or defending, you may reroll 1 of your dice for each enemy at Range 1.'
	}
},{
	name: 'IG88-A',
	shipId: 'aggr',
	factionId: 'scum',
	skill: 6,
	points: 36,
	unique: true,
	upgrades: [ 'system', 'cannon', 'cannon', 'bomb', 'illicit', 'title', 'mod', 'ept' ],
	ability: {
		id: 'ig88a',
		text: 'After you perform an attack that destroys the defender, you may recover 1 shield.'
	}
},{
	name: 'IG88-B',
	shipId: 'aggr',
	factionId: 'scum',
	skill: 6,
	points: 36,
	unique: true,
	upgrades: [ 'system', 'cannon', 'cannon', 'bomb', 'illicit', 'title', 'mod', 'ept' ],
	ability: {
		id: 'ig88b',
		text: 'Once per round, after you perform an attack that does not hit, you may perform an attack with an equipped [cannon] secondary weapon.'
	}
},{
	name: 'IG88-C',
	shipId: 'aggr',
	factionId: 'scum',
	skill: 6,
	points: 36,
	unique: true,
	upgrades: [ 'system', 'cannon', 'cannon', 'bomb', 'illicit', 'title', 'mod', 'ept' ],
	ability: {
		id: 'ig88c',
		text: 'After you perform a boost action, you may perform a free evade action.'
	}
},{
	name: 'IG88-D',
	shipId: 'aggr',
	factionId: 'scum',
	skill: 6,
	points: 36,
	unique: true,
	upgrades: [ 'system', 'cannon', 'cannon', 'bomb', 'illicit', 'title', 'mod', 'ept' ],
	ability: {
		id: 'ig88d',
		text: 'You may execute the [s-loop left] or [s-loop right] maneuver using the corresponding [3 hard left] or [3 hard right] template.'
	}
},{
	name: 'Trandoshan Slaver',
	shipId: 'yv666',
	factionId: 'scum',
	skill: 2,
	points: 29,
	upgrades: [ 'cannon', 'missile', 'crew', 'crew', 'crew', 'illicit', 'title', 'mod' ]
},{
	name: 'Latts Razzi',
	shipId: 'yv666',
	factionId: 'scum',
	skill: 5,
	points: 33,
	unique: true,
	upgrades: [ 'cannon', 'missile', 'crew', 'crew', 'crew', 'illicit', 'title', 'mod' ],
	ability: {
		id: 'latts_razzi',
		text: 'When a friendly ship declares an attack, you may spend a target lock you have on the defender to reduce its agility by 1 for that attack.'
	}
},{
	name: 'Moralo Eval',
	shipId: 'yv666',
	factionId: 'scum',
	skill: 6,
	points: 34,
	unique: true,
	upgrades: [ 'cannon', 'missile', 'crew', 'crew', 'crew', 'illicit', 'title', 'mod' ],
	ability: {
		id: 'moralo_eval',
		text: 'You can perform [cannon] secondary weapon attacks against ships inside your auxiliary firing arc.'
	}
},{
	name: 'Bossk',
	shipId: 'yv666',
	factionId: 'scum',
	skill: 7,
	points: 29,
	unique: true,
	upgrades: [ 'cannon', 'missile', 'crew', 'crew', 'crew', 'illicit', 'title', 'mod', 'ept' ],
	ability: {
		id: 'the_boss',
		text: 'When you perform an attack that hits, before dealing damage, you may cancel 1 of your [crit] results to add 2 [hit] results.'
	}
}];
