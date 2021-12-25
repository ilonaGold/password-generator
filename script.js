const empty = "",
    upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase = "abcdefghijklmnopqrstunvwyz",
    num = "0123456789",
    symbol = "!@#$%^&*()_-=+{}[]|:;'<>,.?";

const password = document.getElementById("password"),
    copy = document.getElementById("copy"),
    pLength = document.getElementById("p-length"),
    pUpperCase = document.getElementById("p-uppercase"),
    pLowerCase = document.getElementById("p-lowercase"),
    pNum = document.getElementById("p-number"),
    pSymbol = document.getElementById("p-symbol"),
    submit = document.getElementById("submit");


submit.addEventListener("click", () => {
    let initialPassword = empty;
    pUpperCase.checked ? (initialPassword += upperCase) : "";
    pLowerCase.checked ? (initialPassword += lowerCase) : "";
    pNum.checked ? (initialPassword += num) : "";
    pSymbol.checked ? (initialPassword += symbol) : "";

    password.value = generatePassword(pLength.value, initialPassword);
});


function generatePassword(len, initialPassword) {
    let pass = "";
    for(let i = 0; i < len; i++) {
        pass += initialPassword.charAt(
            Math.floor(Math.random() * initialPassword.length)
        );
    }
    return pass;
}


copy.addEventListener("click", () => {
    if(password.value === "") {
        alert("Please generate a password")
    } else {
        password.select();
        document.execCommand("copy");
        alert("Password has been copied to clipboard");
    }
});

