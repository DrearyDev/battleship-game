
import { gameboard } from '../src/gameboard.js';

test('Gameboard placeShip method', () => {
    const board = gameboard();
    board.placeShip([[0,0],[0,1],[0,2]]);

    expect(board.allShipsSunk()).toBe(false);
});

test('Gameboard placeRandomShips method', () => {
    const board = gameboard();
    board.placeRandomShips();
    expect(board.shipCords).not.toStrictEqual([]);
})

test('Gameboard shipCords set', () => {
    const board = gameboard();
    board.placeShip([[0,0]]);

    for (const entry of board.shipCords) {
        expect(entry).toStrictEqual("0,0");
    };
});

test('Gameboard recieveAttack method', () => {
    expect(gameboard().recieveAttack(0,0)).toBe(false);

    const board = gameboard();
    board.placeShip([[0,0],[0,1],[0,2]]);

    expect(board.recieveAttack(0,0)).toBe(true);
    expect(board.recieveAttack(0,1)).toBe(true);
    expect(board.recieveAttack(0,2)).toBe(true);

    expect(board.recieveAttack(0,3)).toBe(false);
});

test('Gameboard misses array', () => {
    expect(gameboard().misses).toStrictEqual([]);

    const board = gameboard();
    board.recieveAttack(0,0);

    expect(board.misses).toStrictEqual([[0,0]]);

    board.recieveAttack(0,1);

    expect(board.misses).toStrictEqual([[0,0],[0,1]]);
});

test('Gameboard allShipsSunk method', () => {
    expect(gameboard().allShipsSunk()).toBe(true);

    const board = gameboard();
    board.placeShip([[0,0],[0,1]]);

    expect(board.allShipsSunk()).toBe(false);

    board.recieveAttack(0,0);
    board.recieveAttack(0,1);

    expect(board.allShipsSunk()).toBe(true);
});

test('Gameboard recieveRandomAttack method', () => {
    //will always miss since no ships placed
    const board = gameboard();

    expect(board.misses.length).toBe(0);

    board.recieveRandomAttack();

    expect(board.misses.length).toBe(1);
});
