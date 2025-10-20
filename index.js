console.log("Hello world");
  

function getComputerChoice () {
 const randomNumber = Math.floor(Math.random() * 3) ;

 if (randomNumber === 0 ) {
    return "rock";
 } else if (randomNumber === 1) {
    return "paper";
 } else {
    return "scissors";
 }
   }
   console.log(getComputerChoice());

   function getHumanChoice () {
    let randomChoice = prompt("Rock, paper, or scissors?").toLowerCase();
      return randomChoice;
   }

console.log(getHumanChoice());
  
 let humanScore = 0;
 let computerScore = 0;

 function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
       console.log("it's a tie! pls replay");   
    }else if (humanChoice == "rock" || computerChoice == "paper") {
        console.log("you loose! paper beats rock");
    }else if (humanChoice == "paper" || computerChoice == "scissors") {
        console.log("you loose! scissors beats paper");
    }else if (humanChoice == "scissors" || computerChoice == "rock") {
        console.log("you loose! rock beats scissors");
    }else {
        console.log("logic not defined");
    }
  
 }
 const humanChoice = getHumanChoice();
 const computerChoice = getComputerChoice();

 playRound(humanChoice, computerChoice);