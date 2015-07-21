//Libs
import can from 'can';
import _ from 'lodash';
import bs from 'bootstrap';
import define from 'can/map/define/define';

import diceRoller from 'app/components/dice_roller/dice_roller';
import combatSimulator from 'app/components/combat_simulator/combat_simulator';

//App template
import appTpl from './app.stache!';

//Render app
can.$('#app').html(appTpl());