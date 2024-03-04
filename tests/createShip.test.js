
import { createShip } from '../src/createShip.js';

// createShip(length)

test('Ship length method', () => {
    expect(createShip(3).length()).toBe(3);
    expect(createShip(4).length()).toBe(4);
});

test('Ship hit method', () => {
    expect(createShip(3).hit()).toBe(1);
    expect(createShip(4).hit()).toBe(1);

    const ship = createShip(4);

    expect(ship.hit()).toBe(1);
    expect(ship.hit()).toBe(2);
});

test('Ship isSunk method', () => {
    expect(createShip(5).isSunk()).toBe(false);
    expect(createShip(3).isSunk()).toBe(false);

    const ship = createShip(2);

    expect(ship.isSunk()).toBe(false);

    ship.hit();
    ship.hit();

    expect(ship.isSunk()).toBe(true);
});
