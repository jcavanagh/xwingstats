export default [{
	id: 'adr_rush',
	name: 'Adrenaline Rush',
	points: 1,
	text: 'When you reveal a red maneuver, you may discard this card to treat that maneuver as a white maneuver until the end of the Activation phase.',
	restrictions: {},
	sets: [ 'tie-b' ]
},{
	id: 'calculation',
	name: 'Calculation',
	points: 1,
	text: 'When attacking, you may spend a focus token to change 1 of your [focus] results to a [crit] result.',
	restrictions: {},
	sets: [ 'starviper' ]
},{
	id: 'crack_shot',
	name: 'Crack Shot',
	points: 1,
	text: 'When attacking a ship inside your firing arc, you may discard this card to cancel 1 of the defender\'s [evade] results.',
	restrictions: {},
	sets: []
},{
	id: 'deadeye',
	name: 'Deadeye',
	points: 1,
	text: 'You may treat the "Attack [Target Lock]" header as "Attack [Focus]". When an attack instructs you to spend a target lock, you may spend a focus token instead.',
	restrictions: {},
	sets: [ 'aw' ]
},{
	id: 'determination',
	name: 'Determination',
	points: 1,
	text: 'When you are dealt a faceup Damage card with the Pilot trait, discard it immediately without resolving its effect.',
	restrictions: {},
	sets: [ 'core', 'tie-f' ]
},{
	id: 'dtf',
	name: 'Draw Their Fire',
	points: 1,
	text: 'When a friendly ship at range 1 is hit by an attack, you may suffer 1 of the uncancelled [crit] results instead of the target ship.',
	restrictions: {},
	sets: [ 'falcon' ]
},{
	id: 'lit_reflexes',
	name: 'Lightning Reflexes',
	points: 1,
	text: 'After you execute a green or white maneuver on your dial, you may discard this card to rotate your ship 180°. Then receive 1 stress token after the “Check Pilot Stress” step.',
	restrictions: {
		ship: {
			size: 'small'
		}
	},
	sets: [ 'kihraxz' ]
},{
	id: 'vi',
	name: 'Veteran Instincts',
	points: 1,
	text: 'Increase your pilot skill value by 2.',
	restrictions: {},
	sets: [ 'slave-1', 'falcon' ]
},{
	id: 'bodyguard',
	name: 'Bodyguard',
	points: 2,
	text: 'At the start of the Combat phase, you may spend a focus token to choose a friendly ship at Range 1 with higher pilot skill than you. Increase its agility value by 1 until the end of the round.',
	unique: true,
	restrictions: {
		faction: 'scum'
	},
	sets: [ 'starviper' ]
},{
	id: 'decoy',
	name: 'Decoy',
	points: 2,
	text: 'At the start of Combat phase, you may choose 1 friendly ship at Range 1-2. Exchange your pilot skill with that ship\'s pilot skill until the end of the phase.',
	restrictions: {},
	sets: [ 'z-95' ]
},{
	id: 'elusiveness',
	name: 'Elusiveness',
	points: 2,
	text: 'When defending, you may receive 1 stress token to choose 1 attack die. The attacker must reroll that die. If you have at least 1 stress token, you cannot use this ability.',
	restrictions: {},
	sets: [ 'tie-i', 'falcon' ]
},{
	id: 'expert_handling',
	name: 'Expert Handling',
	points: 2,
	text: 'Action: Perform a free barrel roll action. If you do not have the  action icon, receive 1 stress token. You may then remove 1 enemy target lock from your ship.',
	restrictions: {},
	sets: [ 'xw', 'tie-a' ]
},{
	id: 'intimidation',
	name: 'Intimidation',
	points: 2,
	text: 'While you are touching an enemy ship, reduce that ship\'s agility value by 1.',
	restrictions: {},
	sets: [ 'decimator' ]
},{
	id: 'lone_wolf',
	name: 'Lone Wolf',
	points: 2,
	text: 'When attacking or defending, if there are no friendly ships at Range 1-2, you may reroll one of your blank results.',
	unique: true,
	restrictions: {},
	sets: [ 'yt-2400' ]
},{
	id: 'squad_leader',
	name: 'Squad Leader',
	points: 2,
	text: 'Action: Choose one ship at range 1-2 that has a lower pilot skill. The chosen ship may immediately perform 1 free action.',
	unique: true,
	restrictions: {},
	sets: [ 'tie-a' ]
},{
	id: 'sot',
	name: 'Stay on Target',
	points: 2,
	text: 'When you reveal a manoeuvre, you may rotate your dial to another manoeuvre with the same speed. Treat that manoeuvre as a red manoeuvre.',
	restrictions: {},
	sets: [ 'yt-2400' ]
},{
	id: 'swarm_tactics',
	name: 'Swarm Tactics',
	points: 2,
	text: 'At the start of the combat phase, choose 1 friendly ship at Range 1. Until the end of this phase, treat the chosen ship as if its pilot skill were equal to your pilot skill.',
	restrictions: {},
	sets: [ 'tie-f', 'tie-a' ]
},{
	id: 'wingman',
	name: 'Wingman',
	points: 2,
	text: 'At the start of the Combat phase, remove 1 stress token from another friendly ship at Range 1.',
	restrictions: {},
	sets: [ 'z-95' ]
},{
	id: 'daredevil',
	name: 'Daredevil',
	points: 3,
	text: 'Action: Execute a white [1 hard left] or [1 hard right] maneuver. Then, receive 1 stress token. Then, if you do not have the [boost] action icon, roll 2 attack dice. Suffer any damage [hit] or critical damage [crit] rolled.',
	restrictions: {},
	sets: [ 'tie-i' ]
},{
	id: 'marksmanship',
	name: 'Marksmanship',
	points: 3,
	text: 'Action: When attacking this round, you may change one of your [focus] results to a [crit] result and all your other [focus] results to [hit] results.',
	restrictions: {},
	sets: [ 'core', 'xw' ]
},{
	id: 'outmaneuver',
	name: 'Outmaneuver',
	points: 3,
	text: 'When attacking a ship inside your firing arc, if you are not inside that ship\'s firing arc reduce its agility value by 1 (to a minumum of 0)',
	restrictions: {},
	sets: [ 'tie-d', 'ew' ]
},{
	id: 'predator',
	name: 'Predator',
	points: 3,
	text: 'When attacking, you may reroll 1 attack die. If the defender\'s pilot skill is "2" or lower, you may instead reroll up to 2 attack dice.',
	restrictions: {},
	sets: [ 'tie-d' ]
},{
	id: 'ptl',
	name: 'Push the Limit',
	points: 3,
	text: 'Once per round, after you perform an action, you may perform 1 free action shown in your action bar. Then receive 1 stress token.',
	restrictions: {},
	sets: [ 'imp-aces', 'aw' ]
},{
	id: 'ruthlessness',
	name: 'Ruthlessness',
	points: 3,
	text: 'After you perform an attack that hits, you must choose 1 other ship at Range 1 of the defender (other than yourself). That ship suffers 1 Damage.',
	restrictions: {
		faction: 'imperial'
	},
	sets: [ 'decimator' ]
},{
	id: 'expose',
	name: 'Expose',
	points: 4,
	text: 'Action: Until the end of the round, increase your primary weapon value by 1 and decrease your agility value by 1.',
	restrictions: {},
	sets: [ 'slave-1' ]
},{
	id: 'opportunist',
	name: 'Opportunist',
	points: 4,
	text: 'When attacking, if the defender does not have any focus or evade tokens, you may receive 1 stress token to roll 1 additional attack die. You cannot use this ability if you have any stress tokens.',
	restrictions: {},
	sets: [ 'imp-aces' ]
}];