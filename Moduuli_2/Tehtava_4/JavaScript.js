let numbers = [];

//Prompt to enter numbers until zero is entered
while (true) {
    let input = parseInt(prompt("Enter a number (0 to stop):"));
    
    //Break the loop if the input is zero
    if (input === 0) {
        break;
    }
    numbers.push(input);
}
//sort in descending order
numbers.sort((a, b) => b - a);

console.log("Numbers in descending order:", numbers);