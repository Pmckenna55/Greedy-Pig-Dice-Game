

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;


document.querySelector('.dice').style.display = 'none';


document.querySelector('.btn-roll').addEventListener('click', function () {

    //Random number
    var diceRoll = Math.floor(Math.random() * 6 + 1);

    //Display result
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + diceRoll + ".png";

    //Update the round score if rolled number was not a 1
    if (diceRoll !== 1) {
        roundScore += diceRoll;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
        
        
        //add score
    } else {

        
        //Next player
        nextPlayer();
    }

});

document.querySelector('.btn-hold').addEventListener('click', function(){
//Add current score to global score
scores[activePlayer] += roundScore;


//Update the UI
document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];


//CHECK IF PLAYER WON THE GAME
if(scores[activePlayer] >= 100){
    document.querySelector('#name-'+activePlayer).textContent= 'Winner!';
    
}



//Next player
nextPlayer();
})



function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    
        document.querySelector('#name-0').classList.toggle('currentPlayer');
        document.querySelector('#name-1').classList.toggle('currentPlayer');
        //document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';

}

