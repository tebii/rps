console.log("Hello world!");
console.log(getComputerChoice());
function getComputerChoice(){
  let choiceNum = Math.floor(Math.random() * 3) + 1;
  let computerChoice;
  switch(choiceNum) {
     case 1:
    computerChoice = "rock";
      break;
    case 2:
    computerChoice = "paper";
      break;
    case 3:
    computerChoice= "scissors";
      break;
  }
  return computerChoice;
}
  

