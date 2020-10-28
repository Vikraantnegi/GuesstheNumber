/**
 * Guess The Number Game
 */

let guesses =[];
let correctNumber = getRandomNumber();
let count = 5;

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
    tries();
}

function playGame(){
  count -= 1;
  let numberGuess = parseInt(document.getElementById("number-guess").value);
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
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

function initGame(){
  count = 5;
  correctNumber = getRandomNumber();
  document.getElementById("number-submit").disabled = false;
  document.getElementById("number-guess").disabled = false;
  document.getElementById("result").innerHTML="";
  document.getElementById("number-guess").value = "";
  guesses = [];
  displayHistory();
}

function getRandomNumber(){
  let RandomNumber = Math.floor(Math.random() * 100 + 1);
  return RandomNumber;
}

function saveGuessHistory(guess) {
  guesses.push(guess);
}

function displayHistory() {
  let index = guesses.length - 1;
  let list = "<ul class='list-group'>";
  while (index >=0){
    list += "<li class='list-group-item'>" + "You guessed " + guesses[index] + "</li>"
    index -=1;
  }
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
}

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
  document.getElementById("number-submit").disabled = true;
  document.getElementById("number-guess").disabled = true;
}

function showYouLost(){
  tries();
  const text = "You ran out of tries!"
  let dialog = getDialog("lost", text);
  document.getElementById("result").innerHTML = dialog;
  document.getElementById("number-submit").disabled = true;
  document.getElementById("number-guess").disabled = true;
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
