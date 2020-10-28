//Character Variables
var symbolChar = ["!", "@", "#", "$", "%", "^", "&", "+", "-", "?", "<", ">", "~", "'", "(", ")", ",", ".", "/", ":", ";", "[", "]", "{", "}", "_", "`", "|",];
var numChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var allChar = [symbolChar, numChar, lowerChar, upperChar];

// var finalPass = []


// Assignment Code (included)
var generateBtn = document.querySelector("#generate");

// Write password to the #password input (included)
function writePassword() {
  // start of the loop of series of prompts for password criteria
var wantPass = confirm("Would you like to generate a password?")
if (wantPass === true) {

// Prompt user to enter how many characters will be in the password generated
  var passChar = prompt("How many characters would you like your password to contain?")
// Loop: when the user enters amount of characters under 8 or over 128 this will first alert them that it needs to be between 8 and 128 and then ask the prompt again, until answered correctly
  for (passChar === false; passChar < 8 || passChar > 128; passChar++) {
      alert("Password needs to be between 8 - 128 characters.");
      var passChar = prompt("How many characters would you like your password to contain?");
  }
}

// The following variables need to be confirmed by the user to determine which types of characters will be in the password generated
  var passSymbolChar = confirm("Click okay to confirm including specialized characters.");
  var passNumChar = confirm("Click okay to confirm including number characters.");
  var passUpperChar = confirm("Click okay to confirm including uppercase characters.");
  var passLowerChar = confirm("Click okay to confirm including lowercase characters.");

  // this creates an array of the character types
  var charTypes = [passSymbolChar, passNumChar, passUpperChar, passLowerChar];

  //Loop: this loop says that the array is false if all the variables are answered false. if they answer false to all 3 character types the user will get an alert that at least one type of character should be chosen and then the user will be  asked the prompts again, until at least one is picked
  for (charTypes === false; !passSymbolChar && !passNumChar && !passUpperChar && !passUpperChar; charTypes++) {
    alert("At least one type of character should be chosen.");
    var passSymbolChar = confirm("Click okay to confirm including specialized characters.");
    var passNumChar = confirm("Click okay to confirm including number characters.");
    var passUpperChar = confirm("Click okay to confirm including uppercase characters.");
    var passLowerChar = confirm("Click okay to confirm including lowercase characters.");
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button (included)
generateBtn.addEventListener("click", writePassword);


// var selectChar = [selectAllChar, selectChar1, selectChar2, selectChar3, selectChar4, selectChar5, selectChar6, selectChar7, selectChar8, selectChar9, selectChar10, selectChar11, selectChar12, selectChar13, selectChar14];

// var passLength = passChar;

// if (passSymbolChar === true && passNumChar === true && passUpperChar === true && passLowerChar === true) {
//   var selectAllChar = allChar;
// }
// else if (passSymbolChar === true && passNumChar === true && passUpperChar === true && passLowerChar === false) {
//   var selectChar1 = symbolChar + numChar + upperChar;
// }
// else if (passSymbolChar === true && passNumChar === true && passUpperChar === false && passLowerChar === false) {
//   var selectChar2 = symbolChar + numChar;
// }
// else if (passSymbolChar === true && passNumChar === false && passUpperChar === false && passLowerChar === false) {
//   var selectChar3 = symbolChar;
// }
// else if (passSymbolChar === true && passNumChar === true && passUpperChar === false && passLowerChar === true) {
//   var selectChar4 = symbolChar + numChar + lowerChar;
// }
// else if (passSymbolChar === true && passNumChar === false && passUpperChar === false && passLowerChar === true) {
//   var selectChar5 = symbolChar + lowerChar;
// }
// else if (passSymbolChar === false && passNumChar === false && passUpperChar === false && passLowerChar === true) {
//   var selectChar6 = lowerChar;
// }
// else if (passSymbolChar === false && passNumChar === true && passUpperChar === false && passLowerChar === false) {
//   var selectChar7 = numChar;
// }
// else if (passSymbolChar === false && passNumChar === false && passUpperChar === true && passLowerChar === false) {
//   var selectChar8 = upperChar;
// }
// else if (passSymbolChar === true && passNumChar === false && passUpperChar === true && passLowerChar === false) {
//   var selectChar9 = symbolChar + upperChar;
// }
// else if (passSymbolChar === true && passNumChar === false && passUpperChar === true && passLowerChar === true) {
//   var selectChar10 = symbolChar + upperChar + lowerChar;
// }
// else if (passSymbolChar === false && passNumChar === true && passUpperChar === true && passLowerChar === true) {
//   var selectChar11 = numChar + upperChar + lowerChar;
// }
// else if (passSymbolChar === false && passNumChar === true && passUpperChar === true && passLowerChar === false) {
//   var selectChar12 = numChar + upperChar;
// }
// else if (passSymbolChar === false && passNumChar === true && passUpperChar === false && passLowerChar === true) {
//   var selectChar13 = numChar + lowerChar;
// }
// else if (passSymbolChar === false && passNumChar === false && passUpperChar === true && passLowerChar === true) {
//   var selectChar14 = upperChar + lowerChar;
// };

// console.log(selectChar);

//   for (var i = 0; i < passLength; i++) {
//   var pass = Math.floor(Math.random() + passLength)
// }  