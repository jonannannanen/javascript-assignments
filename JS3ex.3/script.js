const names = [];

for (let i = 0; i < 6; i++) {
    const name = prompt("Enter dog name:");
    names.push(name);
}

names.sort();

let list = "<ul>";

for (const name of names) {
    list += `<li>${name}</li>`;
}

list += "</ul>"

document.body.innerHTML = list;