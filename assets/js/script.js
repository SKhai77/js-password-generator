// Assignment Code
var minCharsLenght = "8";
var maxCharsLenght = "128";  

var charLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var  charUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charSpecial = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
  
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
    // a. Set a passworld lenght from 8 - 128.
    
    //2. Needed Input validation
    // 3. Need to able to generate the password based on the criteria
  
    // 4. Return the value

  //1. Need to prompt te user for the passwrod criteria
var generatePasswordOptions = window.prompt("How many characters would you like your password to contain?");

  window.confirm("Click OK to confirm including Special characters.");

  window.confirm("Click OK to confirm including Numeric characters.");

  window.confirm("Click OK to confirm including Lowercase characters.");
  
  window.confirm("Click OK to confirm including Uppercase characters.");


  
 
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random * arr.length);
  var randomElement = arr[randomIndex];

  return randomElement;

}
function generatePassword() {
  var options = generatePasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var randomCharacters = [];

  if (!options) return null;
  if (options.hasSpecialCharacters)
  {
    possibleCharacters = possibleCharacters.concat(charLowerCase)
    randomCharacters.push(getRandom(charLowerCase));
  }
  
  if (options.hasUpperCase)
  {
    possibleCharacters = possibleCharacters.concat(charUpperCase)
    randomCharacters.push(getRandom(charUpperCase));
  }
  if (options.hasCharNumbers)
  {
    possibleCharacters = possibleCharacters.concat(charNumbers)
    randomCharacters.push(getRandom(charNumbers));
  }

  for (var i = 0; i <options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacter);

  }
for (var i = 0; i <randomCharacters.length; i++) {
  result[i] = randomCharacters[i]

}
return result.join("");

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


  
