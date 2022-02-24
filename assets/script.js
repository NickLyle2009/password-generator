// Assignment Code
//for the prompts-  when you want input, you have to go
var generateBtn = document.querySelector("#generate");
var uppercase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
var lowercase = ['abcdefghijklmnopqrstuvwxz']
var numerals = ['1234567890']
var symbols = ['!@#$%^&*_-+=;:>?/|']


function generatePassword() {
  var passwordRandom = ""
  var pwcharacters = []
  console.log("this indicates that you clicked the generate button")


  //1. generate prompt
  // confirm
  var uppercasechoice = confirm("Do you want uppercase characters in your password?")

  if (uppercasechoice) {
    pwcharacters.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z')
  }
  var lowercasechoice = confirm("Do you want lowercase characters in your password? Y or N")

  if (lowercasechoice) {
    pwcharacters.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'z')
  };

  var numeralchoice = confirm("Do you want numeral characters in your password? Y or N")
  if (numeralchoice) {
    pwcharacters.push('1', '2', '3', '4', '5', '6', '7', '8', '9', '0')
  };

  var symbolchoice = confirm("Do you want symbols in your password? Y or N")

  if (symbolchoice) {
    pwcharacters.push('!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '=', ';', ':', '>', '?', '/', '|')
  console.log(pwcharacters)
  };

  //if you dont choose character

  if (
    uppercasechoice === false &&
    lowercasechoice === false &&
    numeralchoice === false &&
    symbolchoice === false
  ) {
    alert("You have to choose at least one type of character to generate the password!");
    return null}

  var passwordlength = prompt("how long do you want your password?  Please make it between 8 and 128 characters");

  if ((passwordlength >= 8) && (passwordlength <= 128)) {
    alert("Generating password");
    for (var i = 0; i <= passwordlength; i++) {
      var randomcharacter = Math.floor(Math.random() * pwcharacters.length)
      passwordRandom += pwcharacters[randomcharacter];

    }
  }
  else {
    alert("Please choose length between 8 and 128.  Please restart query");
    return null
   
  };


  //  a. ask for password length
  //  b. ask if uppercase, lowercase, symbols, numbers in password concat(), push
  //3. validate input to confirm at least one character type will be selected
  //4. generate password and display
  console.log("should be generating password")
  console.log(passwordRandom)
  return passwordRandom;

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
