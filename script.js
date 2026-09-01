const TARGET_SCORE = 100;

let attempts = 0;


function calculateStrength(password) {

    let score = 0;

    if (password.length >= 6) {
        score += Math.floor(password.length / 2) * 10;
    }

    if (/[A-Z]/.test(password)) {
        score += 15;
    }

    if (/[a-z]/.test(password)) {
        score += 15;
    }

    if (/[0-9]/.test(password)) {
        score += 20;
    }


    if (/[!@#$%^&*]/.test(password)) {
        score += 25;
    }

    let strength;

    if (score <= 30) {
        strength = "Very Weak";
    }
    else if (score <= 50) {
        strength = "Weak";
    }
    else if (score <= 70) {
        strength = "Medium";
    }
    else if (score <= 90) {
        strength = "Strong";
    }
    else {
        strength = "Very Strong";
    }


    return {
        score: score,
        strength: strength
    };
}


function checkStrength() {

    const password = document.getElementById("password").value;
    attempts++;


    if (password.length === 0) {

        document.getElementById("result").innerHTML = `
            <p class="warning">Please enter a password.</p>
            <p>Attempts: ${attempts}</p>
        `;

        return;
    }


    const result = calculateStrength(password);

    const score = result.score;
    const strength = result.strength;

    if (score >= TARGET_SCORE) {

        document.getElementById("result").innerHTML = `
            <p class="success">Perfect Password!</p>
            <p><strong>Score:</strong> ${score}/100+</p>
            <p><strong>Strength:</strong> Very Strong</p>
            <p><strong>Attempts:</strong> ${attempts}</p>
        `;

        return;
    }

    let message = `
        <p><strong>Password Strength:</strong> ${strength}</p>
        <p><strong>Score:</strong> ${score}/100</p>
        <p><strong>Attempts:</strong> ${attempts}</p>
    `;

    if (attempts > 8 && score < 71) {

        message += `
            <p class="warning">
                Need practice!
            </p>

            <div class="tips">
                <strong>Password Tips:</strong>
                <ul>
                    <li>Use at least 8 characters.</li>
                    <li>Use uppercase letters.</li>
                    <li>Use lowercase letters.</li>
                    <li>Include numbers.</li>
                    <li>Include special characters such as ! @ # $ %.</li>
                    <li>Avoid simple passwords like "abc123".</li>
                </ul>
            </div>
        `;
    }


    // Display result
    document.getElementById("result").innerHTML = message;
}