import {Ship, allShips} from "./Ship";

const Gameboard = () => {
  let board = new Array(100).fill(0);
  const COLUMN = 10;
  const SLOT = {
    EMPTY: 0,
    MISS: 1,
    HIT: 6
  };

  const randomPlacement = () => {

    const direction = () => {
      let hv = ['horizontal', 'vertical'];
      let direction = Math.floor(Math.random() * hv.length);
      return hv[direction];
    };

    const getShipsName = () => {
      let shipName = [];
      for (let ship in allShips) {
        shipName.push(ship);
      }
      return shipName;
    };

    const getShipsSize = () => {
      let shipSize = [];
      for (let ship in allShips) {
        shipSize.push(allShips[ship].size);
      }
      return shipSize;
    };

    const horOverlap = (board, boardNum, size, i) => {
      let sizeCount = 0;
      for (let j = boardNum; j < boardNum + size[i]; j++) {
        if (board[j] === SLOT.EMPTY){
          sizeCount += 1;
        }
      }
      return sizeCount === size[i];
    };

    const verOverlap = (board, boardNum, size, i) => {
      let sizeCount = 0;
      for (let j = boardNum; j < boardNum + size[i] * COLUMN; j += 10) {
        if (board[j] === SLOT.EMPTY){
          sizeCount += 1;
        }
      }
      return sizeCount === size[i];
    };

    const boardNum = () => {
      let name = getShipsName();
      let size = getShipsSize();

      for (let i = 0; i < name.length;) {
        let boardNum = Math.floor(Math.random() * board.length);
        boardNum = boardNum % COLUMN >= size[i] ? boardNum - size[i] : boardNum;

        if (verOverlap(board, boardNum, size, i) && direction() === 'vertical'){
          for (let j = boardNum; j < boardNum + size[i] * COLUMN; j += 10) {
            board[j] = name[i];
          }
          i++;
        } else if (horOverlap(board, boardNum, size, i) && direction() === 'horizontal'){
          for (let j = boardNum; j < boardNum + size[i]; j++) {
            board[j] = name[i];
          }
          i++;
        }
      }
      return board;
    };
    return boardNum();
  };

  const receiveAttack = (board, index) => {
    if (board[index] === 0){
      return board[index] = SLOT.MISS;
    } else if (typeof (board[index]) === 'string'){
      let name = board[index];
      let hitShip = Ship(name);
      hitShip.hit();
      return board[index] = SLOT.HIT;
    } else {
      return false;
    }
  };

  const allSunk = (board) => {
    for (let i = 0; i < board.length; i++) {
      if (typeof (board[i]) === 'string'){
        return false;
      }
    }
    return true;
  };
  return {randomPlacement, receiveAttack, allSunk};
};

export {Gameboard};
