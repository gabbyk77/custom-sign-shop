//Declare Variables
var cost;
var userInput;
var inputNoSpace;
var letters;
var maxLength = 30;

//Cost Function
function initialCost()
{
	cost = 0;
  console.log(userInput);
}

//User Input Function - Working Properly
function userInput() {
  userInput = document.getElementById("letters").value;
  console.log(userInput);
}

//Counts the number of letters entered by user
function countingLetters() {
  letters = inputNoSpace.split("");

  for (var x = 0; x <= maxLength; x++) {
    if (checkForLetters(x) === true) {
      plusFive();
    } else {
      displayResults();
    }
  }
}

//Calculate Function
function calculate() {
  initialCost();
  userInput();
  removeSpace();
  countingLetters();
}

//Add $5 if there is a letter
function plusFive() {
  cost = cost + 5;
}

//Display final results
function displayResults() {
  document.getElementById("dollars").innerHTML = "Your total is $" + cost;
}


function checkForLetters(x) {
  if (letters[x] === undefined) {
    return false;
  } else {
    return true;
  }
}

function removeSpace() {
  inputNoSpace = userInput.split("").join("");
}


function checkMaxLength() {
  if (inputNoSpace.length <= maxLength) {
    countingLetters();
  } else {
    document.getElementById("dollars").innerHTML = "Your custom sign may only contain ma"
  }
}
