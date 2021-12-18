// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'z']
var numerals = ['1', '2',  '3', '4', '5', '6', '7', '8', '9', '0']
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '=', ';', ':', '>', '?', '/', '|']
var yesOrNo = ['Y', 'N' ]
var pwcharacters =['.', ] 
function generatePassword(){

  console.log("this indicates that you clicked the generate button")

  
//1. generate prompt

var uppercasechoice = prompt("Do you want uppercase characters in your password? Y or N")

if (uppercasechoice === "Y"){
  pwcharacters.push('A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z')
  };
  
var lowercasechoice = prompt("Do you want lowercase characters in your password? Y or N")

if (lowercasechoice === "Y"){
  pwcharacters.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'z')
  };

var numeralchoice = prompt("Do you want numeral characters in your password? Y or N")
if (numeralchoice === "Y"){
  pwcharacters.push('1', '2',  '3', '4', '5', '6', '7', '8', '9', '0')
  };

var symbolchoice = prompt("Do you want symbols in your password? Y or N")

if (symbolchoice ==="Y"){
  pwcharacters.push('!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '=', ';', ':', '>', '?', '/', '|')
  };

  //if you dont choose character

if (pwcharacters.length <= 1) {
  prompt("You have to choose at least one type of character to generate the password! Please restart");
return;
};

prompt("how long do you want your password?  Please make it between 8 and 128 characters") 
var passwordlength =[];
for(var i = 8; i <= 128; i++){
    passwordlength.push(i);
var passwordText = ""
}
if ((8 <= passwordlength)||(passwordlength <= 128)) {
  alert("Generating password")}
else {
alert("Please choose length between 8 and 128.  Please restart query");
 passwordlength
};

for ( var i = 0; i <= passwordlength; i++){
 var randomcharacter = Math.floor(Math.random() * pwcharacters.length)
 passwordText += chars.substring(randomcharacter, randomcharacter + 1);

}


 

//  a. ask for password length
//  b. ask if uppercase, lowercase, symbols, numbers in password concat(), push
//3. validate input to confirm at least one character type will be selected
//4. generate password and display

  return; 

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)