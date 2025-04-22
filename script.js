let secret = generateSecret();

function generateSecret() {
    let digits = [];
    while (digits.length < 4) {
        let n = Math.floor(Math.random() * 10);
        if (!digits.includes(n)) digits.push(n);
    }
    return digits;
}

function checkGuess() {
    const guess = [
        +document.getElementById("n0").value,
        +document.getElementById("n1").value,
        +document.getElementById("n2").value,
        +document.getElementById("n3").value
    ];

    if (new Set(guess).size !== 4 || guess.some(isNaN)) {
        document.getElementById("result").innerText = "Zadej 4 různá čísla!";
        return;
    }

    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
        if (guess[i] === secret[i]) {
            bulls++;
        }
        else if (secret.includes(guess[i])) {
            cows++;
        }
    }

    document.getElementById("result").innerText =
        `Bulls: ${bulls}, Cows: ${cows}`;

    if (bulls === 4) {
        alert("Gratuluji! Uhodl jsi číslo!");
        secret = generateSecret(); // Nové číslo
    }
}