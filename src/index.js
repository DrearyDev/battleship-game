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
import { setupShips, attackPhase, updateMiniGrid, displayWinner, clearGrid, clearMiniGrid, passDevice, updateGrid, displayBothBoards } from './handleDOM.js';
import { displayActivePlayer } from './handleDOM.js';
import { resetBoard } from './resetBtn.js';
import { placeRandomly } from './placeRandomlyBtn.js';
import { submitCoords } from './submitBtn.js';
import { setupBoardPhase } from "./setupBoardPhase.js";

let gamemode = null;
let activePlayer = null;
const singleBtn = document.querySelector('#single');
const doubleBtn = document.querySelector('#double');

function playerAttack(e, defendingPlayer) {
  const square = document.querySelector('.square');
  const squareWidth = getComputedStyle(square).getPropertyValue('width').slice(0,-2);
  const grid = document.querySelector('.grid');
  const div = document.createElement('div');
  const rect = e.target.getBoundingClientRect();

  const row = Math.ceil((e.clientY - rect.top) / squareWidth);
  const column = Math.ceil((e.clientX - rect.left) / squareWidth);

  div.style.gridRow = row;
  div.style.gridColumn = column;

  if (defendingPlayer.playerBoard.recieveAttack(row-1, column-1)) {
    div.classList.add('hit');
  } else {
    div.classList.add('miss');
  };

  grid.appendChild(div);
  return div.classList[0];
};

function cpuAttack(player) {
  player.playerBoard.recieveSmartAttack();
  const miniGrid = document.querySelector('.mini-grid');
  updateMiniGrid(player.playerBoard, miniGrid);
};

function changeMode() {
  const body = document.querySelector('body');
  const header = document.querySelector('.header');
  body.innerHTML = ''
  body.appendChild(header);

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');
  const singleBtn = document.createElement('button');
  singleBtn.id = 'single';
  singleBtn.innerText = 'Single Player (vs CPU)';
  const doubleBtn = document.createElement('button');
  doubleBtn.id = 'double';
  doubleBtn.innerText = 'Double Player (Local play)';

  btnContainer.appendChild(singleBtn);
  btnContainer.appendChild(doubleBtn);

  body.appendChild(btnContainer);

  singleBtn.addEventListener('click', singlePlayer);
  doubleBtn.addEventListener('click', doublePlayer);
};

function playAgain(gamemode) {
  const body = document.querySelector('body');
  const header = document.querySelector('.header');
  body.innerHTML = '';
  body.appendChild(header);

  if (gamemode === 'single') {
    singlePlayer();
  } else {
    doublePlayer();
  };
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
    const changeModeBtn = document.querySelector('.change-mode');
    changeModeBtn.addEventListener('click', changeMode);
    const playAgainBtn = document.querySelector('.play-again');
    playAgainBtn.addEventListener('click', () => {
      playAgain(gamemode);
    });

    return true;
  } else {
    return false;
  };
};

function gridClickedSingle(e) {
  const grid = document.querySelector('.grid');

  if (e.target === grid) {
    playerAttack(e, grid.playerTwo);
    cpuAttack(grid.playerOne);

    if (checkForWinners(grid.playerOne, grid.playerTwo)) {
      grid.removeEventListener('click', gridClickedSingle);
      displayBothBoards(grid.playerOne, grid.playerTwo);
      checkForWinners(grid.playerOne, grid.playerTwo);
    };
  };
};

function singleGameLoop(playerOne, playerTwo) {
  attackPhase(playerOne);

  const grid = document.querySelector('.grid');
  grid.playerOne = playerOne;
  grid.playerTwo = playerTwo;
  grid.addEventListener('click', gridClickedSingle);
};

function singlePlayer() {
  gamemode = 'single';
  setupShips();
  setupBoardPhase();

  const resetBtn = document.querySelector('.reset');
  const placeRandomlyBtn = document.querySelector('.place-randomly');
  const submitBtn = document.querySelector('.submit');

  const playerOne = player();
  playerOne.name = 'Player';
  const cpu = player();
  cpu.name = 'Computer';

  resetBtn.addEventListener('click', resetBoard);
  placeRandomlyBtn.addEventListener('click', placeRandomly);
  submitBtn.addEventListener('click', () => {
    if (submitCoords(playerOne)) {
      cpu.playerBoard.placeRandomShips();
      singleGameLoop(playerOne, cpu);
    }
  });
};

function doublePlayer() {
  gamemode = 'double';
  setupShips();
  setupBoardPhase();

  const resetBtn = document.querySelector('.reset');
  const placeRandomlyBtn = document.querySelector('.place-randomly');
  const submitBtn = document.querySelector('.submit');

  const playerOne = player();
  playerOne.name = 'Player One';
  const playerTwo = player();
  playerTwo.name = 'Player Two';

  activePlayer = playerOne;
  displayActivePlayer(activePlayer);

  resetBtn.addEventListener('click', resetBoard);
  placeRandomlyBtn.addEventListener('click', placeRandomly);
  submitBtn.addEventListener('click', () => {
    if (submitCoords(activePlayer)) {
      if (activePlayer === playerOne) {
        resetBoard();
        activePlayer = playerTwo;
        displayActivePlayer(activePlayer);
      } else {
        activePlayer = playerOne;
        doubleGameLoop(playerOne, playerTwo);
      };
    };
  });
};

function doubleGameLoop(playerOne, playerTwo) {
  attackPhase(activePlayer);
  displayActivePlayer(activePlayer);

  const grid = document.querySelector('.grid');
  grid.playerOne = playerOne;
  grid.playerTwo = playerTwo;
  grid.addEventListener('click', gridClickedDouble);
};

function gridClickedDouble(e) {
  const grid = document.querySelector('.grid');
  const playerOne = grid.playerOne;
  const playerTwo = grid.playerTwo;
  let lastPlayer;
  let lastTurnStatus;

  if (e.target === grid) {
    lastPlayer = activePlayer;
    activePlayer === playerOne ? activePlayer = playerTwo : activePlayer = playerOne;
    lastTurnStatus = playerAttack(e, activePlayer);
    clearGrid();
    clearMiniGrid();

    if (!checkForWinners(playerOne, playerTwo)) {
      passDevice(activePlayer, lastTurnStatus);
      const nextTurnBtn = document.querySelector('.start-turn');
      nextTurnBtn.addEventListener('click', (e) => {
        e.target.parentElement.remove();
        updateGrid(lastPlayer.playerBoard);
        const miniGrid = document.querySelector('.mini-grid');
        updateMiniGrid(activePlayer.playerBoard, miniGrid);
        displayActivePlayer(activePlayer);
      });
    } else {
      grid.removeEventListener('click', gridClickedDouble);
      displayBothBoards(playerOne, playerTwo);
      checkForWinners(playerOne, playerTwo);
    };
  };
};

singleBtn.addEventListener('click', singlePlayer);
doubleBtn.addEventListener('click', doublePlayer);
