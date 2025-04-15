//Select target elem by its ID, create list items and append the list items to the target elem
let target = document.getElementById("target");

let firstItem = document.createElement("li");
firstItem.textContent = "First item";
let secondItem = document.createElement("li");
secondItem.textContent = "Second item";
secondItem.classList.add("my-item");
let thirdItem = document.createElement("li");
thirdItem.textContent = "Third item";

target.appendChild(firstItem);
target.appendChild(secondItem);
target.appendChild(thirdItem);