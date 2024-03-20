
function setupBoardPhase() {
  const submitBtn = document.querySelector('.submit');
  const resetBtn = document.querySelector('.reset');
  const placeRandomlyBtn = document.querySelector('.place-randomly');
  
  const ships = document.querySelectorAll('.ship');
  const grid = document.querySelector('.grid');
  grid.ships = new Set();

  ships.forEach(ship => {
    ship.addEventListener('dragstart', () => {
      ship.classList.add('dragging');

      if (ship.coords) {
        for (let i = 0; i < ship.coords.length; i++) {
          grid.ships.delete(ship.coords[i].toString());
        };
      };
    });

    ship.addEventListener('dragend', () => {
      ship.classList.remove('dragging');
    });

    ship.addEventListener('click', () => {
      const width = ship.style.width.slice(0,-2);
      const height = ship.style.height.slice(0,-2);

      if (width > 50 || height > 50) {
        ship.style.height = `${width}px`;
        ship.style.width = `${height}px`;
      };

      if (ship.parentElement.classList.contains('grid')) {
        if (width < height) {
          for (let i = 1; i < ship.coords.length; i++) {
            grid.ships.delete(ship.coords[i].toString());
            ship.coords[i][1] = ship.coords[0][1];
            ship.coords[i][0] = ship.coords[i][0] + i;
          };
        } else {
          for (let i = 1; i < ship.coords.length; i++) {
            grid.ships.delete(ship.coords[i].toString());
            ship.coords[i][0] = ship.coords[0][0];
            ship.coords[i][1] = ship.coords[i][1] + i;
          };
        };

        for (let i = 1; i < ship.coords.length; i++) {
          if (grid.ships.has(ship.coords[i].toString())) { ship.style.borderColor = 'red' };
        };

        calculateGridSet();
      };
    });
  });

  grid.addEventListener('dragover', (e) => {//grid isnt zero indexed
    e.preventDefault();

    if (e.target === grid) {
      const ship = document.querySelector('.dragging');
      const rect = e.target.getBoundingClientRect();

      const row = Math.round((e.clientY - rect.top) / 50);
      const column = Math.round((e.clientX - rect.left) / 50);
      ship.style.gridRow = row;
      ship.style.gridColumn = column;

      const shipHeight = ship.style.height.slice(0,-2);
      const shipWidth = ship.style.width.slice(0,-2);

      ship.coords = [];

      if (+shipHeight > +shipWidth) {
        let squaresShipTakesUp = +shipHeight / 50;

        for (let i = 0; i < squaresShipTakesUp; i++) {
          ship.coords.push([row+i, column]);
        };
      } else {
        let squaresShipTakesUp = shipWidth / 50;

        for (let i = 0; i < squaresShipTakesUp; i++) {
          ship.coords.push([row, column+i]);
        };
      };

      ship.style.borderColor = 'navy';

      for (let i = 0; i < ship.coords.length; i++) {
        if (ship.coords[i][0] > 10 ||
            ship.coords[i][0] < 1 ||
            ship.coords[i][1] > 10 ||
            ship.coords[i][1] < 1) {
          ship.style.borderColor = 'red';
        }
        else if (grid.ships.has(ship.coords[i].toString())) { ship.style.borderColor = 'red' }
      };

      grid.appendChild(ship);
    };
  });

  function calculateGridSet() {
    const shipsContainer = document.querySelector('.ships');
    const ships = [...grid.children].filter(ship => ship.classList.contains('ship'));
    grid.ships = new Set();

    [...ships].forEach(ship => {
      if (ship.style.borderColor === 'red') {
        ship.coords = [];
        ship.style.borderColor = 'navy';
        shipsContainer.appendChild(ship);
      } else {
        for (let i = 0; i < ship.coords.length; i++) {
          grid.ships.add(ship.coords[i].toString());
        };
      };
    });
  };
  grid.addEventListener('dragend', calculateGridSet);

  submitBtn.addEventListener('click', () => {
    console.log('submit');
  });

  function resetBoard() {
    const shipsContainer = document.querySelector('.ships');
    const ships = [...grid.children].filter(ship => ship.classList.contains('ship'));
    grid.ships = new Set();
    
    [...ships].forEach(ship => {
      const height = ship.style.height.slice(0,-2);
      const width = ship.style.width.slice(0,-2);

      if (+height > +width) {
        ship.style.height = `${width}px`;
        ship.style.width = `${height}px`;
      };

      ship.coords = [];
      shipsContainer.appendChild(ship);
    });    
  };
  resetBtn.addEventListener('click', resetBoard);

  function genCoords(squaresTakenUp) {//generates coords for place-randomly btn
    const row = Math.floor(Math.random() * 11);
    const column = Math.floor(Math.random() * 11);

    const options = {
      up: [],
      right: [],
      down: [],
      left: []
    };

    let selected = null;

    for (let i = 0; i < squaresTakenUp; i++) {
      options.up.push([row-i, column]);
      options.right.push([row, column+i]);
      options.down.push([row+i, column]);
      options.left.push([row, column-i]);
    };

    for (const option in options) {

      for (const coord of options[option]) {
        if (coord[0] > 10 || coord[0] < 1 ||
          coord[1] > 10 || coord[1] < 1) {
          options[option] = [];
        };

        if (grid.ships.has(coord.toString())) {
          options[option] = [];
        };
      };

      if (options[option].length === squaresTakenUp) {
        selected = {[option]: options[option]};
      };
    };

    if (selected) { return selected }
    else { return genCoords(squaresTakenUp) };
  };

  placeRandomlyBtn.addEventListener('click', () => {
    resetBoard();
    const shipsContainer = document.querySelector('.ships');
    const square = document.querySelector('.square');
    const squareWidth = getComputedStyle(square).getPropertyValue('--SQUARE_WIDTH').slice(0,-2);

    [...shipsContainer.children].forEach(ship => {
      const squaresTakenUp = ship.style.width.slice(0,-2) / squareWidth;
      const coords = genCoords(squaresTakenUp);
      const direction = Object.keys(coords)[0];

      ship.coords = coords[direction];

      if (direction === 'down' || direction === 'right') {
        ship.style.gridRow = coords[direction][0][0];
        ship.style.gridColumn = coords[direction][0][1];
      } else {
        ship.style.gridRow = coords[direction][squaresTakenUp-1][0];
        ship.style.gridColumn = coords[direction][squaresTakenUp-1][1];
      };

      const height = ship.style.height.slice(0,-2);
      const width = ship.style.width.slice(0,-2);

      if (direction === 'up' || direction === 'down') {
        ship.style.width = `${height}px`;
        ship.style.height = `${width}px`;
      };

      grid.appendChild(ship);

      for (let i = 0; i < coords[direction].length; i++) {
        grid.ships.add(coords[direction][i].toString());
      };

    });
  });
};

export { setupBoardPhase };
