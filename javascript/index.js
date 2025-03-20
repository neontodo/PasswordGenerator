let length;
let lowerCase;
let upperCase;
let number;
let symbol;

let password = "";

document.getElementById("generateBtn").onclick = function() {
    length = document.getElementById("passLength").value;
    if(length < 4 || isNaN(length)) {
        window.alert("Password needs length of at least 4!");
    } else {
        lowerCase = Boolean(document.getElementById("lowerCaseBox").value);
        upperCase = Boolean(document.getElementById("upperCaseBox").value);
        number = Boolean(document.getElementById("numberBox").value);
        symbol = Boolean(document.getElementById("symbolBox").value);

        console.log(lowerCase);

        password = generatePassword(length, lowerCase, upperCase, number, symbol);
    }
}

function generatePassword(length, lowerCase, upperCase, number, symbol) {
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseLetters = lowerCaseLetters.toUpperCase();
    const numbers = "0123456789";
    const symbols = ",./[]-=_+!@#$%^&*(){}:<>?`~"
    let allowedCharacters="";

    allowedCharacters += lowerCase ? lowerCaseLetters : "";
    allowedCharacters += upperCase ? upperCaseLetters : "";
    allowedCharacters += number ? numbers : "";
    allowedCharacters += symbol ? symbols : "";

    for(let i=0; i<length; i++) {
        password += allowedCharacters.charAt(Math.floor(Math.random() * allowedCharacters.length))
    }

    console.log(`Password: ${password}`);

    document.getElementById("resultText").textContent = password;
    document.getElementById("resultText").style.visibility = "visible";
    console.log(`Password generated is: ${password}`);
}