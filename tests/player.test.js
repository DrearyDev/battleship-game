
import { player } from '../src/player.js';

test('Player has working board', () => {
    const playerOne = player();

    expect(playerOne.playerBoard.misses).toStrictEqual([]);

    playerOne.playerBoard.recieveAttack(0,0);

    expect(playerOne.playerBoard.misses).toStrictEqual([[0,0]]);

    playerOne.playerBoard.placeShip([[0,1]]);

    expect(playerOne.playerBoard.recieveAttack(0,1)).toStrictEqual(true);
});