
const body = document.querySelector('body');
const header = document.querySelector('.header');

function createGrid() {
    const grid = document.createElement('div');
    grid.classList.add('grid');

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const div = document.createElement('div');
            div.classList.add('square');

            div.row = i;
            div.column = j;
            div.coord = [i,j];

            grid.appendChild(div);
        };
    };
    
    body.appendChild(grid);
};

function updateGrid(playerBoard) {
  const grid = document.querySelector('.grid');
  const misses = playerBoard.misses.map(coords => [coords[0] + 1, coords[1] + 1]);
  const hits = playerBoard.hits.map(coords => [coords[0] + 1, coords[1] + 1]);

  for (let i = 0; i < misses.length; i++) {
    const div = document.createElement('div');
    div.classList.add('miss');

    div.style.gridRow = [misses[i][0]];
    div.style.gridColumn = [misses[i][1]];

    grid.appendChild(div);
  };

  for (let i = 0; i < hits.length; i++) {
    const div = document.createElement('div');
    div.classList.add('hit');

    div.style.gridRow = [hits[i][0]];
    div.style.gridColumn = [hits[i][1]];

    grid.appendChild(div);
  };
};

function createShips() {
    const square = document.querySelector('.square');
    const squareWidth = getComputedStyle(square).getPropertyValue('--SQUARE_WIDTH').slice(0,-2);

    const widths = [4,3,3,2,2,2,1,1,1,1];
    const ships = document.createElement('div');
    ships.classList.add('ships');

    for (let piece in widths) {
        const ship = document.createElement('div');
        ship.classList.add('ship');
        ship.setAttribute('draggable', true);
        ship.style.width = `${widths[piece] * squareWidth}px`;
        ship.style.height = `${squareWidth}px`;

        ships.appendChild(ship);
    };

    body.appendChild(ships);
};

function createOptionsButtons() {
  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('buttons-container');

  const submitShips = document.createElement('button');
  submitShips.classList.add('submit');
  submitShips.innerText = 'Submit Ships';

  const resetShips = document.createElement('button');
  resetShips.classList.add('reset');
  resetShips.innerText = 'Reset Ships';

  const placeRandomly = document.createElement('button');
  placeRandomly.classList.add('place-randomly');
  placeRandomly.innerText = 'Place Ships Randomly';

  body.appendChild(buttonsContainer);
  buttonsContainer.appendChild(submitShips);
  buttonsContainer.appendChild(resetShips);
  buttonsContainer.appendChild(placeRandomly);
};

function createMiniGrid() {
  const miniGrid = document.createElement('div');
  miniGrid.classList.add('mini-grid');

  for (let i = 0; i < 10; i++) {
    for (let k = 0; k < 10; k++) {
      const div = document.createElement('div');
      div.classList.add('mini-square');

      miniGrid.appendChild(div);
    };
  };

  body.appendChild(miniGrid);
};

function updateMiniGrid(playerBoard, miniGrid) {
  let shipCordsArr = [];

  for (const entry of playerBoard.shipCords.entries()) {
    shipCordsArr.push(entry[0].split(',').map(Number))
  };

  const gridCords = shipCordsArr.map(coords => [coords[0] + 1, coords[1] + 1]);
  const misses = playerBoard.misses.map(coords => [coords[0] + 1, coords[1] + 1]);
  const hits = playerBoard.hits.map(coords => [coords[0] + 1, coords[1] + 1]);

  for (let i = 0; i < gridCords.length; i++) {
    const div = document.createElement('div');
    div.classList.add('mini-ship');

    div.style.gridRow = [gridCords[i][0]];
    div.style.gridColumn = [gridCords[i][1]];

    miniGrid.appendChild(div);
  };

  for (let i = 0; i < misses.length; i++) {
    const div = document.createElement('div');
    div.classList.add('miss');

    div.style.gridRow = [misses[i][0]];
    div.style.gridColumn = [misses[i][1]];

    miniGrid.appendChild(div);
  };

  for (let i = 0; i < hits.length; i++) {
    const div = document.createElement('div');
    div.classList.add('hit');

    div.style.gridRow = [hits[i][0]];
    div.style.gridColumn = [hits[i][1]];

    miniGrid.appendChild(div);
  };
  
};

