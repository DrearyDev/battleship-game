
import { createShip } from "./createShip.js";

/*--------------------------------------------

board = [
    0 in board => empty spot
    x in board => recieved attack but was miss
    {} in board => is the ship
];

misses = [
    - Array of spots that recieved attack but didnt hit a ship
    - in order of attempts
];

--------------------------------------------*/

function gameboard() {
    const misses = [];
    const board = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ];

    const placeShip = (coords) => {
        const ship = createShip(coords.length);

        for (let coord of coords) {
            board[coord[0]][coord[1]] = ship;
        };
    };

    const recieveAttack = (x,y) => {
        if (board[x][y] === 0 || board[x][y] === 'x') {
            misses.push([x,y]);
            return false;
        };

        board[x][y].hit();
        return true;
    };

    const allShipsSunk = () => {
        for (let row of board) {
            for (let i of row) {
                if (i.constructor === Object && i.isSunk() === false) { return false };
            };
        };

        return true;
    };

    return { placeShip, recieveAttack, allShipsSunk, misses };
};

export { gameboard };