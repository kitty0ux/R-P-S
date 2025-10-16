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
   //console.log(getComputerChoice());

   function getHumanChoice (a, b, c) {
    let randomChoice = prompt("please enter your choice:");

    if (randomChoice = a ) {
        return a; 
    } else if (randomChoice = b ) {
        return b;
    } else {
        return c;
    }
   }
  getHumanChoice("Rock", "Paper", "Scissors");

  console.log(getHumanChoice());