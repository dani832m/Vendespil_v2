'use strict';

var cardsArray = [{
    'name': 'item01',
    'img': 'img/pair1.png'
}, {
    'name': 'item02',
    'img': 'img/pair2.png'
}, {
    'name': 'item03',
    'img': 'img/pair3.png'
}, {
    'name': 'item04',
    'img': 'img/pair4.png'
}, {
    'name': 'item05',
    'img': 'img/pair5.png'
}, {
    'name': 'item06',
    'img': 'img/pair6.png'
}, {
    'name': 'item07',
    'img': 'img/pair7.png'
}, {
    'name': 'item08',
    'img': 'img/pair8.png'
}];

var gameGrid = cardsArray.concat(cardsArray).sort(function () {
  return 0.5 - Math.random();
});

var firstGuess = '';
var secondGuess = '';
var count = 0;
var previousTarget = null;
var delay = 1200;
var pairsFound = 0;

var game = document.getElementById('game');
var grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(function (item) {
  var name = item.name, img = item.img;

  var card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  var front = document.createElement('div');
  front.classList.add('front');

  var back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = 'url(' + img + ')';

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

var match = function match() {
  var selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.add('match');
  });
};

var resetGuesses = function resetGuesses() {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.remove('selected');
  });
};

grid.addEventListener('click', function (event) {
  var clicked = event.target;

  if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
        pairsFound++;
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }

  document.getElementById('pairsFound').innerHTML = pairsFound;

});

// Alt herunder styrer timeren
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
          alert("Tiden er gået! Du fandt " + pairsFound + " par.");
          location.reload();
      }
  }, 1000);
}

window.onload = function () {
  var oneMinute = 60 * 1,
      display = document.querySelector('#time');
  startTimer(oneMinute, display);
};