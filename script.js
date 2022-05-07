const lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%*&(){}[]=<>/,.";


const passwordTxt = document.getElementById("password");
const length = document.getElementById("passwordLength");
const docSymbols = document.getElementById("symbols");
const docNumbers = document.getElementById("numbers");
const docUpper = document.getElementById("upperCase");
const genPasswordBtn = document.getElementById("generate");


genPasswordBtn.addEventListener("click", () => {
    let characters = lowerAlpha;

    if (docUpper.checked) {
        characters += upperAlpha;
    } else {
        characters += "";
    }
    if (docNumbers.checked) {
        characters += numbers;
    } else {
        characters += "";
    }
    if (docSymbols.checked){
        characters += symbols;
    } else {
        characters += "";
    }

    passwordTxt.value = generatePassword(length.value, characters);
});


const generatePassword = (length, characters) => {
    let password = "";
    for (let i = 0; i < length; i++) {
        password += characters.charAt(
        Math.floor(Math.random() * characters.length)
        );
    }
    return password;
};


const copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordTxt.value);
    alert("Password Copied");
});

