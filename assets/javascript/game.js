var words = [ 
    {
        display: "Joel Embiid - Philadelphia 76ers",
        gameWord: "embiid",
        gameImage: "assets/images/embiid.jpg"
    }, 
    {
        display: "Ben Simmons - Philadelphia 76ers",
        gameWord: "simmons",
        gameImage: "assets/images/simmons.jpg"
    },
    {   
        display: "Rhys Hoskins - Philadelphia Phillies",
        gameWord: "hoskins",
        gameImage: "assets/images/hoskins.jpg"
    },
    {
        display: "Carson Wentz - Philadelphia Eagles",
        gameWord: "wentz",
        gameImage: "assets/images/wentz.jpg"
    },
    {
        display: "Robert Covington - forever a Philadelphia 76er",
        gameWord: "covington",
        gameImage: "assets/images/covington.jpg"
    },
    {
        display: "Claude Giroux - Philadelphia Flyers",
        gameWord: "giroux",
        gameImage: "assets/images/giroux.jpg"
    },    
    {
        display: "Nelson Agholor - Philadelphia Eagles",
        gameWord: "agholor",
        gameImage: "assets/images/agholor.jpg"
    },
    {
        display: "JP Crawford - Philadelphia Phillies",
        gameWord: "crawford",
        gameImage: "assets/images/crawford.jpg"
    },
    {
        display: "Carpe - Philadelphia Fusion",
        gameWord: "carpe",
        gameImage: "assets/images/carpe.jpg"
    }
];

var chosenWord;
var word;
var remainingLetters;
var remainingGuesses;
var answerArray;
var wrongGuess;

let wins = 0;

document.getElementById("wins").innerHTML = wins;

startGame();

document.addEventListener('keydown', function(event) {
    let guess = event.key;
    for (let b = 0; b < word.length; b++) {
        if (word[b] === guess) {
            if (guess !== answerArray[b]) {
                remainingLetters--;
            }
            answerArray[b] = guess;
            document.getElementById("wordBoard").innerHTML = answerArray.join(" ");
            
        }
}
        if (wrongGuess.includes(event.key)) {
            alert("Already guessed that letter!");    
        }
        else if (answerArray.includes(guess)) {
        }
        else {
            wrongGuess.push(guess);
            remainingGuesses--;
            document.getElementById("wrong").innerHTML = wrongGuess.join(" ").toUpperCase();
            document.getElementById("guessesLeft").innerHTML = remainingGuesses;
            if (remainingGuesses === 0) {
                alert("You lost! The correct answer was " + word);
                startGame();
                document.getElementById("wrong").innerHTML = wrongGuess;
            }
        }
        if (remainingLetters === 0) {
            alert("You won!");
            document.getElementById("answerDisplay").innerHTML = chosenWord.display;
            winnerImage(chosenWord.gameImage);
            wins++;
            document.getElementById("wins").innerHTML = wins;
            startGame();
            document.getElementById("wrong").innerHTML = wrongGuess;
        }
})

function startGame() {    
    chosenWord = words[Math.floor(Math.random() * words.length)];
    word = chosenWord.gameWord;
    remainingLetters = word.length;
    remainingGuesses = 6;
    answerArray = [];
        for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
}
    wrongGuess = [];

    document.getElementById("wordBoard").innerHTML = answerArray.join(" ");
    document.getElementById("guessesLeft").innerHTML = remainingGuesses;
}

function winnerImage(imgName) {
    image = document.getElementById("gamepic");
    image.src = imgName;
}
