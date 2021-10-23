// Assignment Code
var generateBtn = document.querySelector('#generate')

// Write password to the #password input
function writePassword () {
  var password = generatePassword()

  var passwordText = document.querySelector('#password')
  passwordText.value = password

}

function generatePassword () {
  // length prompt: 8 to 128 characters, validate input
  var charPrompt = window.prompt('Enter a value for number of password characters (from 8 to 128).')

  if (charPrompt < 8 || charPrompt > 128 || isNaN(charPrompt)) {
    window.alert('Please enter a number from 8 to 128.')
    return generatePassword()
  }
  else {
    // use charCount value to set length of password string
  }

  // character type prompt: uppercase
  var confirmUpper = window.confirm('Include uppercase characters?')

  if (confirmUpper) {
    // allow uppercase letters in password string
  }

  // character type prompt: lowercase
  var confirmLower = window.confirm('Include lowercase characters?')

  if (confirmLower) {
    // allow lowercase letters in password string
  }

  // character type prompt: numeric
  var confirmNumeric = window.confirm('Include numeric characters?')

  if (confirmNumeric) {
    // allow numeric characters in password string
  }

  // character type prompt: special
  var confirmSpecial = window.confirm('Include special characters?')

  if (confirmSpecial) {
    // allow special characters in password string
  }

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
