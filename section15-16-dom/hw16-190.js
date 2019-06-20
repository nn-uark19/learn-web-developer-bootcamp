console.log('Begin js');

p1Display = document.querySelector('#p1Display');
p2Display = document.querySelector('#p2Display');
p1Button = document.querySelector('#p1Button');
p2Button = document.querySelector('#p2Button');
resetButton = document.querySelector('#reset');
numWinInput = document.querySelector('#numWinInput');
numWinDisplay = document.querySelector('#numWinDisplay');

p1Score = 0;
p2Score = 0;
winningScore = 5;
isGameOver = false;

function gameOver(winPlayer) {
  winPlayer.classList.add('winningCond');
  isGameOver = true;
  document.querySelector('#gameOverPara').textContent = 'Game over. Click Reset!';
};

p1Button.addEventListener('click', function () {
  if (!isGameOver) {
    p1Score++;
    p1Display.textContent = p1Score;
    if (p1Score === winningScore) {
      gameOver(p1Display);
    }
  }
});

p2Button.addEventListener('click', function () {
  if (!isGameOver) {
    p2Score++;
    console.log(p2Score);
    p2Display.textContent = p2Score;
    if (p1Score === winningScore || p2Score === winningScore) {
      gameOver(p2Display);
    }
  }
});

resetButton.addEventListener('click', function () {
  reset();
});

function reset() {
  p1Score = 0;
  p2Score = 0;
  isGameOver = false;
  p1Display.textContent = '0';
  p2Display.textContent = '0';
  p1Display.classList.remove('winningCond');
  p2Display.classList.remove('winningCond');
  document.querySelector('#gameOverPara').textContent = '';
}

numWinInput.addEventListener('change', function() {
  winningScore = Number(this.value);
  numWinDisplay.textContent = this.value;
  reset();
})

console.log('End js');