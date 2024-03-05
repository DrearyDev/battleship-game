import { gameboard } from "./gameboard.js";

function player() {
    const playerBoard = gameboard();

    return { playerBoard };
};

export { player };