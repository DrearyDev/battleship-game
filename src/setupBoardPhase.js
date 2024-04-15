
function setupBoardPhase() {
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
        if (+width > +height) {
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
          if (grid.ships.has(ship.coords[i].toString())) { ship.style.borderColor = 'red' }
          else if (ship.coords[i][0] > 10 || ship.coords[i][1] > 10){
            ship.style.borderColor = 'red';
          };
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

      let row = Math.ceil((e.clientY - rect.top) / 50);
      let column = Math.ceil((e.clientX - rect.left) / 50);

      if (row > 10) { row = 10 };
      if (column > 10) { column = 10 };

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
};

export { setupBoardPhase };
