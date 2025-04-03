let numberOfDice = parseInt(prompt("Enter the number of dice:"));
let targetSum = parseInt(prompt("Enter the sum of eye numbers of interest:"));
let totalRolls = 10000;
let successfulRolls = 0;

//nested loop, simulation rolling dices
for (let i = 0; i < totalRolls; i++) {
    let currentSum = 0;

    //roll dice and calculate sum
    for (let j = 0; j < numberOfDice; j++) {
        currentSum += Math.floor(Math.random() * 6) + 1;//Roll dice 1-6
    }
    if (currentSum === targetSum) {successfulRolls++;}
}

let probability = (successfulRolls / totalRolls) * 100;

document.body.innerHTML = `Probability to get sum ${targetSum} with ${numberOfDice} dice is ${probability.toFixed(2)}%.`;