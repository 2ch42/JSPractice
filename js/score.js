let scoreboard = document.querySelector("#score");

let scoreLeft = 0;
let scoreRight = 0;

function setScore() {
    scoreboard.innerText = (scoreLeft + " : " + scoreRight);
}

setInterval(setScore, 10);

setScore();