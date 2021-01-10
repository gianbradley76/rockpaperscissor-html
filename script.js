function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const choiceIndex = Math.floor(Math.random() * choices.length);
  return choices[choiceIndex];
}

function playRound(playerSelection, computerSelection) {
  let winner;
  if (playerSelection == computerSelection) {
    return 'Tie';
  }
  else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      winner = 'You Win';
    } else if (computerSelection == "scissors") {
      winner = 'You Lose';
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      winner = 'You Win';
    } else if (computerSelection == "scissors") {
      winner = 'You Lose';
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      winner = 'You Lose';
    } else if (computerSelection == "paper") {
      winner = 'You Win';
    }
  }
  return winner;
}

function playerSelect() {
  const choices = ["rock", "paper", "scissors"];
  let playerChoice;
  let validChoice = false;
  while (validChoice == false) {
    playerChoice = prompt("Choose between Rock, Paper, and Scissors");
    validChoice = choices.includes(playerChoice.toLowerCase());
  }
  return playerChoice.toLowerCase();
}


function game() {
  let round = 1;
  while (round <= 5) {
    let playerSelection = playerSelect();
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    round++;
  }
}

game();