
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

    });
  });

  grid.addEventListener('dragover', (e) => {//grid isnt zero indexed
    e.preventDefault();

    if (e.target === grid) {
      const rect = e.target.getBoundingClientRect();
      const row = Math.round((e.clientY - rect.top) / 50);
      const column = Math.round((e.clientX - rect.left) / 50);
      const ship = document.querySelector('.dragging');
      const squaresShipTakesUp = ship.style.width.slice(0,-2) / 50;
      ship.style.gridRow = row;
      ship.style.gridColumn = column;

      ship.coords = [];

      for (let i = 0; i < squaresShipTakesUp; i++) {
        ship.coords.push([row, column+i]);
      };

      ship.style.borderColor = 'navy';

      for (let i = 0; i < ship.coords.length; i++) {
        if (ship.coords[i][1] > 10 || ship.coords[i][1] < 1) { ship.style.borderColor = 'red' }
        else if (grid.ships.has(ship.coords[i].toString())) { ship.style.borderColor = 'red' }
      };

      grid.appendChild(ship);
    };
  });

  grid.addEventListener('dragend', (e) => {
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
  });

  submitBtn.addEventListener('click', () => {
    console.log('submit');
  });

  resetBtn.addEventListener('click', () => {
    console.log('reset');
    const shipsContainer = document.querySelector('.ships');
    const ships = [...grid.children].filter(ship => ship.classList.contains('ship'));
    grid.ships = new Set();
    
    [...ships].forEach(ship => {
      ship.coords = [];
      shipsContainer.appendChild(ship);
    });
  });

  placeRandomlyBtn.addEventListener('click', () => {
    console.log('randomly place');
  });
};

export { setupBoardPhase };
