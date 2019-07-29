import {Gameboard}      from "../js/Gameboard";
​
describe('Gameboard', function () {
  let gameBoard = Gameboard();
  let newBoard = gameBoard.randomPlacement();
  test('place ships on board', function () {
    let count = 0;
    for (let i = 0; i < 100; i++){
      if(typeof(newBoard[i]) === 'string'){
        ++count;
      }
    }
    expect(count).toBe(15);
  });
​
  test('hit/miss ship', function () {
    let attack = gameBoard.receiveAttack(newBoard,1);
    if (newBoard[1] === 0){
      expect(attack).toBe(1)
    }
    if(typeof (newBoard[1]) === 'string'){
      expect(attack).toBe(6)
    }
  });
});
