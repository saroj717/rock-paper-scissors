var score = document.getElementById('score')
var result = document.getElementById('result')
var rock = document.getElementById('rock')
var paper = document.getElementById('paper')
var scissors = document.getElementById('scissors')
var userChoice = document.getElementById('user-choice')
var computer = '';
var user = '';
var computerWins = 0;
var userWins = 0;
var tie = 0;
var options = ['rock', 'paper', 'scissors'];

rock.addEventListener('click', function(){
  setUser("rock");
  playGame();
});
paper.addEventListener('click', function(){
  setUser("paper");
  playGame();
});
scissors.addEventListener('click', function(){
  setUser("scissors");
  playGame();
});

function setUser(clickChoice) {
  // console.log(clickChoice);
  user = clickChoice;
  userChoice.innerHTML = `You chose: ${user}.`;
}

function computerHand(max) {
  return options[Math.floor(Math.random() * max)];
}

function playGame() {
  if (userWins === 0 && computerWins === 0){
    document.getElementById("user-score").innerHTML = 0;
    document.getElementById("computer-score").innerHTML = 0;
    document.getElementById("tie-score").innerHTML = 0;
    result.innerHTML = '';
  }
  computer = computerHand(3);
  document.getElementById('computer-choice').innerHTML = `Computer chose: ${computer}.`;
  if (computer === user) {
    tie += 1;
    document.getElementById("tie-score").innerHTML = tie;
  } else if (user === 'rock') {
    if (computer === 'paper') {
      computerWins += 1;
      document.getElementById("computer-score").innerHTML = computerWins;
    } else if (computer === 'scissors') {
      userWins += 1;
      document.getElementById("user-score").innerHTML = userWins;
    }
  } else if (user === 'paper') {
    if (computer === 'rock') {
      userWins += 1;
      document.getElementById("user-score").innerHTML = userWins;
    } else if (computer === 'scissors') {
      computerWins += 1;
      document.getElementById("computer-score").innerHTML = computerWins;
    }
  } else if (user === 'scissors') {
    if (computer === 'rock') {
      computerWins += 1;
      document.getElementById("computer-score").innerHTML = computerWins;
    } else if (computer === 'paper') {
      userWins += 1;
      document.getElementById("user-score").innerHTML = userWins;
    }
  }
  if (userWins === 2 || computerWins === 2) {
    if (userWins === 2) {
      result.innerHTML = 'USER WON... GAME OVER !'
    } else if (computerWins === 2) {
      result.innerHTML = 'COMPUTER WON... GAME OVER !'
    }
    computerWins = 0;
    userWins = 0;
    tie = 0;
  }
}

