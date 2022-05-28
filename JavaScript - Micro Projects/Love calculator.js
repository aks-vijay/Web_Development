// prompt the user
alert("Welcome to Love Calculator");
var yourName = prompt("What is your name?");
var yourLoversName = prompt("What is their name?");

// calculate the score
function calcScore() {
    var n = Math.random();
    score = n*100;
    score = Math.floor(score)+1;
    return score;
}

// call the function
lovescore = calcScore();

// return the score to the user 
if (lovescore > 70) {
    alert("You both have a great love score of " + 
          lovescore + "%");
}
if (lovescore > 40 && lovescore <= 70) {
    alert("You both have a love score of " + 
          lovescore + "%";
}
if (lovescore <=30 ) {
    alert("I'm sorry, you both have a very love score of only " + lovescore + "%");
}
