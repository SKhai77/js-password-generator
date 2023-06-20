// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  //1. Need to prompt te user for the passwrod criteria
  var userInput = window.prompt("How many characters would you like your password to contain?");


  // a. Set a passworld lenght from 8 - 128.

  var minCharsLenght = "8";
  var maxCharsLenght = "128";

  window.confirm("Click OK to confirm including Special characters.");

  window.confirm("Click OK to confirm including Numeric characters.");

  window.confirm("Click OK to confirm including Lowercase characters.");
  
  window.confirm("Click OK to confirm including Uppercase characters.");

  // b. 
  var charTypes = {
    charLowerCase: "abcdefghijklmnopqrstuvwxyz",
    charUpperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    charNumber: "0123456789",
    charSpecial: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
  }


  //2. Needed Input validation
  // 3. Need to able to generate the password based on the criteria


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



