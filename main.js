const phraseArray = ["A CHIP ON YOUR SHOULDER",
    "A DIME A DOZEN",
    "PIECE OF CAKE",
    "BACK TO SQUARE ONE",
    "BEAT AROUND THE BUSH",
    "CLOSE BUT NO CIGAR",
    "DRAWING A BLANK",
    "DROPPING LIKE FLIES",
    "EASY AS PIE",
    "FISH OUT OF WATER",
    "GO FOR BROKE",
    "HAPPY AS A CLAM",
    "HEAD OVER HEELS",
    "HIT THE NAIL ON THE HEAD",
    "HOLD YOUR HORSES",
    "JUMP THE GUN",
    "KEEP YOUR EYES PEELED",
    "KNOCK YOUR SOCKS OFF",
    "LET THE CAT OUT OF THE BAG",
    "LONG IN THE TOOTH",
    "LOVE BIRDS",
    "MAN OF FEW WORDS",
    "NECK AND NECK",
    "NEEDLE IN A HAYSTACK",
    "NO BRAINER",
    "NO QUESTIONS ASKED",
    "ON CLOUD NINE",
    "ON THE ROPES",
    "OUT OF LEFT FIELD",
    "PAR FOR THE COURSE",
    "PHOTO FINISH",
    "PLAYING POSSUM",
    "POT CALLING THE KETTLE BLACK",
    "PUT A SOCK IN IT",
    "RAIN ON YOUR PARADE",
    "RAINING CATS AND DOGS",
    "SHORT END OF THE STICK",
    "SHOT IN THE DARK",
    "SITTING DUCK",
    "SON OF A GUN",
    "SPILL THE BEANS",
    "STICK A FORK IN IT",
    "THE PLOT THICKENS",
    "THROW IN THE TOWEL",
    "TOUGH IT OUT",
    "UGLY DUCKLING",
    "UNDER THE WEATHER",
    "UNDER YOUR NOSE",
    "UP IN ARMS",
    "WAKE UP CALL",
    "WILD GOOSE CHASE"];

const phrase = document.querySelector('.phrase');
const solution = document.querySelector('.solution');
let gamePhrase = '';

const input = document.querySelector('.input');

const roundScore = document.querySelector('.round-score');
const roundScoreboard = document.querySelector('.round-scoreboard');
const totalScore = document.querySelector('.total-score');
const totalScoreboard = document.querySelector('.total-scoreboard');
const finalScore = document.querySelector('.final-score');
const answer = document.querySelector('.answer');

const startButton = document.querySelector('.start-game');
const nextButton = document.querySelector('.next-round');
const roundOver = document.querySelector('.round-over');
const gameOver = document.querySelector('.game-over');
const playAgain = document.querySelector('.play-again');

const welcomePage = document.querySelector('.welcome-page');
const gamePage = document.querySelector('.game-page');
const finalPage = document.querySelector('.final-page');

const introMusic = document.querySelector('.intro');
const buzzer = document.querySelector('.buzzer');
const winner = document.querySelector('.winner');
const timeClock = document.querySelector('.timeclock');
const tornadoImg = document.querySelector('.tornado');

let roundCount = 0;

startButton.addEventListener('click', function () {
    welcomePage.style.display = 'none';
    gamePage.style.display = 'block';
    nextButton.style.display = 'none';
    roundOver.style.display = 'none';
    gameOver.style.display = 'none';
    totalScoreboard.style.display = 'block';
    roundScoreboard.style.display = 'block';
    roundCount += 1;
    createSpans();
    gameOn();
});

nextButton.addEventListener('click', function () {
    if (roundCount < 3) {
        while (phrase.hasChildNodes()) {
            phrase.removeChild(phrase.firstChild);
        }
        nextRound();
    }
});

roundOver.addEventListener('click', function () {
    if (roundCount < 3) {
        while (phrase.hasChildNodes()) {
            phrase.removeChild(phrase.firstChild);
        }
        nextRound();
    }
});

gameOver.addEventListener('click', function () {
    gamePage.style.display = 'none';
    finalPage.style.display = 'block';
    totalScoreboard.style.display = 'none';
    roundScoreboard.style.display = 'none';
    finalScore.innerHTML = totalScore.innerHTML;
});

playAgain.addEventListener('click', function () {
    window.location.reload();
});

function tornado() {
    tornadoImg.style.left = `1100px`;
}

function createSpans() {
    initialPhrase = phraseArray.splice([Math.floor(Math.random() * phraseArray.length)], 1);
    gamePhrase = initialPhrase[0];
    for (let i = 0; i < gamePhrase.length; i++) {
        newSpan = document.createElement('span');
        phrase.appendChild(newSpan);
        newSpan.innerText = gamePhrase[i];
        newSpan.classList.add(`L${i}`);
    }
};

function changeLetters() {
    let letter = document.querySelector(`.L${Math.floor(Math.random() * gamePhrase.length)}`);
    if (!letter.classList.contains('letter'));
    letter.classList.add('letter');
    timeClock.play();
};

function nextRound() {
    nextButton.style.display = 'none';
    roundOver.style.display = 'none';
    roundScore.innerHTML = 1000;
    roundCount += 1;
    answer.style.display = 'block';
    solution.innerHTML = '';
    input.focus();
    createSpans();
    gameOn();
};

function endRound() {
    clearInterval(countdownInterval);
    clearInterval(letterInterval);
    clearInterval(tornadoInterval);
    input.value = '';
    increaseTotalScore();
    phrase.style.display = 'none';
    solution.innerHTML = `${gamePhrase}`
    timeClock.pause();
    answer.style.display = 'none';
    tornadoImg.style.left = '280px';
};

function scoreCountdown() {
    if (roundScore.innerHTML > 0) {
        roundScore.innerHTML -= 1;
    } else if (roundCount < 3) {
        endRound();
        buzzer.play();
        roundOver.style.display = '';
    } else {
        endRound();
        buzzer.play();
        gameOver.style.display = '';
    }
};

function increaseTotalScore() {
    totalScore.innerHTML -= -roundScore.innerHTML;
};

function gameOn() {
    phrase.style.display = '';
    letterInterval = setInterval(changeLetters, 100);
    countdownInterval = setInterval(scoreCountdown, 20);
    tornadoInterval = setInterval(tornado, 1);
}

input.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13 && input.value.toUpperCase() === gamePhrase) {
        if (roundCount < 3) {
            endRound();
            winner.play();
            nextButton.style.display = '';
        } else {
            endRound();
            winner.play();
            gameOver.style.display = '';
        }
    }
});