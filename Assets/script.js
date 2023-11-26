function generatePassword() {
  var multiSelect = "";

  // This checks which checkboxes have been selected
  var uppercase = document.querySelector("#includeUppercase").checked;
  var lowercase = document.querySelector("#includeLowercase").checked;
  var numbers = document.querySelector("#includeNumbers").checked;
  var symbols = document.querySelector("#includeSymbols").checked;
  var keyLength = parseInt(document.querySelector("#passwordLength").value, 10);

  // This defines character sets. Can customize!
  var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseABC = "abcdefghijklmnopqrstuvwxyz";
  var specialSymbols = "!@#$%^&*()?.<>|=:;,[-_]";
  var numeric = "0123456789";

  // This checks if at least one character type is selected
  if (!uppercase && !lowercase && !symbols && !numbers) {
    return "Your password does not meet the password criteria";
  }

  if (lowercase) { multiSelect += lowercaseABC; }
  if (uppercase) { multiSelect += uppercaseABC; }
  if (numbers) { multiSelect += numeric; }
  if (symbols) { multiSelect += specialSymbols; }

  // This generates the password
  let finalPassword = "";
  for (let i = 0; i < keyLength; i++) {
    let rng = Math.floor(Math.random() * multiSelect.length);
    finalPassword += multiSelect.charAt(rng);
  }

  return finalPassword;
}

// This writes password to the textarea
function writePassword() {
  var password = generatePassword();
  var passwordTextArea = document.querySelector("#password");
  passwordTextArea.value = password; // Update placeholder text
}

// Event listener for the generate password button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

