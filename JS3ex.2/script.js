const names = [];

const participants = Number(prompt("How many participants?"));

for (let i = 0; i < participants; i++) {
    const name = prompt("Enter participants name:");
    names.push(name);
}

names.sort();

let list = "<ol>";

for (const name of names) {
    list += `<li>${name}</li>`
}

list += "</ol>"

document.body.innerHTML = list;
