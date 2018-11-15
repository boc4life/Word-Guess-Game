let words = [ 
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

function winnerImage(imgName) {
    image = document.getElementById("gamepic");
    image.src = imgName;
}

let chosenWord = words[Math.floor(Math.random() * words.length)];
let word = chosenWord.gameWord;
let remainingLetters = word.length
let remainingGuesses = 6;

let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
let wrongGuess = [];

document.getElementById("wordBoard").innerHTML = answerArray.join(" ");
document.getElementById("guessesLeft").innerHTML = remainingGuesses;

document.addEventListener('keypress', function(event) {
    let guess = event.key;
    for (let b = 0; b < word.length; b++) {
        if (word[b] === guess) {
            answerArray[b] = guess;
            remainingLetters--;
            document.getElementById("wordBoard").innerHTML = answerArray.join(" ");
            if (remainingLetters === 0) {
                alert("You won!");
                document.getElementById("answerDisplay").innerHTML = chosenWord.display;
                winnerImage(chosenWord.gameImage);
            }
        }
}
        if (wrongGuess.includes(event.key)) {
            alert("Already Guessed!");    
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
            }
        }
})