function clearMiniGrid() {
  const miniGridChildren = [...document.querySelector('.mini-grid').children];

  miniGridChildren.forEach(child => {
    if (!child.classList.contains('mini-square')) {
      child.remove();
    };
  });
};

function attackPhase(player) {
  resetBody();
  createGrid();
  createMiniGrid();
  const miniGrid = document.querySelector('.mini-grid');
  updateMiniGrid(player.playerBoard, miniGrid);

};

function clearGrid() {
  const gridChildren = [...document.querySelector('.grid').children];

  gridChildren.forEach(child => {
    if (!child.classList.contains('square')) {
      child.remove();
    };
  });
};

function passDevice(activePlayer, lastTurnStatus) {
  
  const div = document.createElement('div');
  div.classList.add('pass-device');
  const h1 = document.createElement('h1');
  h1.innerText = `That was a ${lastTurnStatus}!`;
  const h2 = document.createElement('h2');
  h2.innerText = `Its ${activePlayer.name}'s Turn!`;

  const startTurnBtn = document.createElement('button');
  startTurnBtn.classList.add('start-turn');
  startTurnBtn.innerText = 'Start Turn';

  div.appendChild(h1);
  div.appendChild(h2);
  div.appendChild(startTurnBtn);

  body.appendChild(div);
};

function resetBody() {
  body.innerHTML = '';
  body.appendChild(header);
};

function setupShips() {
    resetBody();
    createGrid();
    createShips();
    createOptionsButtons();
};

function displayWinner(winner) {
  const winnerMsg = document.createElement('div');
  winnerMsg.classList.add('winner-msg');
  const h2 = document.createElement('h2');
  h2.innerText = 'Winner is:';
  const h1 = document.createElement('h1');
  h1.innerText = `${winner.name}!`;
  winnerMsg.appendChild(h2);
  winnerMsg.appendChild(h1);

  const options = document.createElement('div');
  options.classList.add('game-over-options');
  const changeModeBtn = document.createElement('button');
  changeModeBtn.classList.add('change-mode');
  changeModeBtn.innerText = 'Change Mode';
  const playAgainBtn = document.createElement('button');
  playAgainBtn.classList.add('play-again');
  playAgainBtn.innerText = 'Play Again';
  options.appendChild(changeModeBtn);
  options.appendChild(playAgainBtn);

  winnerMsg.appendChild(options);

  body.insertBefore(winnerMsg, body.children[0]);
};

function displayActivePlayer(activePlayer) {
  const activePlayerH2 = document.querySelector('.active-player');

  if (activePlayerH2) {
    activePlayerH2.innerText = `${activePlayer.name}`;
  } else {
    const h2 = document.createElement('h2');
    h2.classList.add('active-player');
    h2.innerText = `${activePlayer.name}`;
    body.insertBefore(h2, body.children[0]);
  };
  
};

function displayBothBoards(playerOne, playerTwo) {
  resetBody();
  createMiniGrid();
  createMiniGrid();

  const playerOneH2 = document.createElement('h2');
  playerOneH2.innerText = `${playerOne.name}'s Board:`;

  const playerTwoH2 = document.createElement('h2');
  playerTwoH2.innerText = `${playerTwo.name}'s Board:`;

  const miniGrids = [...document.querySelectorAll('.mini-grid')]

  updateMiniGrid(playerOne.playerBoard, miniGrids[0]);
  updateMiniGrid(playerTwo.playerBoard, miniGrids[1]);

  body.insertBefore(playerOneH2, miniGrids[0]);
  body.insertBefore(playerTwoH2, miniGrids[1]);
};

export { setupShips, attackPhase, updateMiniGrid, displayWinner, displayActivePlayer, clearGrid, clearMiniGrid, passDevice, updateGrid, displayBothBoards };
