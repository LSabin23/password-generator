// Assignment Code
var generateBtn = document.querySelector('#generate')

// set new password var to empty string to avoid undefined message upon generation
var newPassword = ''

var charChoices = [
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']
]

var randomNum = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min)
  return value
}

var passLength = function () {
  // length prompt: 8 to 128 characters, validate input
  var charPrompt = window.prompt('Enter a value for number of password characters (from 8 to 128).')

  if (charPrompt < 8 || charPrompt > 128 || isNaN(charPrompt)) {
    window.alert('A random valid number will be chosen for you.')
    charPrompt = randomNum(8, 128)
    return charPrompt
  }
  else {
    return charPrompt
  }
}

var addUpperChars = function () {
  var confirmUpper = window.confirm('Include uppercase characters?')
  if (confirmUpper) {
    return true
  }
  else {
    return false
  }
}

var addLowerChars = function () {
  var confirmLower = window.confirm('Include lowercase characters?')
  if (confirmLower) {
    return true
  }
  else {
    return false
  }
}

var addNumChars = function () {
  var confirmNumeric = window.confirm('Include numeric characters?')

  if (confirmNumeric) {
    return true
  }
  else {
    return false
  }
}

var addSpecChars = function () {
  var confirmSpecial = window.confirm('Include special characters?')

  if (confirmSpecial) {
    return true
  }
  else {
    return false
  }
}

// generate a password reflective of user prompt choices
function generatePassword () {
  var passLengthResponse = passLength()
  var addUpperCharsResponse = addUpperChars()
  var addLowerCharsResponse = addLowerChars()
  var addNumCharsResponse = addNumChars()
  var addSpecCharsResponse = addSpecChars()

  var createPassword = function () {
    for (var i = 0; i < passLengthResponse; i++) {
      // randomly select from upper, lower, numeric, and special char arrays
      var charArrayChoice = charChoices[Math.floor(Math.random() * charChoices.length)]
      // charArrayChoice contains the element itself, not the index num, use indexOf
      var charIndex = charChoices.indexOf(charArrayChoice)
      var chosenChar = charChoices[charIndex][Math.floor(Math.random() * charChoices[charIndex].length)]
      newPassword = newPassword + chosenChar
    }
  }

  if (addUpperCharsResponse && addLowerCharsResponse && addNumCharsResponse && addSpecCharsResponse) {
    createPassword()
  }
  else if (!addUpperCharsResponse && addLowerCharsResponse && addNumCharsResponse && addSpecCharsResponse) {
    charChoices.splice(0, 1)
    createPassword()
  }
  else if (!addUpperCharsResponse && !addLowerCharsResponse && addNumCharsResponse && addSpecCharsResponse) {
    // remove upper and lower
    charChoices.splice(0, 2)
    createPassword()
  }
  else if (!addUpperCharsResponse && !addLowerCharsResponse && !addNumCharsResponse && addSpecCharsResponse) {
    // remove upper, lower, and num
    charChoices.splice(0, 3)
    createPassword()
  }
  else if (addUpperCharsResponse && !addLowerCharsResponse && !addNumCharsResponse && !addSpecCharsResponse) {
    // remove lower, num, and special
    charChoices.splice(1, 3)
    createPassword()
  }
  else if (addUpperCharsResponse && addLowerCharsResponse && addNumCharsResponse && !addSpecCharsResponse) {
    // remove special
    charChoices.splice(3, 1)
    createPassword()
  }
  else if (!addUpperCharsResponse && addLowerCharsResponse && addNumCharsResponse && !addSpecCharsResponse) {
    // remove upper and special
    charChoices.splice(0, 1)
    charChoices.splice(2, 1)
    createPassword()
  }
  else if (!addUpperCharsResponse && !addLowerCharsResponse && addNumCharsResponse && !addSpecCharsResponse) {
    // remove upper, lower, and special
    charChoices.splice(0, 2)
    charChoices.splice(1, 1)
    createPassword()
  }
  else if (addUpperCharsResponse && addLowerCharsResponse && !addNumCharsResponse && !addSpecCharsResponse) {
    // remove num and special
    charChoices.splice(2, 2)
    createPassword()
  }
  else if (!addUpperCharsResponse && addLowerCharsResponse && !addNumCharsResponse && !addSpecCharsResponse) {
    // remove upper, num, and special
    charChoices.splice(0, 1)
    charChoices.splice(1, 2)
    createPassword()
  }
  else if (addUpperCharsResponse && !addLowerCharsResponse && addNumCharsResponse && !addSpecCharsResponse) {
    // remove lower and special
    charChoices.splice(1, 1)
    charChoices.splice(2, 1)
    createPassword()
  }
  else if (!addUpperCharsResponse && addLowerCharsResponse && !addNumCharsResponse && addSpecCharsResponse) {
    // remove upper and num
    charChoices.splice(0, 1)
    charChoices.splice(1, 1)
    createPassword()
  }
  else if (addUpperCharsResponse && !addLowerCharsResponse && !addNumCharsResponse && addSpecCharsResponse) {
    // remove lower and num
    charChoices.splice(1, 2)
    createPassword()
  }
  else if (addUpperCharsResponse && addLowerCharsResponse && !addNumCharsResponse && addSpecCharsResponse) {
    // remove num
    charChoices.splice(2, 1)
    createPassword()
  }
  else if (addUpperCharsResponse && !addLowerCharsResponse && addNumCharsResponse && addSpecCharsResponse) {
    // remove lower
    charChoices.splice(1, 1)
    createPassword()
  }
  else if (!addUpperCharsResponse && !addLowerCharsResponse && !addNumCharsResponse && !addSpecCharsResponse) {
    alert('Let\'s try that again, shall we? You must include at least one criteria option.')
    writePassword()
  }

  return newPassword
}

// Write password to the #password input
function writePassword () {
  var password = generatePassword()

  var passwordText = document.querySelector('#password')
  passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
