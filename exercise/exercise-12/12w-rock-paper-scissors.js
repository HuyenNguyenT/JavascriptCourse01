let score = JSON.parse(localStorage.getItem('score')) || {
  wins : 0,
  loses : 0,
  ties : 0
};
updateScoreElement();

document.querySelector('.js-rock-button').addEventListener('click',() => {
  playGame('rock')
})

document.querySelector('.js-paper-button').addEventListener('click',() => {
  playGame('paper')
})

document.querySelector('.js-scissors-button').addEventListener('click',() => {
  playGame('scissors')
})

document.querySelector('.auto-play-button').addEventListener('click',() => {
  autoPlay();
})

document.querySelector('.reset-score-button').addEventListener('click',() => {
  resetScore();
})



document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p'){
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  } else if (event.key === 'a') {
    autoPlay();
  } else if (event.key === 'Backspace') {
    resetScore();
  }
})

function resetScore() {
  score.wins = 0;
  score.loses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
}


function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';
    if(playerMove === 'scissors'){
      if(computerMove === 'rock'){
        result = 'You lose.';
      } else if ( computerMove === 'paper'){
        result = 'You win.';
      } else if ( computerMove === 'scissors') {
        result = 'Tie';
      }
    } else if(playerMove === 'paper'){
      if(computerMove === 'rock'){
        result = 'You win.';
      } else if ( computerMove === 'paper'){
        result = 'Tie.';
      } else if ( computerMove === 'scissors') {
        result = 'You lose.';
      }
    } else {
      if(computerMove === 'rock'){
        result = 'Tie.';
      } else if ( computerMove === 'paper'){
        result = 'You lose.';
      } else if ( computerMove === 'scissors') {
        result = 'You win.';
      }
    }

    if(result === 'You win.'){
      score.wins += 1;
    } else if(result === 'You lose.'){
      score.loses += 1;
    } else if( result === 'Tie.') {
      score.ties += 1;
    }
    //save object to local storage and keep even page refresh
    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement();
   
      document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-move').innerHTML = `You 
        <img src="/images/${playerMove}-emoji.png"
        class="move-icon">
        <img src="/images/${computerMove}-emoji.png"
        class="move-icon">
        Computer`;

     }

  function updateScoreElement(){
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Looses: ${score.loses},
     Ties: ${score.ties}`;
  }

  function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';
    if(randomNumber >= 0 && randomNumber < 1 / 3){
      computerMove = 'rock';
    } else if ( randomNumber >= 1 /3 && randomNumber < 2 / 3){
      computerMove = 'paper';
      
    } else if ( randomNumber >= 2 / 3 && randomNumber < 1){
      computerMove = 'scissors';
    }

    return computerMove;
  }

let isAutoPlaying = false;
let intervalId;

// const autoPlay = () => {

// }
  function autoPlay() {
    if(!isAutoPlaying){
      intervalId = setInterval(() => {
        const playerMove = pickComputerMove();
        playGame(playerMove);
      }, 1000);
      isAutoPlaying = true;
      document.querySelector('.auto-play-button').innerHTML = 'Stop Playing';
    } else {
      clearInterval(intervalId);
      isAutoPlaying = false;
      document.querySelector('.auto-play-button').innerHTML = 'Auto Play';

    }
  }