const numbers = [];

while (true) {
    const number = Number(prompt("Enter a number. Press 0 to quit."));

    if (number === 0) {
        break;
    }

    numbers.push(number);
}


numbers.sort((a, b) => b - a);

console.log(numbers);
