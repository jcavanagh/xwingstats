import _ from 'lodash';

//BINDERS FULL OF DATA
import astromechs from 'app/static_data/astromechs';
import bombs from 'app/static_data/bombs';
import cannons from 'app/static_data/cannons';
import crew from 'app/static_data/crew';
import epts from 'app/static_data/elite_pilot_talents';
import factions from 'app/static_data/factions';
import illicit from 'app/static_data/illicit';
import missiles from 'app/static_data/missiles';
import modifications from 'app/static_data/modifications';
import pilots from 'app/static_data/pilots';
import salvagedAstromechs from 'app/static_data/salvaged_astromechs';
import ships from 'app/static_data/ships';
import sysUpgrades from 'app/static_data/sys_upgrades';
import titles from 'app/static_data/titles';
import torpedoes from 'app/static_data/torpedoes';
import turrets from 'app/static_data/turrets';

export default class Static {
	getAstromechs() {
		return astromechs;
	}

	getBombs() {
		return bombs;
	}

	getCannons() {
		return cannons;
	}

	getCrew() {
		return crew;
	}

	getEpts() {
		return epts;
	}

	getFactions() {
		return factions;
	}

	getIllicit() {
		return illicit;
	}

	getMissiles() {
		return missiles;
	}

	getModifications() {
		return modifications;
	}

	getPilots() {
		//Use memoized version if we have it
		if(!this.pilots) {
			this.pilots = _.map(pilots, function(pilot) {
				//Find ship data
				if(pilot.shipId) {
					pilot.ship = _.find(ships, { id: pilot.shipId });
				}

				//Find faction data
				if(pilot.factionId) {
					pilot.faction = _.find(factions, { id: pilot.factionId });
				}

				//Merge overrides
				if(pilot.overrides) {
					_.merge(pilot, pilot.overrides);
				}

				return pilot;
			});
		}

		return this.pilots;
	}

	getSalvagedAstromechs() {
		return salvagedAstromechs;
	}

	getShips() {
		return ships;
	}

	getSystemUpgrades() {
		return sysUpgrades;
	}

	getTitles() {
		return titles;
	}

	getTorpedoes() {
		return torpedoes;
	}

	getTurrets() {
		return turrets;
	}
}