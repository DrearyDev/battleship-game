
function getSubmitedCoords() {
  const grid = document.querySelector('.grid');
  const placedShips = [...grid.children].filter(ship => ship.classList.contains('ship'));
  const allCoords = [];

  if (placedShips.length === 10) {
    placedShips.forEach(ship => {
      allCoords.push(ship.coords);
    });

    return allCoords;
  };
};

function submitCoords(player) {
  const submitedCoords = getSubmitedCoords();

  if (submitedCoords) {
    for (let i = 0; i < submitedCoords.length; i++) {
      submitedCoords[i] = submitedCoords[i].map(coord => [coord[0]-1, coord[1]-1]);
      player.playerBoard.placeShip(submitedCoords[i]);
    };
    return true;
  } else {
    console.log('not all ships placed validly');
    return false;
  };
};

export { submitCoords };
