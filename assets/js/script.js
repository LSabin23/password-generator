// Assignment Code
var generateBtn = document.querySelector('#generate')

// Write password to the #password input
function writePassword () {
  var password = generatePassword() {
    // length prompt: 8 to 128 characters, validate input


    // character type prompt: uppercase


    // character type prompt: lowercase


    // character type prompt: numeric


    // character type prompt: special


  }

  var passwordText = document.querySelector('#password')
  passwordText.value = password

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
