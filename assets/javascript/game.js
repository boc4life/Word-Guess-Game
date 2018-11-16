var words = [ 
    {
        display: "Joel Embiid",
        gameWord: "embiid",
        gameImage: "assets/images/embiid.jpg"
    }, 
    {
        display: "Ben Simmons",
        gameWord: "simmons",
        gameImage: "assets/images/simmons.jpg"
    },
    {   
        display: "Rhys Hoskins",
        gameWord: "hoskins",
        gameImage: "assets/images/hoskins.jpg"
    },
    {
        display: "Carson Wentz",
        gameWord: "wentz",
        gameImage: "assets/images/wentz.jpg"
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
            console.log(remainingLetters);
            if (remainingLetters === 0) {
                alert("You won!");
                document.getElementById("answerDisplay").innerHTML = chosenWord.display;
                winnerImage(chosenWord.gameImage);
                wins++;
                document.getElementById("wins").innerHTML = wins;
                startGame();
            }
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
            }
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
