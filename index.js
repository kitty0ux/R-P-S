   function  getComputerChoice ( ) {

      let computerInput = Math.floor( Math.random( ) * 3 );

       if( computerInput === 0 ) {
        return "rock";
      } else if( computerInput === 1 ) {
        return "paper";
      } else {
        return "scissors";
      }
   }


   function getHumanChoice ( ) {

      let humanInput = prompt( "rock, paper or scissors?" ).toLowerCase( );
 
       if ( humanInput === "rock" ) {
        return "rock"
      } else if( humanInput === "paper" ) {
        return "paper";
      } else{
        return "scissors";
      }
   }

   function playGame ( )  { 


      let humanScore = 0;
      let computerScore = 0;

  

      function playRound ( humanChoice,computerChoice ) {

         if (humanChoice === "rock" && computerChoice === "paper") {
           computerScore++;
           console.log( "you loose! paper beats rock:", computerScore );  

         }else if (humanChoice === "paper" && computerChoice === "scissors") {
           computerScore++;
           console.log( "you loose! scissors beats paper:", computerScore ); 

         }else if (humanChoice === "scissors" && computerChoice === "rock") {
           computerScore++;
           console.log("you loose! rock beats scissors:", computerScore );

         }else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
           console.log( "you win! rock beats scissors:", humanScore );
      
         }else if (humanChoice === "paper" && computerChoice === "rock") { 
           humanScore++;
           console.log( "you win! paper beats rock:", humanScore );
        
         }else if ( humanChoice === "scissors" && computerChoice === "paper") {
           humanScore++;
           console.log( "you win! scissors beats paper:", humanScore );
      
         }else{
           console.log( "A tie!" );
         } 


        
        console.log( humanScore );
        console.log( computerScore );
      }

 
 

   

   for( let i = 0; i < 5; i++ ) {
    playRound( getHumanChoice( ), getComputerChoice( ) );
   }
}

playGame( );


