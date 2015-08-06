/**
 * Complete description of a particular ship
 *
 * @property {String} id        A unique identifer for the ship, using [a-z_] characters only
 * @property {String} name      The full name of the ship, no character restrictions
 * @property {Number} attack    The attack value of the ship
 * @property {Number} agility   The agility value of the ship
 * @property {Number} hull      The hull value of the ship
 * @property {Number} shield    The shield value of the ship
 * @property {String} size      The size of the ship - 'small', 'large', or 'huge'
 * @property {Array}  actions   The actions a ship can take - Normal: 'focus', 'target_lock', 'boost', 'evade', 'barrel_roll', 'cloak', 'slam'.  GR-75: 'recover', 'reinforce', 'jam', 'coordinate'
 * @property {Array}  maneuvers The maneuvers a ship can take.
 *                              Maneuver values are as such: 0: Cannot perform, 1: White, 2: Green, 3: Red
 *                              Rows are in distance order: maneuvers[0] is zero speed maneuvers, etc.
 *                              Each column in a row is indexed as such: 0: left hard, 1: left bank, 2: straight, 3: right bank, 4: right hard, 5: k-turns, 6: s-loop left, 7: s-loop right
 *                              Each maneuver must have complete rows for speeds 0-5 and complete columns for all directions including k-turns/s-loops, regardless of ship capability
 *
 * Maneuvers
 * - Maneuvers are liste
 */
