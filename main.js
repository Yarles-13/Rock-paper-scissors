// get users choice
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput == "rock" || userInput == "paper" || userInput == "scissors") {
    return userInput;
  } else {
    console.log("error");
  }
};

// get computers choice
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  // because we have multiple cases/ options we should a switch over an if/else
  switch (randomNumber) {
    case 1:
      return "rock";
      break;
    case 2:
      return "scissors";
      break;
    case 3:
      return "paper";
      break;
  }
}

// compare the two choices and determine a winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) return "tie";
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer Won";
    } else {
      return "You Won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer Won";
    } else {
      return "You Won";
    }
  }
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'Can you smell?? What the rock is cookin???'
    }
  }
}

function playGame (){
  let userValue = getUserChoice('rock');
  let computerValue = getComputerChoice()
  console.log(determineWinner(userValue, computerValue))
}

playGame()

