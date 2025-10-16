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
  