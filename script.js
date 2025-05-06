let secret = generateSecret();
let guessesHistory = [];

//generování čtyř čísel
function generateSecret() {
    let digits = [];
    while (digits.length < 4) {
        let n = Math.floor(Math.random() * 10);
        if (!digits.includes(n)) digits.push(n);
    }
    return digits;
}

function checkGuess() {
    // uživatel zadá
    const guess = [
        +document.getElementById("n0").value,
        +document.getElementById("n1").value,
        +document.getElementById("n2").value,
        +document.getElementById("n3").value
    ];

    //pokud stejná error
    if (new Set(guess).size !== 4 || guess.some(isNaN)) {
        document.getElementById("result").innerText = "Zadej 4 různá čísla!";
        return;
    }

    let bulls = 0;
    let cows = 0;

    //rozdělení cows bulls
    for (let i = 0; i < 4; i++) {
        if (guess[i] === secret[i]) {
            bulls++;
        } else if (secret.includes(guess[i])) {
            cows++;
        }
    }

    //výpis
    const resultText = `Bulls: ${bulls}, Cows: ${cows}`;
    const history = `Bulls: ${bulls}, Cows: ${cows}, Number: ${guess.join("")}`;
    document.getElementById("result").innerText = resultText;

    guessesHistory.push(history);
    updateHistory();

    // výhra
    if (bulls === 4) {
        alert("Gratuluji! Uhodl jsi číslo!");
        secret = generateSecret();
        guessesHistory = [];
        updateHistory();
    }
}

// zaznamenávání pokusů
function updateHistory() {
    const historyDiv = document.getElementById("history");
    
    historyDiv.innerHTML = "<strong>Historie tipů:</strong><br>" + guessesHistory.join("<br>");
}