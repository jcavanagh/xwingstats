export default [{
	id: 'enh_scopes',
	name: 'Enhanced Scopes',
	points: 1,
	text: 'During the Activation phase, treat your pilot skill as "0".',
	restrictions: {},
	sets: [ 'rebel-aces', 'tie-pu' ]
},{
	id: 'fcs',
	name: 'Fire-Control System',
	points: 2,
	text: 'After you perform an attack, you may acquire a target lock on the defender.',
	restrictions: {},
	sets: [ 'bw', 'tie-ph' ]
},{
	id: 'acc_corrector',
	name: 'Accuracy Corrector',
	points: 3,
	text: 'When attacking, you may cancel all of your dice results. Then you may add 2 [hit] results to your roll. Your dice cannot be modified again this attack.',
	restrictions: {},
	sets: [ 'starviper', 'ig-2000' ]
},{
	id: 'adv_sensors',
	name: 'Advanced Sensors',
	points: 3,
	text: 'Immediately before you reveal your maneuver, you may perform 1 free action. If you use this ability, skip your "perform Action" step during this round.',
	restrictions: {},
	sets: [ 'lambda', 'ew' ]
},{
	id: 'sensor_jammer',
	name: 'Sensor Jammer',
	points: 4,
	text: 'When defending, you may change 1 of the attacker\'s [hit] results to a [focus] result. The attacker cannot reroll the die with the changed result.',
	restrictions: {},
	sets: [ 'lambda' ]
},{
	id: 'adv_tgt_computer',
	name: 'Sensor Jammer',
	points: 5,
	text: 'When attacking with your primary weapon, if you have a target lock on the defender, you may add 1 [crit] result to your roll. If you do, you cannot spend target locks during this attack.',
	restrictions: {},
	sets: [ 'raider' ]
}];