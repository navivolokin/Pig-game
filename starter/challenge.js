/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer,gamePlaying;

init();

document.querySelector(".btn-roll").addEventListener("click",function(){
      if( gamePlaying){
    // random number  
    var dice1 = Math.floor( Math.random() * 6) + 1;
    var dice2=  Math.floor( Math.random() * 6) + 1;    
      
          
    // display first dice
    var diceDom1= document.querySelector("#first-dice");
    diceDom1.style.display= "block";
    diceDom1.src="dice-"+ dice1 + ".png" ;
    // display second dice
    var diceDom2= document.querySelector("#second-dice");
    diceDom2.style.display= "block";
    diceDom2.src="dice-"+ dice2 + ".png" ;      
    
          // update score if it NOT rolled 1
      
          if( dice1 !== 1 && dice2 !== 1){
        roundScore = roundScore + (dice1 + dice2);
    document.querySelector("#current-" + activePlayer).textContent= roundScore;    
        
    } else {
        nextPlayer();
        
    }
    
      }
}) 

document.querySelector(".btn-hold").addEventListener("click", function(){
        if( gamePlaying){
    // add to global score
     scores[activePlayer] += roundScore;
    // update ui
     document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
    //winner
    if( scores[activePlayer] >= 100){
     document.querySelector("#name-" + activePlayer).textContent = "Winner!";
     document.querySelector("#first-dice").style.display = "none";
        document.querySelector("#second-dice").style.display = "none";    
     document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
    gamePlaying = false;
        } else {
        //next player
        nextPlayer();
    }}
})


function nextPlayer(){
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        document.getElementById("current-0").textContent = "0";
        document.getElementById("current-1").textContent = "0";
        // adding active to a class, to switch beetwen the players
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");

        document.querySelector("#first-dice").style.display = "none";
        document.querySelector("#second-dice").style.display = "none";    
}

document.querySelector(".btn-new").addEventListener("click",init);


function init(){

gamePlaying = true;
scores = [0, 0] ;
roundScore = 0;
activePlayer = 0;

document.querySelector("#first-dice").style.display = "none";
document.querySelector("#second-dice").style.display = "none";    
// setting score to 0
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
document.getElementById("name-0").textContent= "Player 1";
document.getElementById("name-1").textContent= "Player 2";
    
document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");
document.querySelector(".player-0-panel").classList.add("active");

    

}









