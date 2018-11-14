let words = ["embiid", "simmons", "hoskins", "wentz"];

let word = words[Math.floor(Math.random() * words.length)];
let remainingLetters = word.length

let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
let wrongGuess = [];

document.getElementById("wordboard").innerHTML = answerArray.join(" ");

document.addEventListener('keypress', function(event) {
    let guess = event.key;
    for (let b = 0; b < word.length; b++) {
        if (word[b] == guess) {
            answerArray[b] = guess;
            remainingLetters--;
            document.getElementById("wordboard").innerHTML = answerArray.join(" ");
        }
        
    }
})



console.log(word)
console.log(answerArray)
console.log(word[1])