//caching the DOM
let userScore = 0;
let botScore = 0;
const userScore_dom = document.getElementById("user-score");
const botScore_dom = document.getElementById("bot-score");
const scoreBoard_dom = document.querySelector(".score-board");
const result_dom = document.querySelector(".result > p");
const rock_dom = document.getElementById("r");
const paper_dom = document.getElementById("p");
const scissors_dom = document.getElementById("s");
const reset_dom = document.getElementById("resetBtn");


//function to compare user and bot choice
function game(userChoice) {
    const botChoice = getbotChoice();
    switch (userChoice + botChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, botChoice);
            break;

        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, botChoice);
            break;

        case "rr":
        case "ss":
        case "pp":
            draw(userChoice);
            break;

    }
}

//to get random bot choice using Math
function getbotChoice() {
    const choices = ['r', 'p', 's'];
    const ran = Math.floor(Math.random() * 3);
    return choices[ran];
}

//updating scoreBoard and result when user wins
function win(user, bot) {
    userScore++;
    userScore_dom.innerHTML = userScore;
    botScore_dom.innerHTML = botScore;
    const smallUser = "user".fontsize(3).sub(); //subscripting name 
    const smallBot = "bot".fontsize(3).sub();
    result_dom.innerHTML = change(user) + smallUser + " beats " + change(bot) + smallBot + " . You win! ";
    document.getElementById(user).classList.add('greenglow');
    setTimeout(function () {
        document.getElementById(user).classList.remove('greenglow')
    }, 1000);

}

//updating scoreBoard and result when bot wins
function lose(user, bot) {
    botScore++;
    botScore_dom.innerHTML = botScore;
    userScore_dom.innerHTML = userScore;
    const smallUser = "user".fontsize(3).sub();
    const smallBot = "bot".fontsize(3).sub();
    result_dom.innerHTML = change(bot) + smallBot + " beats " + change(user) + smallUser + " . You lose! ";
    document.getElementById(user).classList.add('redglow');
    setTimeout(function () {
        document.getElementById(user).classList.remove('redglow')
    }, 1000);

}

//in case of draw, no score updation
function draw(user) {
    result_dom.innerHTML = "Draw!";

    document.getElementById(user).classList.add('grayglow');
    setTimeout(function () {
        document.getElementById(user).classList.remove('grayglow')
    }, 1000);

}

//changing choice into words for result message
function change(input) {
    if (input == 'r') return "Rock";
    if (input == 'p') return "Paper";
    if (input == 's') return "Scissors";

}

//function for when user clicks 
function main() {

    rock_dom.addEventListener("click", function () {
        game("r");
    })

    paper_dom.addEventListener("click", function () {
        game("p");
    })

    scissors_dom.addEventListener("click", function () {
        game("s");
    })

}

main();

//reset button sets score to zero
function reset(){
    userScore=0;
    botScore=0;
    userScore_dom.innerHTML='0';
    botScore_dom.innerHTML='0';
    result_dom.innerHTML='----';
}

resetBtn.addEventListener("click", function() {
    reset();
});

