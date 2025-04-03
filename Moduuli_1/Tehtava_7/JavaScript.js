let numberOfDice = parseInt(prompt("Enter the number of dice rolls:"));
let sum = 0;

for (let i = 0; i < numberOfDice; i++) { //If "i" number is zero, roll dices until input number of dices
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    sum += diceRoll;
}

document.body.innerHTML = `The sum of the dice rolls is: ${sum}.`;