export default [{
	id: 'awing',
	name: 'A-Wing',
	attack: 2,
	agility: 3,
	hull: 2,
	shield: 2,
	size: 'small',
	actions: [ 'focus', 'target_lock', 'boost', 'evade' ],
	maneuvers: [
		[ 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 1, 0, 0, 0, 1, 0, 0, 0 ],
		[ 2, 2, 2, 2, 2, 0, 0, 0 ],
		[ 1, 1, 2, 1, 1, 3, 0, 0 ],
		[ 0, 0, 2, 0, 0, 0, 0, 0 ],
		[ 0, 0, 2, 0, 0, 3, 0, 0 ]
	]
},{
	id: 'bwing',
	name: 'B-Wing',
	attack: 3,
	agility: 1,
	hull: 3,
	shield: 5,
	size: 'small',
	actions: [ 'focus', 'target_lock', 'barrel_roll' ],
	maneuvers: [
		[ 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 3, 2, 2, 2, 3, 0, 0, 0 ],
		[ 1, 1, 2, 1, 1, 3, 0, 0 ],
		[ 0, 3, 1, 3, 0, 0, 0, 0 ],
		[ 0, 0, 3, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0 ]
	]
},{
	id: 'ewing',
	name: 'E-Wing',
	attack: 3,
	agility: 3,
	hull: 2,
	shield: 3,
	size: 'small',
	actions: [ 'focus', 'target_lock', 'barrel_roll', 'evade' ],
	maneuvers: [
		[ 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 1, 2, 1, 0, 0, 0, 0 ],
		[ 1, 2, 2, 2, 1, 0, 0, 0 ],
		[ 1, 1, 2, 1, 1, 3, 0, 0 ],
		[ 0, 0, 1, 0, 0, 3, 0, 0 ],
		[ 0, 0, 1, 0, 0, 0, 0, 0 ]
	]
},{
	id: 'xwing',
	name: 'X-Wing',
	attack: 3,
	agility: 2,
	hull: 3,
	shield: 2,
	size: 'small',
	actions: [ 'focus', 'target_lock' ],
	maneuvers: [
		[ 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 2, 2, 2, 0, 0, 0, 0 ],
		[ 1, 1, 2, 1, 1, 0, 0, 0 ],
		[ 1, 1, 1, 1, 1, 0, 0, 0 ],
		[ 0, 0, 1, 0, 0, 3, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0 ]
	]
},{
	id: 'ywing',
	name: 'Y-Wing',
	attack: 2,
	agility: 1,
	hull: 5,
	shield: 3,
	size: 'small',
	actions: [ 'focus', 'target_lock' ],
	maneuvers: [
		[ 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 1, 2, 1, 0, 0, 0, 0 ],
		[ 1, 1, 2, 1, 1, 0, 0, 0 ],
		[ 3, 1, 1, 1, 3, 0, 0, 0 ],
		[ 0, 0, 3, 0, 0, 3, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0 ]
	]
},{
	id: 'z95',
	name: 'Z-95 Headhunter',
	attack: 2,
	agility: 2,
	hull: 2,
	shield: 2,
	size: 'small',
	actions: [ 'focus', 'target_lock' ],
	maneuvers: [
		[ 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 1, 2, 1, 0, 0, 0, 0 ],
		[ 1, 2, 2, 2, 1, 0, 0, 0 ],
		[ 1, 1, 1, 1, 1, 3, 0, 0 ],
		[ 0, 0, 1, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0 ]
	]
},{
	id: 'hwk290',
	name: 'HWK-290',
	attack: 1,
	agility: 2,
	hull: 4,
	shield: 1,
	size: 'small',
	actions: [ 'focus', 'target_lock' ],
	maneuvers: [
		[ 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 2, 2, 2, 0, 0, 0, 0 ],
		[ 1, 1, 2, 1, 1, 0, 0, 0 ],
		[ 0, 3, 1, 3, 0, 0, 0, 0 ],
		[ 0, 0, 3, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0 ]
	]
},{
	id: 'kwing',
	name: 'K-Wing',
	attack: 2,
	agility: 1,
	hull: 5,
	shield: 4,
	size: 'small',
	actions: [ 'focus', 'target_lock', 'slam' ],
	maneuvers: [
		[ 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 2, 2, 2, 0, 0, 0, 0 ],
		[ 1, 1, 2, 1, 1, 0, 0, 0 ],
		[ 0, 1, 1, 1, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0 ]
	]
},{
	id: 'yt1300',
	name: 'YT-1300',
	attack: 3,
	agility: 2,
	hull: 3,
	shield: 2,
	size: 'large',
	actions: [ 'focus', 'target_lock' ],
	maneuvers: [
		[ 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 1, 2, 2, 2, 1, 0, 0, 0 ],
		[ 1, 1, 2, 1, 1, 0, 0, 0 ],
		[ 0, 1, 1, 1, 0, 3, 0, 0 ],
		[ 0, 0, 1, 0, 0, 3, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0 ]
	]
},{
	id: 'yt2400',
	name: 'YT-2400 Freighter',
	attack: 2,
	agility: 2,
	hull: 5,
	shield: 5,
	size: 'large',
	actions: [ 'focus', 'target_lock', 'barrel_roll' ],
	maneuvers: [
		[ 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 1, 2, 2, 2, 1, 0, 0, 0 ],
		[ 1, 1, 2, 1, 1, 0, 0, 0 ],
		[ 1, 1, 1, 1, 1, 0, 0, 0 ],
		[ 0, 0, 1, 0, 0, 3, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0 ]
	]
},
// {
// 	id: 'gr75',
// 	name: 'GR-75 Medium Transport',
// 	energy: 4,
// 	agility: 0,
// 	hull: 8,
// 	shield: 4,
// 	size: 'huge',
// 	actions: [ 'recover', 'reinforce', 'jam', 'coordinate' ],
// 	maneuvers: [
// 		[ 0, 0, 0, 0, 0, 0, 0, 0 ],
// 		[ 0, 1, 1, 1, 0, 0, 0, 0 ],
// 		[ 0, 1, 1, 1, 0, 0, 0, 0 ],
// 		[ 0, 0, 1, 0, 0, 0, 0, 0 ],
// 		[ 0, 0, 1, 0, 0, 0, 0, 0 ],
// 		[ 0, 0, 0, 0, 0, 0, 0, 0 ]
// 	]
// },
{
	id: 'tief',
	name: 'TIE Fighter',
	attack: 2,
	agility: 3,
	hull: 3,
	shield: 0,
	size: 'small',
	actions: [ 'focus', 'evade', 'barrel_roll' ],
	maneuvers: [
		[ 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 1, 0, 0, 0, 1, 0, 0, 0 ],
		[ 1, 2, 2, 2, 1, 0, 0, 0 ],
		[ 1, 1, 2, 1, 1, 3, 0, 0 ],
		[ 0, 0, 1, 0, 0, 3, 0, 0 ],
		[ 0, 0, 1, 0, 0, 0, 0, 0 ]
	]
},{
	id: 'tiea',
	name: 'TIE Advanced',
	attack: 2,
	agility: 3,
	hull: 3,
	shield: 2,
	size: 'small',
	actions: [ 'focus', 'target_lock', 'evade', 'barrel_roll' ],
	maneuvers: [
		[ 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 2, 0, 2, 0, 0, 0, 0 ],
		[ 1, 1, 2, 1, 1, 0, 0, 0 ],
		[ 1, 1, 2, 1, 1, 0, 0, 0 ],
		[ 0, 0, 1, 0, 0, 3, 0, 0 ],
		[ 0, 0, 1, 0, 0, 0, 0, 0 ]
	]
},{
	id: 'tieb',
	name: 'TIE Bomber',
	attack: 2,
	agility: 2,
	hull: 6,
	shield: 0,
	size: 'small',
	actions: [ 'focus', 'target_lock', 'barrel_roll' ],
	maneuvers: [
		[ 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 1, 2, 1, 0, 0, 0, 0 ],
		[ 3, 2, 2, 2, 3, 0, 0, 0 ],
		[ 1, 1, 2, 1, 1, 0, 0, 0 ],
		[ 0, 0, 1, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 3, 0, 0 ]
	]
},{
	id: 'tied',
	name: 'TIE Defender',
	attack: 3,
	agility: 3,
	hull: 3,
	shield: 3,
	size: 'small',
	actions: [ 'focus', 'target_lock', 'barrel_roll' ],
	maneuvers: [
		[ 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 3, 1, 0, 1, 3, 0, 0, 0 ],
		[ 3, 1, 2, 1, 3, 0, 0, 0 ],
		[ 1, 1, 2, 1, 1, 0, 0, 0 ],
		[ 0, 0, 2, 0, 0, 1, 0, 0 ],
		[ 0, 0, 2, 0, 0, 0, 0, 0 ]
	]
},{
	id: 'tiei',
	name: 'TIE Interceptor',
	attack: 3,
	agility: 3,
	hull: 3,
	shield: 0,
	size: 'small',
	actions: [ 'focus', 'evade', 'barrel_roll', 'boost' ],
	maneuvers: [
		[ 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 1, 0, 0, 0, 1, 0, 0, 0 ],
		[ 2, 2, 2, 2, 2, 0, 0, 0 ],
		[ 1, 1, 2, 1, 1, 3, 0, 0 ],
		[ 0, 0, 2, 0, 0, 0, 0, 0 ],
		[ 0, 0, 1, 0, 0, 3, 0, 0 ]
	]
},{
	id: 'tieph',
	name: 'TIE Phantom',
	attack: 4,
	agility: 2,
	hull: 2,
	shield: 2,
	size: 'small',
	actions: [ 'focus', 'evade', 'barrel_roll', 'cloak' ],
	maneuvers: [
		[ 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 1, 0, 0, 0, 1, 0, 0, 0 ],
		[ 1, 2, 2, 2, 1, 0, 0, 0 ],
		[ 1, 1, 2, 1, 1, 3, 0, 0 ],
		[ 0, 0, 1, 0, 0, 3, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0 ]
	]
},{
	id: 'tiepu',
	name: 'TIE Punisher',
	attack: 2,
	agility: 1,
	hull: 6,
	shield: 3,
	size: 'small',
	actions: [ 'focus', 'target_lock', 'boost' ],
	maneuvers: [
		[ 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 2, 2, 2, 0, 0, 0, 0 ],
		[ 3, 1, 2, 1, 3, 0, 0, 0 ],
		[ 1, 1, 1, 1, 1, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 3, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0 ]
	]
},{
	id: 'tieap',
	name: 'TIE Advanced Prototype',
	attack: 2,
	agility: 3,
	hull: 2,
	shield: 2,
	size: 'small',
	actions: [ 'focus', 'target_lock', 'barrel_roll', 'boost' ],
	maneuvers: []
},{
	id: 'fs31',
	name: 'Firespray-31',
	attack: 3,
	agility: 2,
	hull: 6,
	shield: 4,
	size: 'large',
	actions: [ 'focus', 'evade', 'barrel_roll', 'boost' ],
	maneuvers: [
		[ 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 2, 2, 2, 0, 0, 0, 0 ],
		[ 1, 1, 2, 1, 1, 0, 0, 0 ],
		[ 1, 1, 1, 1, 1, 3, 0, 0 ],
		[ 0, 0, 1, 0, 0, 3, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0 ]
	]
},{
	id: 'bus',
	name: 'Lambda-Class Shuttle',
	attack: 3,
	agility: 1,
	hull: 5,
	shield: 5,
	size: 'large',
	actions: [ 'focus', 'target_lock' ],
	maneuvers: [
		[ 0, 0, 3, 0, 0, 0, 0, 0 ],
		[ 0, 2, 2, 2, 0, 0, 0, 0 ],
		[ 3, 1, 2, 1, 3, 0, 0, 0 ],
		[ 0, 3, 1, 3, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0 ]
	]
},{
	id: 'vt49',
	name: 'VT-49 Decimator',
	attack: 3,
	agility: 0,
	hull: 12,
	shield: 4,
	size: 'large',
	actions: [ 'focus', 'target_lock' ],
	maneuvers: [
		[ 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 1, 1, 1, 0, 0, 0, 0 ],
		[ 1, 2, 2, 2, 1, 0, 0, 0 ],
		[ 1, 1, 2, 1, 1, 0, 0, 0 ],
		[ 0, 0, 1, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0 ]
	]
},{
	id: 'm3a',
	name: 'M3-A "Scyk" Interceptor',
	attack: 2,
	agility: 3,
	hull: 1,
	shield: 2,
	size: 'small',
	actions: [ 'focus', 'evade', 'barrel_roll', 'target_lock' ],
	maneuvers: [
		[ 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 1, 2, 0, 2, 1, 0, 0, 0 ],
		[ 1, 2, 2, 2, 1, 0, 0, 0 ],
		[ 0, 1, 2, 1, 0, 3, 0, 0 ],
		[ 0, 0, 1, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 3, 0, 0 ]
	]
},{
	id: 'kihraxz',
	name: 'Kihraxz Fighter',
	attack: 3,
	agility: 2,
	hull: 4,
	shield: 1,
	size: 'small',
	actions: [ 'focus', 'target_lock' ],
	maneuvers: [
		[ 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 1, 2, 0, 2, 1, 0, 0, 0 ],
		[ 1, 2, 2, 2, 1, 0, 0, 0 ],
		[ 0, 1, 1, 1, 0, 0, 0, 0 ],
		[ 0, 0, 1, 0, 0, 3, 0, 0 ],
		[ 0, 0, 0, 0, 0, 3, 0, 0 ]
	]
},{
	id: 'viper',
	name: 'StarViper',
	attack: 3,
	agility: 3,
	hull: 4,
	shield: 1,
	size: 'small',
	actions: [ 'focus', 'target_lock', 'barrel_roll', 'boost' ],
	maneuvers: [
		[ 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 1, 2, 2, 2, 1, 0, 0, 0 ],
		[ 1, 1, 2, 1, 1, 0, 0, 0 ],
		[ 0, 1, 2, 1, 0, 0, 3, 3 ],
		[ 0, 0, 1, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0 ]
	]
},{
	id: 'aggr',
	name: 'Aggressor',
	attack: 3,
	agility: 3,
	hull: 4,
	shield: 4,
	size: 'large',
	actions: [ 'focus', 'target_lock', 'evade', 'boost' ],
	maneuvers: [
		[ 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 1, 2, 2, 2, 1, 0, 0, 0 ],
		[ 1, 2, 2, 2, 1, 0, 0, 0 ],
		[ 0, 2, 2, 2, 0, 0, 3, 3 ],
		[ 0, 0, 0, 0, 0, 3, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0 ]
	]
},{
	id: 'yv666',
	name: 'YV-666',
	attack: 3,
	agility: 1,
	hull: 6,
	shield: 6,
	size: 'large',
	actions: [ 'focus', 'target_lock' ],
	maneuvers: [
		[ 0, 0, 3, 0, 0, 0, 0, 0 ],
		[ 0, 2, 2, 2, 0, 0, 0, 0 ],
		[ 3, 1, 2, 1, 3, 0, 0, 0 ],
		[ 1, 1, 2, 1, 1, 0, 0, 0 ],
		[ 0, 0, 1, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0 ]
	]
},{
	id: 'jm5000',
	name: 'JumpMaster 5000',
	attack: 2,
	agility: 2,
	hull: 5,
	shield: 4,
	size: 'large',
	actions: [ 'focus', 'target_lock', 'barrel_roll' ],
	maneuvers: []
}];