import {Ship} from "../js/Ship";

describe('edge Ship for hit and sunk', function () {

  let myShip = Ship('edge');
  test('name', () => {
    expect(myShip.name).toBe('edge');
  });

  test('length', () => {
    expect(myShip.size).toBe(4);
  });

  test('hits', () => {
    expect(myShip.hit()).toBe(1);
    expect(myShip.hit()).toBe(2);
    expect(myShip.hit()).toBe(3);
  });

  test('not sunked yet', () => {
    expect(myShip.isSunk()).toBeFalsy();
  });

  test('final hit', () => {
    expect(myShip.hit()).toBe(myShip.size);
  });

  test('sunked', () => {
    expect(myShip.isSunk()).toBeTruthy();
  });
});
