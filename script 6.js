// print
console.log("Hello from Javascript");

// variable
let name = "Rahim";
console.log(name);

name = "Karim";
console.log(name);

// constant variable
const university = "UIU";
// university = "UIUv2"; // Cannot reassign a const variable
console.log(university);

// if-else
if (name == "Rahim") {
    console.log("valid user");
} else {
    console.log("invalid user");
}

let marks = 75;

if (marks >= 90) {
    console.log("A");
} else if (marks >= 80 && marks < 90) {
    console.log("A-");
} else if (marks >= 70 && marks < 80) {
    console.log("B+");
} else if (marks >= 60 && marks < 70) {
    console.log("B");
} else {
    console.log("F");
}

// equality
console.log(5 == 5);
console.log("5" == 5);       // loose equality: checks value
console.log("5" === 5);      // strict equality: checks value and data type
console.log("5" === "5");
console.log("5" === ".5");

// loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// function
function greet(person_name) {
    console.log("Hi,", person_name);
}

greet("Fahim");

function greetv2(person_name) {
    return "Hi, " + person_name;
}

console.log(greetv2("Zero"));

// password
let password = "abc@123";

console.log(password.toUpperCase());
console.log(password.includes("@"));

console.log(/[a-z]/.test(password));
console.log(/[A-Z]/.test(password));
console.log(/[0-9]/.test(password));
console.log(/[@#!$%&*_]/.test(password));

// password strength
function checkStrength(pass) {
    let score = 0;

    if (pass.length > 8) {
        score += 20;
    }

    if (/[a-z]/.test(pass)) {
        score += 10;
    }

    if (/[A-Z]/.test(pass)) {
        score += 10;
    }

    if (/[0-9]/.test(pass)) {
        score += 15;
    }

    if (/[@#!$%&*_]/.test(pass)) {
        score += 20;
    }

    return score;
}

console.log(checkStrength("hello@1234"));

// check password from HTML input
function checkPassword() {
    const passwordInput = document.getElementById("inputPassword");
    const result = document.getElementById("result");

    if (!passwordInput || !result) {
        console.error("Required HTML elements were not found.");
        return;
    }

    const userPassword = passwordInput.value;
    const passwordScore = checkStrength(userPassword);

    result.innerHTML = "Password Strength is " + passwordScore;
}

// button
const btnPasswordCheck = document.getElementById("inputBtn");

if (btnPasswordCheck) {
    btnPasswordCheck.addEventListener("click", checkPassword);
}