let allShips = {
  regant: {size: 1},
  galaxy: {size: 2},
  summit: {size: 3},
  edge: {size: 4},
  oasis: {size: 5},
};

const Ship = (name) => {

  const {size} = allShips[name];

  let countHit = 0;
  const hit = () => ++countHit;

  const isSunk = () => countHit === size;

  return {name, size, countHit, hit, isSunk};
};

export {allShips, Ship};
