function even(array) {
    const evenNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) { // Checks if the number is even
            evenNumbers.push(array[i]); //add to array
        }
    }
    return evenNumbers;
}
const numbers = [2, 7, 4];

//Funktion to get even numbers
const evenArray = even(numbers);

//Prints original and new array
console.log("Original array: ", numbers);
console.log("Array of even numbers: ", evenArray);