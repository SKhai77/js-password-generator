// Declares variable name for all the characters.
var charLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charSpecial = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

var generateBtn = document.querySelector("#generate");

function generatePassword() {

// Prompt/pop-up window for numbers of characters option between 8 and 128.
  var length = window.prompt("How many characters would you like your password to contain?");

  // Minimum characters validation at 8 characters.
  if (length < 8) {
    alert("Password length must be at least 8 characters");
    return null;
  }

// Maximum characters validation at 128 characters.
  if (length > 128) {
    alert("Password length must less than 129 characters");
    return null;
  }

// Types of character option validation to include in the password.
  var lowerChars = window.confirm("Click OK to confirm including Lowercase characters.");

  var upperChars = window.confirm("Click OK to confirm including Uppercase characters.");

  var Numbers = window.confirm("Click OK to confirm including Numeric characters.");

  var specChars = window.confirm("Click OK to confirm including Special characters.");


// Declares a variable for password
  var possibleCharacters = [];

  let password = "";

  if (specChars == true) {
    possibleCharacters = possibleCharacters.concat(charSpecial)

  }
  if (lowerChars == true) {
    possibleCharacters = possibleCharacters.concat(charLowerCase)

  }

  if (upperChars == true) {
    possibleCharacters = possibleCharacters.concat(charUpperCase)

  }
  if (Numbers == true) {
    possibleCharacters = possibleCharacters.concat(charNumbers)

    // This alert will show-up if user cancel all the criteria.
  } else {
    alert("No password is created for you since you cancelled all the criteria.");
    return null;
  }

// Random password generator based on user accepted criteria using, "for loop".
  for (var i = 0; i < Number(length); i++) {

    var randomIndex = Math.floor(Math.random() * possibleCharacters.length);

    var randomElement = possibleCharacters[randomIndex];

    password += randomElement;

  }
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);