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
import { setupShips, doublePlayer, attackPhase, updateMiniGrid } from './handleDOM.js';
import { displayWinner } from './handleDOM.js';
import { resetBoard } from './resetBtn.js';
import { placeRandomly } from './placeRandomlyBtn.js';
import { submitCoords } from './submitBtn.js';
import { setupBoardPhase } from "./setupBoardPhase.js";

const singleBtn = document.querySelector('#single');
const doubleBtn = document.querySelector('#double');

function playerAttack(e, defendingPlayer) {
  const grid = document.querySelector('.grid');
  const div = document.createElement('div');
  const rect = e.target.getBoundingClientRect();

  const row = Math.ceil((e.clientY - rect.top) / 50);
  const column = Math.ceil((e.clientX - rect.left) / 50);

  div.style.gridRow = row;
  div.style.gridColumn = column;

  if (defendingPlayer.playerBoard.recieveAttack(row-1, column-1)) {
    div.classList.add('hit');
  } else {
    div.classList.add('miss');
  };

  grid.appendChild(div);
};

function cpuAttack(player) {
  player.playerBoard.recieveRandomAttack();
  updateMiniGrid(player.playerBoard);
};

function checkForWinners(playerOne, playerTwo) {
  let winner = null;

  if (playerTwo.playerBoard.allShipsSunk()) {
    winner = playerOne;
  } else if (playerOne.playerBoard.allShipsSunk()) {
    winner = playerTwo;
  };

  if (winner) {
    displayWinner(winner);
  };
};

function singleGameLoop(playerOne, playerTwo) {
  attackPhase(playerOne);

  const grid = document.querySelector('.grid');

  grid.addEventListener('click', (e) => {
    if (e.target === grid) {
      playerAttack(e, playerTwo);
      cpuAttack(playerOne);
      checkForWinners(playerOne, playerTwo);
    };
  });
};

singleBtn.addEventListener('click', () => {
  setupShips();
  setupBoardPhase();

  const resetBtn = document.querySelector('.reset');
  const placeRandomlyBtn = document.querySelector('.place-randomly');
  const submitBtn = document.querySelector('.submit');

  const playerOne = player();
  playerOne.name = 'player one';
  const cpu = player();
  cpu.name = 'computer';

  resetBtn.addEventListener('click', resetBoard);
  placeRandomlyBtn.addEventListener('click', placeRandomly);
  submitBtn.addEventListener('click', () => {
    submitCoords(playerOne);
    cpu.playerBoard.placeRandomShips();
    singleGameLoop(playerOne, cpu);
  });

});
doubleBtn.addEventListener('click', doublePlayer);
