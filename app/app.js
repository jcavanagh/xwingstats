//Libs
import can from 'can';
import _ from 'lodash';
// import $ from 'jquery';
import define from 'can/map/define/define';

import diceRoller from 'app/components/dice_roller/dice_roller';

//App template
import appTpl from './app.stache!';

//Render app
can.$('#app').html(appTpl());