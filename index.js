
function getComputerChoice () {
 const randomNumber = Math.floor(Math.random() * 3) ;

 if (randomNumber === 0 ) {
  console.log("rock");
    return "rock";

 } else if (randomNumber === 1) {
  console.log("paper");
    return "paper";

 } else {
  console.log("scissors");
     return "scissors"; 
   }

     }

 
     function getHumanChoice() {
     let randomChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
     
     if (randomChoice === "rock") {
      console.log("rock");
      return "rock";

     }else if (randomChoice === "paper") {
      console.log("paper");
      return "paper";

     }else{
      console.log("scissors");
      return "scissors";
     }
   }


  
 let humanScore = 0;
 let computerScore = 0;
 console.log("Human Score" + humanScore, "computer score" + computerScore); 

 function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
       console.log("it's a tie! pls replay"); 

    }else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("you loose! paper beats rock");
        computerScore++;

    }else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("you loose! scissors beats paper");
        computerScore++;

    }else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("you loose! rock beats scissors");
        computerScore++;

    }else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("you win! rock beats scissors");
        humanScore++;

    }else if (humanChoice === "paper" && computerChoice === "rock") { 
      console.log("you win! paper beats rock");
      humanScore++;

    }else if ( humanChoice === "scissors" && computerChoice === "paper") {
      console.log("you win! scissors beats paper");
      humanScore++;

    }else{
     console.log("Hurray!");
    }
        
 }

 const humanSelection = getHumanChoice();
 const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);