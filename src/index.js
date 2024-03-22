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
import { setupShips, doublePlayer } from './handleDOM.js';
import { resetBoard } from './resetBtn.js';
import { placeRandomly } from './placeRandomlyBtn.js';
import { submitCoords } from './submitBtn.js';
import { setupBoardPhase } from "./setupBoardPhase.js";

const singleBtn = document.querySelector('#single');
const doubleBtn = document.querySelector('#double');

singleBtn.addEventListener('click', () => {
  setupShips();
  setupBoardPhase();

  const resetBtn = document.querySelector('.reset');
  const placeRandomlyBtn = document.querySelector('.place-randomly');
  const submitBtn = document.querySelector('.submit');

  const playerOne = player();
  const cpu = player();
  cpu.playerBoard.placeRandomShips();


  resetBtn.addEventListener('click', resetBoard);
  placeRandomlyBtn.addEventListener('click', placeRandomly);
  submitBtn.addEventListener('click', () => submitCoords(playerOne));

  console.log(cpu.playerBoard.shipCords);

});
doubleBtn.addEventListener('click', doublePlayer);
