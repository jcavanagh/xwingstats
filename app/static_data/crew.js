export default [{
	id: 'bombardier',
	name: 'Bombardier',
	points: 1,
	text: 'When dropping a bomb, you may use the [2 straight] template instead of the [1 straight] template.',
	restrictions: {},
	sets: [ 'kw' ]
},{
	id: 'greedo',
	name: 'Greedo',
	points: 1,
	text: 'The first time you attack each round and the first time you defend each round, the first Damage card dealt is dealt faceup.',
	unique: true,
	restrictions: {
		faction: 'scum'
	},
	sets: [ 'most-wanted' ]
},{
	id: 'int_agent',
	name: 'Intelligence Agent',
	points: 1,
	text: 'At the start of the Activation phase, choose 1 enemy ship at Range 1-2. You may look at that ship\'s chosen maneuver.',
	restrictions: {},
	sets: [ 'lambda', 'hwk' ]
},{
	id: 'nien_numb',
	name: 'Nien Numb',
	points: 1,
	text: 'You may treat all [straight] maneuvers as green maneuvers.',
	unique: true,
	restrictions: {
		faction: 'rebel'
	},
	sets: [ 'falcon' ]
},{
	id: 'callus',
	name: 'Agent Callus',
	points: 2,
	text: 'At the start of the first round, choose 1 enemy small or large ship. When attacking or defending agaist that ship, you may change 1 of your  results to a  or  result.',
	unique: true,
	unreleased: true,
	restrictions: {
		faction: 'imperial'
	},
	sets: [ 'gozanti' ]
},{
	id: 'the_boss',
	name: 'Bossk',
	points: 2,
	text: 'After you perform an attack that does not hit, if you are not stressed, you must receive 1 stress token. Then assign 1 focus token to your ship and acquire a target lock on the defender.',
	unique: true,
	restrictions: {
		faction: 'scum'
	},
	sets: [ 'hound' ]
},{
	id: 'leebo',
	name: '"Leebo"',
	points: 2,
	text: 'Action: Perform a free boost action. Then receive 1 ion token.',
	unique: true,
	restrictions: {
		faction: 'rebel'
	},
	sets: [ 'yt-2400' ]
},{
	id: 'dash_rendar',
	name: 'Dash Rendar',
	points: 2,
	text: 'You may perform attacks while overlapping an obstacle. Your attacks cannot be obstructed.',
	unique: true,
	restrictions: {
		faction: 'rebel'
	},
	sets: [ 'yt-2400' ]
},{
	id: 'han_solo',
	name: 'Han Solo',
	points: 2,
	text: 'When attacking, if you have a target lock on the defender, you may spend that target lock to change all your [focus] results to [hit] results.',
	unique: true,
	restrictions: {
		faction: 'rebel'
	},
	sets: [ 'tantive-iv' ]
},{
	id: 'jan_ors',
	name: 'Jan Ors',
	points: 2,
	text: 'Once per round, when a friendly ship at range 1-3 performs a focus action or would be assigned a focus token, you may assign an evade token instead.',
	unique: true,
	restrictions: {
		faction: 'rebel'
	},
	sets: [ 'rebel-aces' ]
},{
	id: 'merc_copilot',
	name: 'Mercenary Copilot',
	points: 2,
	text: 'When attacking at Range 3, you may change one of your [hit] results to a [crit] result.',
	sets: [ 'slave-1' ]
},{
	id: 'jerjerrod',
	name: 'Moff Jerjerrod',
	points: 2,
	text: 'When you are dealt a faceup Damage card, you may discard this upgrade card or another [crew] upgrade card to flip that Damage card facedown (without resolving its effect).',
	unique: true,
	restrictions: {
		faction: 'imperial'
	},
	sets: [ 'rebel-aces' ]
},{
	id: 'outlaw_tech',
	name: 'Outlaw Tech',
	points: 2,
	text: 'After you execute a red maneuver, you may assign 1 focus token to your ship. Limited.',
	limited: true,
	restrictions: {
		faction: 'scum'
	},
	sets: [ 'most-wanted' ]
},{
	id: 'saboteur',
	name: 'Saboteur',
	points: 2,
	text: 'Action: Choose 1 enemy ship at Range 1 and roll 1 attack die. On a [hit] or [crit] result, choose 1 random facedown Damage card assigned to that ship, flip it faceup, and resolve it.',
	sets: [ 'hwk' ]
},{
	id: 'tactician',
	name: 'Tactician',
	points: 2,
	limited: true,
	text: 'After you perform an attack against a ship inside your firing arc at Range 2, that ship receives 1 stress token.',
	sets: [ 'tie-ph' ]
},{
	id: 'c3po',
	name: 'C-3PO',
	points: 3,
	text: 'Once per round, before you roll 1 or more defense dice, you may guess aloud a number of [evade] results. If you roll that many [evade] results (before modifying the dice), add 1 [evade] result.',
	unique: true,
	restrictions: {
		faction: 'rebel'
	},
	sets: [ 'tantive-iv' ]
},{
	id: 'vader',
	name: 'Darth Vader',
	points: 3,
	text: 'After you perform an attack against an enemy ship, you may suffer 2 damage to cause that ship to suffer 1 critical damage.',
	unique: true,
	restrictions: {
		faction: 'imperial'
	},
	sets: [ 'lambda' ]
},{
	id: 'fleet_officer',
	name: 'Fleet Officer',
	points: 3,
	text: 'Action: Choose up to 2 friendly ships at Range 1-2 and assign 1 focus token to each of those ships. Then receive 1 stress token.',
	restrictions: {
		faction: 'imperial'
	},
	sets: [ 'decimator' ]
},{
	id: 'k4',
	name: 'K4 Security Droid',
	points: 3,
	text: 'After executing a green maneuver, you may acquire a target lock.',
	unique: true,
	restrictions: {
		faction: 'scum'
	},
	sets: [ 'most-wanted' ]
},{
	id: 'kyle_katarn',
	name: 'Kyle Katarn',
	points: 3,
	text: 'After you remove a stress token from your ship, you may assign a focus token to your ship.',
	unique: true,
	restrictions: {
		faction: 'rebel'
	},
	sets: [ 'rebel-aces' ]
},{
	id: 'lando_calrissian',
	name: 'Lando Calrissian',
	points: 3,
	text: 'Action: Roll 2 defense dice. For each [focus] result, assign 1 focus token to your ship. For each [evade] result, assign 1 evade token to your ship.',
	unique: true,
	restrictions: {
		faction: 'rebel'
	},
	sets: [ 'yt-2400' ]
},{
	id: 'mara_jade',
	name: 'Mara Jade',
	points: 3,
	text: 'At the end of the Combat phase, each enemy ship at Range 1 that does not have a stress token receives 1 stress token.',
	unique: true,
	restrictions: {
		faction: 'imperial'
	},
	sets: [ 'decimator' ]
},{
	id: 'navigator',
	name: 'Navigator',
	points: 3,
	text: 'When you reveal a maneuver, you may rotate your dial to another maneuver with the same bearing. You cannot rotate to a red maneuver if you have any stress tokens.',
	sets: [ 'lambda' ]
},{
	id: 'rebel_captive',
	name: 'Rebel Captive',
	points: 3,
	text: 'Once per round, the first ship that declares you as the target of an attack immediately receives 1 stress token.',
	unique: true,
	restrictions: {
		faction: 'imperial'
	},
	sets: [ 'decimator' ]
},{
	id: 'recon_specialist',
	name: 'Recon Specialist',
	points: 3,
	text: 'When you perform a focus action, assign 1 additional focus token to your ship.',
	sets: [ 'hwk', 'tie-ph' ]
},{
	id: 'weapons_engineer',
	name: 'Weapons Engineer',
	points: 3,
	text: 'You may maintain 2 target locks (only 1 per enemy ship). When you acquire a target lock, you may lock onto 2 enemy ships.',
	sets: [ 'lambda', 'falcon' ]
},{
	id: 'chewbacca',
	name: 'Chewbacca',
	points: 4,
	text: 'When you are dealt a Damage card, you may immediately discard that card and recover 1 shield. Then, discard this Upgrade card.',
	unique: true,
	restrictions: {
		faction: 'rebel'
	},
	sets: [ 'falcon' ]
},{
	id: 'flight_instructor',
	name: 'Flight Instructor',
	points: 4,
	text: 'When defending, you may reroll one of your [focus] results. If the attacker\'s pilot skill value is "2" or lower, you may reroll 1 of your blank results instead.',
	sets: [ 'lambda' ]
},{
	id: 'leia',
	name: 'Leia Organa',
	points: 4,
	text: 'At the start of the Activation Phase, you may discard this card to allow all friendly ships that reveal a red maneuver to treat that maneuver as a white maneuver until the end of the turn.',
	unique: true,
	restrictions: {
		faction: 'rebel'
	},
	sets: [ 'tantive-iv' ]
},{
	id: 'r2d2',
	name: 'R2-D2',
	points: 4,
	text: 'At the end of the End phase, if you have no shields, you may recover 1 shield and roll 1 attack die. On a [hit] result, randomly flip one of your facedown Damage cards faceup and resolve it.',
	unique: true,
	restrictions: {
		faction: 'rebel'
	},
	sets: [ 'tantive-iv' ]
},{
	id: 'ysanne_isard',
	name: 'Ysanne Isard',
	points: 4,
	text: 'At the start of the Combat phase, if you have no shields and at least 1 Damage card assigned to your ship, you may perform a free evade action.',
	unique: true,
	restrictions: {
		faction: 'imperial'
	},
	sets: [ 'decimator' ]
},{
	id: 'gunner',
	name: 'Gunner',
	points: 5,
	text: 'After you perform an attack that does not hit, you may immediately perform a primary weapon attack. You cannot perform another attack this round.',
	sets: [ 'slave-1', 'yt-2400' ]
},{
	id: 'luke',
	name: 'Luke Skywalker',
	points: 7,
	text: 'After you perform an attack that does not hit, you may immediately perform a primary weapon attack. You may change 1 [focus] result to a [hit] result. You cannot perform another attack this round.',
	unique: true,
	restrictions: {
		faction: 'rebel'
	},
	sets: [ 'falcon' ]
},{
	id: 'palpatine',
	name: 'Emperor Palpatine',
	points: 8,
	text: 'Once per round, you may change a friendly ship\'s die result to any other die result. That die cannot be modified again.',
	unique: true,
	restrictions: {
		faction: 'imperial'
	},
	sets: [ 'raider' ]
}];