
options = ["Rock", "Paper", "Scissors"];
let score = 0;

my_move = document.getElementById("my-choice");
computer_move = document.getElementById("computer-choice");
result_statement = document.getElementById("result-statement");

function clear_game_screen() {
    screen = document.getElementById("middle-section");
    screen.style.display = "none";
    document.getElementById("while-game-play").style.display = "flex";
}

function random() {
    com_choice = Math.floor(Math.random() * 3) + 0;
}

function rock() {
    clear_game_screen()
    my_move.src = "rock.svg";
    remove_class();
    my_move.classList.add("rock-choice");
    random()
    if (options[com_choice] == "Rock") {
        result_statement.innerHTML = "DRAW"
        computer_move.classList.add("rock-choice");
        computer_move.src = "rock.svg"
    }
    else if (options[com_choice] == "Paper") {
        score -= 1;
        result_statement.innerHTML = "YOU LOSE"
        computer_move.classList.add("paper-choice");
        computer_move.src = "paper.svg"
    }
    else if (options[com_choice] == "Scissors") {
        score += 1;
        result_statement.innerHTML = "YOU WIN"
        computer_move.classList.add("scissors-choice");
        computer_move.src = "scissors.svg";
    }
    display_score();
}
function paper() {
    clear_game_screen();
    my_move.src = "paper.svg";
    remove_class()
    my_move.classList.add("paper-choice");
    random()
    if (options[com_choice] == "Rock") {
        score += 1;
        result_statement.innerHTML = "YOU WIN"
        computer_move.classList.add("rock-choice");
        computer_move.src = "rock.svg";
    }
    else if (options[com_choice] == "Paper") {
        result_statement.innerHTML = "DRAW"
        computer_move.classList.add("paper-choice");
        computer_move.src = "paper.svg";
    }

    else if (options[com_choice] == "Scissors") {
        score -= 1;
        result_statement.innerHTML = "YOU LOSE"
        computer_move.classList.add("scissors-choice");
        computer_move.src = "scissors.svg";
    }
    display_score();
}
function scissors() {
    clear_game_screen()
    my_move.src = "scissors.svg";
    remove_class();
    my_move.classList.add("scissors-choice");
    random();
    if (options[com_choice] == "Rock") {
        score -= 1;
        result_statement.innerHTML = "YOU LOSE"
        computer_move.classList.add("rock-choice");
        computer_move.src = "rock.svg";

    }
    else if (options[com_choice] == "Paper") {
        score += 1;
        result_statement.innerHTML = "YOU WIN"
        computer_move.classList.add("paper-choice");
        computer_move.src = "paper.svg";

    }

    else if (options[com_choice] == "Scissors") {
        result_statement.innerHTML = "DRAW";
        computer_move.classList.add("scissors-choice");
        computer_move.src = "scissors.svg";

    }
    display_score();
}

function display_score() {
    document.getElementById("score-number").innerHTML = score;
}

function playAgain() {
    screen.style.display = "block";
    document.getElementById("while-game-play").style.display = "none";
}

function remove_class() {
    my_move.classList.remove("rock-choice");
    my_move.classList.remove("paper-choice");
    my_move.classList.remove("scissors-choice");
    computer_move.classList.remove("rock-choice");
    computer_move.classList.remove("paper-choice");
    computer_move.classList.remove("scissors-choice");
}
// to open and close rules section

function displayRules() {
    rules_image = document.getElementById("rules-image");
    document.getElementById("main").style.display = "none";
    rules_image.style.display = "flex";
    document.body.style.backgroundImage = "none";
    original_height = document.body.style.height;
    document.body.style.height = "100dvh";

}

function closerules() {
    document.body.style.backgroundImage = "linear-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))";
    document.getElementById("main").style.display = "block";
    rules_image.style.display = "none";
    document.body.style.height = original_height;
}

