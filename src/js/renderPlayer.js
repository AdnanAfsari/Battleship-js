function renderPlayer() {
  const player = document.querySelector('.player');

  for (var i = 0; i < 100; i++) {
    player.insertAdjacentHTML('beforeend', `<button class="box" data-index="${i}"></button>`);
    if (i % 10 === 9){
      player.insertAdjacentHTML('beforeend', '<br>');
    }
  }
}

export {renderPlayer};
