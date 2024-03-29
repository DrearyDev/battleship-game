'use strict';
/*---------------------------
Utility styles => style.css
---------------------------*/
import './style.css';
import './home.css';

import { createShip } from './createShip.js';
import { gameboard } from './gameboard.js';
import { player } from './player.js';
import { singlePlayer, doublePlayer } from './handleDOM.js';

const singleBtn = document.querySelector('#single');
const doubleBtn = document.querySelector('#double');

singleBtn.addEventListener('click', singlePlayer);
doubleBtn.addEventListener('click', doublePlayer);
