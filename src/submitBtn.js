
function getSubmitedCoords() {
  const grid = document.querySelector('.grid');
  const placedShips = [...grid.children].filter(ship => ship.classList.contains('ship'));
  const allCoords = [];

  if (placedShips.length === 10) {
    placedShips.forEach(ship => {
      allCoords.push(ship.coords);
    });

    console.log(allCoords);
    return allCoords;
  };
};

export { getSubmitedCoords };
