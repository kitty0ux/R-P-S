console.log("Hello world");
  

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


    function playGame () {  

    let humanScore = 0;
    let computerScore = 0;


 function playRound (humanChoice, computerChoice) {

     if (compChoice === "paper" && humChoice === "rock") {
     ++computerScore;
     console.log("computer wins !")
      return "computer";
    } else if (compChoice === "scissors" && humChoice === "paper") {
      ++computerScore;
       console.log("computer wins !")
      return "computer";
    } else if (compChoice === "rock" && humChoice === "scissors") {
     ++computerScore;
      console.log("computer wins !")
     return "computer";
    } else if (compChoice === "scissors" && humChoice === "rock") {
     ++humanScore;
      console.log("human wins !")
     return "human";
    } else if (compChoice === "paper" && humChoice === "scissors") {
      ++humanScore;
       console.log("human wins !")
     return "human";
    } else if (compChoice === "rock" && humChoice === "paper") {
      ++humanScore;
       console.log("human wins !")
      return "human";
    } else{
      console.log("it's a tie, replay ? ");
    }


    console.log(`COMPUTER SCORE: ${computerScore}`) ;
    console.log(`HUMAN SCORE: ${humanScore}`);
 }


 const humanSelection = getHumanChoice();
 const computerSelection = getComputerChoice();


  playRound(humanSelection, computerSelection);
 

}