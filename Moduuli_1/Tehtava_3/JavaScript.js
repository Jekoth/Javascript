let num1 = parseInt(prompt("Enter first integer:"));
let num2 = parseInt(prompt("Enter second integer:"));
let num3 = parseInt(prompt("Enter third integer:"));

let sum = num1 + num2 + num3;
let product = num1 * num2 * num3;
let average = sum / 3;

document.body.innerHTML = `
    <h1>Results</h1>
    <p>Sum: ${sum}</p>
    <p>Product: ${product}</p>
    <p>Average: ${average}</p>`;