import {renderPlayer}                    from "./js/renderPlayer";
import {renderBot, myBotBoard, botBoard} from "./js/renderBot";
import {Gameboard}                       from "./js/Gameboard";
import {declareWinner}                   from "./js/declareWinner";

renderPlayer();
renderBot();

let playerWin, botWin;

function Turn() {

  let playerIndex, playerBoard = Gameboard(), myBoard = playerBoard.randomPlacement();
  const player = document.querySelector('.player');
  const bot = document.querySelector('.bot');

  player.addEventListener('click', function (e) {
    if (e.target.dataset.index){
      playerIndex = e.target.dataset.index;
      let res = playerBoard.receiveAttack(myBoard, playerIndex);
      if (res === 1){
        e.target.classList.add('miss');
      } else if (res === 6){
        e.target.classList.add('hit');
        playerWin = playerBoard.allSunk(myBoard);

        if (playerWin){
          window.setTimeout(
            () => {
              declareWinner("Game over. You won!!!");
            }, 1000
          )
        }
        return;
      } else {
        return;
      }


      let botIndex = Math.floor(Math.random() * 100);
      let clicked = bot.querySelector(`[data-index='${botIndex}']`);
      let botres;
      window.setTimeout(() =>{
        for (let i = 0; i < 100; i++) {
          botres = botBoard.receiveAttack(myBotBoard, botIndex);
          if (botres === 1){
            clicked.classList.add('miss');
            break;
          } else if (botres === 6){
            clicked.classList.add('hit');
            botWin = botBoard.allSunk(myBotBoard);
            if (botWin){
              window.setTimeout(
                () => {
                  declareWinner("Game over. Bot won!!!");
                }, 1000
              )
            }
          } else {
            ++botIndex;
            clicked = bot.querySelector(`[data-index='${botIndex}']`);
          }
        }

      }
        , 1000
      )


    }
  })
}

Turn();
