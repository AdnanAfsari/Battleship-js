const declareWinner = (who) => {
  document.querySelector("#winner-pop").style.display = "block";
  document.querySelector("#winner-pop .text").innerText = who;
}


export {declareWinner};
