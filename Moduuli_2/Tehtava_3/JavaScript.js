let dogNames = [];

//Ask for name of six dogs
for (let i = 0; i < 6; i++) {
    let name = prompt(`Enter the name of dog ${i + 1}:`);
    dogNames.push(name);
}
dogNames.sort().reverse(); //Reverse sort

//unordered list to display dog names
let dogListHTML = "<ul>";
for (let name of dogNames) {
    dogListHTML += `<li>${name}</li>`;
}
dogListHTML += "</ul>";

document.getElementById('dog-list').innerHTML = dogListHTML;