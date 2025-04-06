let numbers = [];

//prompt the user for numbers
function promptForNumbers() {
    while (true) {
        let input = prompt("Enter a number:");

        //Check if the input is not null
        if (input === null) {
            console.log("No input provided. Exiting the program.");
            return; // Exit the program if cancel is pressed
        }

        //Convert input to float
        let number = parseFloat(input);

        //Check if number has been already entered
        if (numbers.includes(number)) {
            console.log(`The number ${number} has already been given.`);
            break;
        }
        numbers.push(number);
    }
    numbers.sort((a, b) => a - b);

    console.log("Given numbers in ascending order:", numbers);
}

promptForNumbers();