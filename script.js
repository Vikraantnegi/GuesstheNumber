/**
 * Guess The Number Game
 * TODO: Save the guess history in a variable called guess
 * TODO: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses 

let correctNumber = getRandomNumber();
let count = 5;


window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
    tries();
}

function playGame(){
  count --;
  let numberGuess = parseInt(document.getElementById("number-guess").value);
  displayResult(numberGuess);
  if(count === 0){
    showYouLost();
  }
}

function displayResult(numberGuess) {
  if(numberGuess > correctNumber ){
    if(numberGuess - 5 <= correctNumber){
      showYouCloseL();
    }
    else{ 
      showYouLow();
    }
  }
  else if( numberGuess < correctNumber ){
    if(numberGuess + 5 >= correctNumber){
        showYouCloseH();
      }
      else{
        showYouHigh();
      }
  }
  else {
    showYouWon();
  }
}


/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame(){
  resetResultContent();
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

function getRandomNumber(){
  let RandomNumber = Math.floor(Math.random() * 100 + 1);
  return RandomNumber;
}

/**
 * Save guess history 
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
 */
function saveGuessHistory(guess) {
  // *CODE GOES BELOW HERE *
}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */
function displayHistory() {
  let index; // TODO
  let list = "<ul class='list-group'>";
  // *CODE GOES BELOW HERE *
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
}



/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
    case "lost":
      dialog = "<div class='alert alert-danger' role='alert'>"
      break;
    case "" : 
      dialog = "<div class='alert alert-light' role='alert'>"    
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouCloseL(){
  tries();
  const text = "Guess lower, you're close";
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

function showYouCloseH(){
  tries();
  const text = "Guess higher, you're close";
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

function showYouWon(){
  const text = "Bingo, You got it!"
  let dialog = getDialog("won", text);
  document.getElementById("result").innerHTML = dialog;
}

function showYouLost(){
  tries();
  const text = "You ran out of tries!"
  let dialog = getDialog("lost", text);
  document.getElementById("result").innerHTML = dialog;
}

function showYouHigh(){
  tries();
  const text = "Guess lower, your guess is too high."
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

function showYouLow(){
  const text = "Guess higher, your guess is too low.!"
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

function tries(){
  const text = `You've only ${count} tries left.`;
  let dialog = getDialog("", text);
  document.getElementById("result1").innerHTML = dialog;
}
