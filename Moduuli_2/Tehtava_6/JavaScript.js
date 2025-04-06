function rollDice() {
    return Math.floor(Math.random() * 6) + 1;  // Returns a number between 1 and 6
}

function main() {
    const results = [];
    let roll;

    //Roll the dice until the result is 6
    do {
        roll = rollDice();
        results.push(roll);
    } while (roll !== 6);
    
    //Create unordered list to display the results
    const ul = document.createElement('ul');
    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = `Rolled: ${result}`;
        ul.appendChild(li);
    });

    //Append unordered list to the body
    document.body.appendChild(ul);
}
main();