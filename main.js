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

const gamePhrase = phraseArray[Math.floor(Math.random() * phraseArray.length)];

console.log(gamePhrase);

function createSpans () {
    for (let i = 0; i < gamePhrase.length; i++) {
        newSpan = document.createElement('span');
        phrase.appendChild(newSpan);
        newSpan.innerText = gamePhrase[i];
        newSpan.classList.add(`L${i}`);
    }
}

function changeLetters () {
    let letter = document.querySelector(`.L${Math.floor(Math.random() * gamePhrase.length)}`);
    if (!letter.classList.contains('letter'));
    letter.classList.add('letter');
}

createSpans();

setInterval(changeLetters, 500);

const input = document.querySelector('.input');

document.body.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 13) {
    if (input.value.toUpperCase() === gamePhrase){
        alert('Great Job!');
    }
}
});

