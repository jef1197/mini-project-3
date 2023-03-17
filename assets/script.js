var userInput;
var compInput;
var choices = ['rock', 'paper', 'scissors'];
var tie = 0;
var lose = 0;
var win = 0;


function randoChoice() {
  var rando = Math.floor(Math.random() * 3);
  compInput = (choices[rando]);
  return compInput;
}

function game() {
  userInput = window.prompt('Enter your Choice Rock - Paper - Scissors')
  randoChoice();
  console.log('User Choice: ' + userInput)
  alert('Computer choose: ' + compInput)
  if(userInput.toLowerCase() == choices[0]){
  // Rock Input
    if (compInput == choices[0]) {
      alert('tie')
      tie++
    } else if (compInput == choices[1]) {
      alert('you lose')
      lose++
    } else if (compInput == choices[2]) {
      alert('you win')
      win++
    }
  } else if (userInput.toLowerCase() == choices[1]) {
    // Paper Input
    if (compInput == choices[0]) {
      alert('you win')
      win++
    } else if (compInput == choices[1]) {
      alert('tie')
      tie++
    } else if (compInput == choices[2]) {
      alert('you lose')
      lose++
    }
  } else if (userInput.toLowerCase() == choices[2]) {
    // Scissors Input
    if (compInput == choices[0]) {
      alert('you lose')
      lose++
    } else if (compInput == choices[1]) {
      alert('you win')
      win++
    } else if (compInput == choices[2]) {
      alert('tie')
      tie++
    }
  } 
  alert ('Stats:\nWins: ' + win + "\nLosses: " + lose + "\nTies: " + tie)
  var playAgain = window.confirm("Play again?");
  if (playAgain) {
    game();
  }
}

game();