// For playeer choice
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const comp_rock = document.getElementById("comp_rock");
const comp_paper = document.getElementById("comp_paper");
const comp_scissors = document.getElementById("comp_scissors");
const comp_img = document.querySelectorAll(".comp-choice");

let player_score = document.getElementById("player-score");
let comp_score = document.getElementById("comp-score");

const reset_game = document.getElementById("reset-btn");

const winner = document.getElementById("winner");

let playerSelection;
let computerSelection;
let counter = 0;

// Resets the game
reset_game.addEventListener("click", () => {
	player_score.textContent = "0";
	comp_score.textContent = "0";
	winner.innerHTML = "First to 5 points.<br>Click to start the game.";
});

// Player selected Rock
rock.addEventListener("click", () => {
	counter++;
	playerSelection = "rock";
	computerSelection = computerPlay();
	// remove scaling
	comp_img.forEach((img) =>
		img.addEventListener("transitionend", removeTransition)
	);
	playRound(playerSelection, computerSelection);
});

// Player selected Paper
paper.addEventListener("click", () => {
	counter++;
	playerSelection = "paper";
	computerSelection = computerPlay();
	// remove scaling
	comp_img.forEach((img) =>
		img.addEventListener("transitionend", removeTransition)
	);
	playRound(playerSelection, computerSelection);
});

// Player selected Scissors
scissors.addEventListener("click", () => {
	counter++;
	playerSelection = "scissors";
	computerSelection = computerPlay();
	// remove scaling
	comp_img.forEach((img) =>
		img.addEventListener("transitionend", removeTransition)
	);
	playRound(playerSelection, computerSelection);
});

function removeTransition(e) {
	if (e.propertyName !== "transform") return;
	e.target.classList.remove("selected");
	//AAAAAAAAAAAAAAAAA
}

// Random computer choice
function computerPlay() {
	const choices = ["rock", "paper", "scissors"];
	const choiceIndex = Math.floor(Math.random() * choices.length);
	if (choices[choiceIndex] == "rock") {
		comp_rock.classList.add("selected");
	} else if (choices[choiceIndex] == "paper") {
		comp_paper.classList.add("selected");
	} else if (choices[choiceIndex] == "scissors") {
		comp_scissors.classList.add("selected");
	}

	return choices[choiceIndex];
}

// Checks the game result
function playRound(playerSelection, computerSelection) {
	if (playerSelection == computerSelection) {
		winner.textContent = "It's a tie";
	} else if (playerSelection == "rock") {
		if (computerSelection == "paper") {
			comp_score.textContent = Number(comp_score.textContent) + 1;
			winner.textContent = "You Lost. Computer chose Paper";
		} else if (computerSelection == "scissors") {
			player_score.textContent = Number(player_score.textContent) + 1;
			winner.textContent = "You Win. Computer chose Scissors";
		}
	} else if (playerSelection == "paper") {
		if (computerSelection == "rock") {
			player_score.textContent = Number(player_score.textContent) + 1;
			winner.textContent = "You Win. Computer chose Rock";
		} else if (computerSelection == "scissors") {
			comp_score.textContent = Number(comp_score.textContent) + 1;
			winner.textContent = "You Lost. Computer chose Scissors";
		}
	} else if (playerSelection == "scissors") {
		if (computerSelection == "rock") {
			comp_score.textContent = Number(comp_score.textContent) + 1;
			winner.textContent = "You Lost. Computer chose Rock";
		} else if (computerSelection == "paper") {
			player_score.textContent = Number(player_score.textContent) + 1;
			winner.textContent = "You Win. Computer chose Paper";
		}
	}
	check_result();
}

// Checks who won the game (First to 5 points)
function check_result() {
	if (player_score.textContent === "5") {
		winner.textContent = "You Win! Click to play again.";
		player_score.textContent = "0";
		comp_score.textContent = "0";
	} else if (comp_score.textContent === "5") {
		winner.textContent = "You Lost. Click to play again.";
		player_score.textContent = "0";
		comp_score.textContent = "0";
	}
}
