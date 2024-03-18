'use strict';
/*---------------------------
Utility styles => style.css
---------------------------*/
import './style.css';
import './home.css';
import './game.css';

import { createShip } from './createShip.js';
import { gameboard } from './gameboard.js';
import { player } from './player.js';
import { singlePlayer, doublePlayer } from './handleDOM.js';
import { setupBoardPhase } from "./setupBoardPhase.js";

const singleBtn = document.querySelector('#single');
const doubleBtn = document.querySelector('#double');

singleBtn.addEventListener('click', () => {
  singlePlayer();
  setupBoardPhase();
});
doubleBtn.addEventListener('click', doublePlayer);
