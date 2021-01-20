// For playeer choice
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const player_score = document.getElementById("player-score");
const comp_score = document.getElementById("comp-score");

let playerSelection;
let computerSelection;

// Player selected Rock
rock.addEventListener("click", () => {
	playerSelection = "rock";
	computerSelection = computerPlay();
	console.log(playRound(playerSelection, computerSelection));
});

// Player selected Paper
paper.addEventListener("click", () => {
	playerSelection = "paper";
	computerSelection = computerPlay();
	console.log(playRound(playerSelection, computerSelection));
});

// Player selected Scissors
scissors.addEventListener("click", () => {
	playerSelection = "scissors";
	computerSelection = computerPlay();
	console.log(playRound(playerSelection, computerSelection));
});

function computerPlay() {
	const choices = ["rock", "paper", "scissors"];
	const choiceIndex = Math.floor(Math.random() * choices.length);
	return choices[choiceIndex];
}

function playRound(playerSelection, computerSelection) {
	let winner;
	if (playerSelection == computerSelection) {
		return "Tie";
	} else if (playerSelection == "rock") {
		if (computerSelection == "paper") {
			player_score.textContent = Number(player_score.textContent) + 1;
			winner = "You Win";
		} else if (computerSelection == "scissors") {
			comp_score.textContent = Number(comp_score.textContent) + 1;
			winner = "You Lose";
		}
	} else if (playerSelection == "paper") {
		if (computerSelection == "rock") {
			player_score.textContent = Number(player_score.textContent) + 1;
			winner = "You Win";
		} else if (computerSelection == "scissors") {
			comp_score.textContent = Number(comp_score.textContent) + 1;
			winner = "You Lose";
		}
	} else if (playerSelection == "scissors") {
		if (computerSelection == "rock") {
			comp_score.textContent = Number(comp_score.textContent) + 1;
			winner = "You Lose";
		} else if (computerSelection == "paper") {
			player_score.textContent = Number(player_score.textContent) + 1;
			winner = "You Win";
		}
	}
	return winner;
}

function playerSelect() {
	console.log("Player: ", playerSelection);
	console.log("Comp: ", computerSelection);
}
