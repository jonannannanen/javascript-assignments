const numbers = [];

while (true) {
    const number = Number(prompt("Enter a number:"));

    if (numbers.includes(number)) {
        console.log("You already gave the number.");
        break;
    }
    numbers.push(number);
}

numbers.sort((a, b) => a - b);

console.log(numbers);
