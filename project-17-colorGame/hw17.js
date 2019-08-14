console.log('Begin Js');

// get information from html
var mode = document.querySelectorAll('.mode');
var squares = document.querySelectorAll('.square');
var colorResultDisplay = document.querySelector('#colorResultDisplay');
var resultDisplay = document.querySelector('#resultDisplay');
var beginSection = document.querySelector('#beginSection');
var resetBtn = document.querySelector('#resetBtn');

// variables from js file
var numSquare = 6,
  colors = [],
  colorResult;

// constant
var EASYNUM = 3,
  HARDNUM = 6,
  BACKGROUND = '#232323';

// main code
init();

// =================== functions ====================
function init() {
  console.log('function init');
  initLv();
  makeSquares();
  pickAnswer();
  initSquares();
  initResetBtn();
}

// click event for Reset Button
function initResetBtn() {
  console.log('function initResetBtn');
  resetBtn.addEventListener('click', function () {
    reset();
  })
}

// click event for squares
function initSquares() {
  console.log('function initSquares');
  for (i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function () {
      var colorChosen = this.style.background;
      if (colorChosen === colorResult) {
        // if pick correct, 1.inform 2.change color all square 3. color of header
        rightAnswer();
      } else {
        // if pick wrong, 1. inform 2. fade out
        resultDisplay.textContent = 'Incorrect!';
        this.style.background = BACKGROUND;
        // wrongAnswer(i);
      }
    })
  }
}

// pick right
function rightAnswer() {
  console.log('function rightAnswer');
  // inform 
  resultDisplay.textContent = 'Correct!';
  // 2.change color all square
  for (i = 0; i < numSquare; i++) {
    squares[i].style.background = colorResult;
  }
  // 3. color of header
  beginSection.style.background = colorResult;
  // change the Reset button
  resetBtn.textContent = 'Try Again?';
}

// pick the answer from color array. update the title
function pickAnswer() {
  console.log('function pickAnswer');
  colorResult = colors[Math.floor(Math.random() * numSquare)];
  colorResultDisplay.textContent = colorResult;
}

// make square
function makeSquares() {
  console.log('function makeSquares');
  colors = [];
  for (i = 0; i < numSquare; i++) {
    // make random color
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    colors.push(`rgb(${r}, ${g}, ${b})`)
    // asign to the the square
    squares[i].style.background = colors[i];
  }
  // for other square, make it looks like background
  for (i = numSquare; i < HARDNUM; i++) {
    squares[i].style.background = BACKGROUND;
  }
}

// click event for mode
function initLv() {
  console.log('function initLv');
  for (i = 0; i < mode.length; i++) {
    mode[i].addEventListener('click', function () {
      this.textContent === 'Easy' ? numSquare = EASYNUM : numSquare = HARDNUM;
      mode[0].classList.remove('selected');
      mode[1].classList.remove('selected');
      this.classList.add('selected');
      reset();
    });
  }
}

// reset
function reset() {
  console.log('function reset');
  makeSquares();
  pickAnswer();
  resetBtn.textContent = 'new colors';
  resultDisplay.textContent = '';
  beginSection.style.background = 'steelblue';
}

console.log('End Js');