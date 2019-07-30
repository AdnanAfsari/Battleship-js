import AllShips from './Data'


const Ship = (name) => {

  const {size} = AllShips[name];

  let countHit = 0;
  const hit = () => ++countHit;

  const isSunk = () => countHit === size;

  return {name, size, countHit, hit, isSunk};
};

export default Ship;
