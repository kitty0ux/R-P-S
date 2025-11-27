
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

    //debugger;
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
        

       let computerScore = 0;
       let humanScore = 0;

         function playRound(humanChoice, computerChoice) {
       // const humanSelection = getHumanChoice();
       // const computerSelection = getComputerChoice();

         if (humanChoice === computerChoice) {
       console.log("it's a tie! pls replay"); 

        }else if (humanChoice === "rock" && computerChoice === "paper") {
        //console.log("computer wins!");
        computerScore++;
        return "computer";

         }else if (humanChoice === "paper" && computerChoice === "scissors") {
         //console.log("computer wins!");
         computerScore++;
         return "computer";
         

        }else if (humanChoice === "scissors" && computerChoice === "rock") {
        //console.log("computer wins!");
        computerScore++;
        return "computer";

        }else if (humanChoice === "rock" && computerChoice === "scissors") {
        //console.log("player wins!");
        humanScore++;
        return "human";

        }else if (humanChoice === "paper" && computerChoice === "rock") { 
        //console.log("player wins!");
        humanScore++;
        return "human";

        }else if ( humanChoice === "scissors" && computerChoice === "paper") {
        //console.log("player wins!");
        humanScore++;
        return "human";

       }else{
       console.log("Hurray!");
       }
  
      }
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();

          //playRound (humanSelection, computerSelection);

      console.log("starting five rounds of the game!");

       

      let round1 = playRound(humanSelection, computerSelection);
      console.log(`Round 1: ${round1} wins`);
       
      let round2 = playRound(humanSelection, computerSelection);
      console.log(`Round 2: ${round2} wins`);

      let round3 = playRound(humanSelection, computerSelection);
      console.log(`Round 3: ${round3} wins`);

      let round4 = playRound(humanSelection, computerSelection);
      console.log(`Round 4: ${round4} wins`);

      let round5 = playRound(humanSelection, computerSelection);
      console.log(`Round 5: ${round5} wins`);

      console.log(`Player score ${humanScore}`);
      console.log(`Computer score ${computerScore}`);

      if (humanScore > computerScore) {
        console.log("PLAYER WINS THE GAME!");
      }else if (computerScore > humanScore) {
        console.log("COMPUTER WINS THE GAME");
      }else{
        console.log("IT'S A TIE GAME!");
      }
        }

        playGame();
  