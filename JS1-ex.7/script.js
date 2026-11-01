const diceCount = Number(prompt("How many dice?"));

let sum = 0;

for (let i = 0; i < diceCount; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    sum = sum + roll;    
}

document.body.innerHTML = `Sum of dice rolls: ${sum}`;

