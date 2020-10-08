var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice() {
    const choices = ['r', 'p', 's'];
    randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter == "r") return "Stone";
    if (letter == "p") return "Paper";
    return "Scissor";
}

const smallUserWord = "you".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sub();

function win(userChoice, compChoice) {
    const userChoice_div = document.getElementById(userChoice);

    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `You won! ${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compChoice)}${smallCompWord}`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}
function loose(userChoice, compChoice) {
    const userChoice_div = document.getElementById(userChoice);

    compScore++;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `You lost. ${convertToWord(compChoice)}${smallCompWord} beats ${convertToWord(userChoice)}${smallUserWord}`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow') , 300);
}
function draw(userChoice) {
    const userChoice_div = document.getElementById(userChoice);
    
    result_div.innerHTML = "It's a draw.";
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow') , 300);
}

function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "sp":
        case "rs":
        case "pr":
            win(userChoice, compChoice);
            break;
        case "ps":
        case "sr":
        case "rp":
            loose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}
main();