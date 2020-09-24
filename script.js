// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// variables
var uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lowercase = "qwertyuiopasdfghklzxcvbnm";
var specialChar = "~!@#$%&-+=_";
var number = "0123456789";
approvedChars = ""

//generate actual password that will appear in #password input
function generatePassword() {

    var pwLength = prompt("Please pick the length of your password. Select a value between 8 and 128. ");
    if (pwLength !== null); {
      console.log(pwLength);
    }
    while (pwLength <= 8 || pwLength >= 128) {
      alert("Invalid entry. Please try again. :( ");
      var pwLength = prompt("Please pick the length of your password. Select a value between 8 and 128. ");
      console.log(pwLength);

      return pwLength
    }
  // gather pw criteria to generate approvedChars
  pwCriteria()
  

  function pwCriteria() {
    uppercasePw = confirm("Use uppercase characters?");
    if (uppercasePw === true) { approvedChars += uppercase

    }
    lowercasePw = confirm("Use lowercase characters?");
    if (lowercasePw === true) { approvedChars += lowercase

    }
    specialCharPw = confirm("Use special characters?");
    if (specialCharPw === true) { approvedChars += specialChar

    }
    numberPw = confirm("Use numbers?");
    if (numberPw === true) { approvedChars += number

    }
    
    if (approvedChars.length === 0) {
      alert("Selections are needed to define password criteria. Please try again. ");
    pwCriteria()

    } 
   console.log (approvedChars.length)
  }
  
}    

//   var password = ""

//  // Looping through each item in the array and alerting the result
//   for (var i = 0; i < pwLength ; i++) {
//   password = password + approvedChars[Math.floor(Math.random() * approvedChars.length)];
// }

// Add event listener to generate button action
generateBtn.addEventListener("click", writePassword);

