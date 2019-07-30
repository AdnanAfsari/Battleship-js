import {Gameboard} from "./Gameboard";

let name, data, botBoard = Gameboard(), myBotBoard = botBoard.randomPlacement();

function renderBot() {
  const bot = document.querySelector('.bot');
  for (var i = 0; i < 100; i++) {
    bot.insertAdjacentHTML('beforeend', `<button class="bot-box" data-index="${i}"></button>`);
    if (i % 10 === 9){
      bot.insertAdjacentHTML('beforeend', '<br>');
    }
  }
  for (let i = 0; i < 100; i++) {
    if (typeof myBotBoard[i] === 'string'){
      name = myBotBoard[i];
      data = document.querySelector(`.bot [data-index='${i}']`);
      data.classList.add(`${name}`);
    }
  }
}

export {renderBot, botBoard, myBotBoard};
