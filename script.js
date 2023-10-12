game(5);
function getComputerChoice() {
  let choiceNum = Math.floor(Math.random() * 3) + 1;
  let computerChoice;
  switch (choiceNum) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }
  return computerChoice;
}

function round(playerSelection, computerSelection) {
  if ((playerSelection == "rock") && (computerSelection == "scissors")) {
    return ("player");
  } else if ((playerSelection == "paper") && (computerSelection == "stone")) {
    return ("player");
  } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
    return ("player");
  } else if ((playerSelection == computerSelection)) {
    return ("tie");
  } else {
    return ("computer");
  }
}

function game(numberOfRounds) {
  let playerScore = 0;
  let computerScore = 0;
  let playerSelection;
  let computerSelection;
  let result;
  let resultText;
  for (let i = 0; i <= numberOfRounds; i++) {
    playerSelection = prompt("Choose rock, paper or scissors.").toLowerCase();
    computerSelection = getComputerChoice();
    result = round(playerSelection, computerSelection);
    if (result == "player") {
      resultText = "The winner is the player.";
      playerScore++;
    } else if (result == "computer") {
      resultText = "The winner is the computer.";
      computerScore++;
    } else {
      resultText = "Its a tie.";
    }
    console.log(resultText);
    console.log("Score: " + playerScore + " to " + computerScore);
  }
  if (playerScore > computerScore) {
    console.log("Congrats! You are the winner!");
  } else if (computerScore > playerScore) {
    console.log("The computer has won.");
  } else {
    console.log("You have tied with the computer");
  }
  console.log("Final score: " + playerScore + " to " + computerScore);
}
