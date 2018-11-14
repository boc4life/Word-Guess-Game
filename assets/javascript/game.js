var words = ["Embiid", "Simmons", "Hoskins", "Wentz"];

var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

document.getElementById("wordboard").innerHTML = answerArray;