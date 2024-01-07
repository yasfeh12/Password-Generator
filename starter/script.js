// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

alert("length of p")
let chosenPasswordLength= prompt("length of password")
let passwordSpecialCharacters= confirm("should the password include special Characters  ?")
let passwordNumbers= confirm("should the password include numbers  ?")
let passwordUpper= confirm("should the password include uppercase letters ?")
let passwordLower=  confirm("should the password include lowercase letters ?")
let allcharacters = specialCharacters + numericCharacters + lowerCasedCharacters + upperCasedCharacters 
// Function to prompt user for password options
function getPasswordOptions() {

  alert("length of p")
  let chosenPasswordLength= prompt("length of password")
  let passwordSpecialCharacters= confirm("should the password include special Characters  ?")
  let passwordNumbers= confirm("should the password include numbers  ?")
  let passwordUpper= confirm("should the password include uppercase letters ?")
  let passwordLower=  confirm("should the password include lowercase letters ?")
  let allcharacters = specialCharacters + numericCharacters + lowerCasedCharacters + upperCasedCharacters 
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  let password= "";
  if (passwordSpecialCharacters) 
  { password +=  specialCharacters[Math.floor(Math.random()*specialCharacters.length)]
  }
  else if (passwordNumbers) 
  { password +=  passwordNumbers[Math.floor(Math.random()*passwordNumbers.length)]
  }
  else if (passwordNumbers) 
  { password +=  passwordNumbers[Math.floor(Math.random()*passwordNumbers.length)]
  }
  else if (passwordNumbers) 
  { password +=  passwordNumbers[Math.floor(Math.random()*passwordNumbers.length)]
  }
}



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);