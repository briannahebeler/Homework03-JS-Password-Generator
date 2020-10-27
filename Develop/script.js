var symbolChar = ["!", "@", "#", "$", "%", "^", "&", "+", "-", "?", "<", ">", "~"];
var numChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var allChar = [symbolChar, numChar, lowerChar, upperChar]

var finalPassword = " ";


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// how do i start the loop for everything to go inside of 
var wantPass = confirm("Would you like to generate a password?")
if (wantPass === true) {

// Prompt user to under how many characters will be in the password generated
  var passChar = prompt("How many characters would you like your password to contain?")

  for (passChar === false; passChar < 8 || passChar > 128; passChar++) {
    // if (passChar < 8 || passChar > 128) {
      alert("Password needs to be between 8 - 128 characters.")
      var passChar = prompt("How many characters would you like your password to contain?")
    // }
  }

  var passSymbolChar = confirm("Click okay to confirm including specialized characters.")
  var passNumChar = confirm("Click okay to confirm including number characters.")
  var passUpperChar = confirm("Click okay to confirm including uppercase characters.")
  var passLowerChar = confirm("Click okay to confirm including lowercase characters.")

  if (!passSymbolChar && !passNumChar && !passUpperChar && !passUpperChar) {
    alert("At least one type of character should be chosen.")
  }
}







// for (var i = 0; i < passChar.length; i++) {
//   var pass = Math.floor(Math.random() + passChar.length)
// }