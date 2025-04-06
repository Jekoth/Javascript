function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;  //return a number between 1 and sides
}

// Main program
function main() {
    //Ask user for the number of sides on the dice
    const sides = parseInt(prompt("Enter the number of sides on the dice:"), 10);

    if (isNaN(sides) || sides <= 0) {
        alert("Please enter a valid number greater than 0.");
        return;
    }

    const results = []; // Array to hold the results of each roll
    let roll;

    //Roll dice until the result is equal to the number of sides
    do {
        roll = rollDice(sides);
        results.push(roll);
    } while (roll !== sides);
    
    //Create unordered list to display results
    const ul = document.createElement('ul');
    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = `Rolled: ${result}`;
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
}

main();