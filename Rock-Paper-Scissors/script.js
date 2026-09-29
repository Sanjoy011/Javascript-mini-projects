let userScore = 0;
let computerScore = 0;

// Select elements
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreNumber = document.querySelector("#user-score");
const computerScoreNumber = document.querySelector("#comp-score");

// User chooses a move
choices.forEach((choice) => {
    choice.addEventListener("click", () => {

        // Get the image inside the clicked choice
        const image = choice.querySelector("img");

        // Get user's choice from alt attribute
        const userChoice = image.alt.toLowerCase();

        console.log("User choice:", userChoice);

        playGame(userChoice);
    });
});


// Main game function
const playGame = (userChoice) => {

    // Generate computer choice
    const computerChoice = genComputerChoice();

    console.log("Computer choice:", computerChoice);

    // Draw
    if (userChoice === computerChoice) {
        drawGame();
        return;
    }

    // Check winner
    let userWin = false;

    if (userChoice === "rock") {
        userWin = computerChoice === "scissors";
    } 
    else if (userChoice === "paper") {
        userWin = computerChoice === "rock";
    } 
    else if (userChoice === "scissors") {
        userWin = computerChoice === "paper";
    }

    showWinner(userWin, userChoice, computerChoice);
};


// Show winner
const showWinner = (userWin, userChoice, computerChoice) => {

    if (userWin) {

        // User wins
        userScore++;

        userScoreNumber.innerHTML = userScore;

        msg.innerHTML = `You win! Your ${userChoice} beats ${computerChoice}`;

        msg.style.backgroundColor = "green";

    } else {

        // Computer wins
        computerScore++;

        computerScoreNumber.innerHTML = computerScore;

        msg.innerHTML = `You lost. ${computerChoice} beats your ${userChoice}`;

        msg.style.backgroundColor = "red";
    }
};


// Draw game
const drawGame = () => {

    msg.innerHTML = "Game was Draw. Play again.";

    msg.style.backgroundColor = "black";
};


// Generate computer choice
const genComputerChoice = () => {

    const options = ["rock", "paper", "scissors"];

    const randomIndex = Math.floor(Math.random() * options.length);

    const computerChoice = options[randomIndex];

    console.log(
        `Computer selected index ${randomIndex} and chose ${computerChoice}`
    );

    return computerChoice;
};