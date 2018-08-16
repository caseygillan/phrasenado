const phraseArray = ['A Chip on Your Shoulder', 
                    'A Dime a Dozen', 
                    'Piece of Cake', 
                    'Back to Square One', 
                    'Beat Around the Bush', 
                    'Close But No Cigar', 
                    'Drawing a Blank', 
                    'Dropping Like Flies', 
                    'Easy As Pie', 
                    'Fish Out Of Water', 
                    'Go For Broke', 
                    'Happy As a Clam', 
                    'Head Over Heels', 
                    'Hit The Nail On The Head', 
                    'Hold Your Horses', 
                    'Jump The Gun', 
                    'Keep Your Eyes Peeled', 
                    'Knock Your Socks Off', 
                    'Let The Cat Out Of The Bag', 
                    'Long In The Tooth', 
                    'Love Birds', 
                    'Man Of Few Words', 
                    'Neck And Neck', 
                    'Needle In a Haystack', 
                    'No Brainer', 
                    'No Questions Asked', 
                    'On Cloud Nine', 
                    'On The Ropes', 
                    'Out Of Left Field', 
                    'Par For The Course', 
                    'Photo Finish', 
                    'Playing Possum', 
                    'Pot Calling The Kettle Black', 
                    'Put a Sock In It', 
                    'Rain On Your Parade', 
                    'Raining Cats and Dogs', 
                    'Short End Of The Stick', 
                    'Shot In The Dark', 
                    'Sitting Duck', 
                    'Son Of a Gun', 
                    'Spill The Beans', 
                    'Stick a Fork In It', 
                    'The Plot Thickens', 
                    'Throw In The Towel', 
                    'Tough It Out', 
                    'Ugly Duckling', 
                    'Under The Weather', 
                    'Under Your Nose', 
                    'Up In Arms', 
                    'Wake Up Call', 
                    'Wild Goose Chase'
                ];

const phrase = document.querySelector('.phrase');

const gamePhrase = phraseArray[Math.floor(Math.random() * phraseArray.length)];

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
    if (input.value.toUpperCase === gamePhrase){
        alert('Great Job!');
    }
}
});

