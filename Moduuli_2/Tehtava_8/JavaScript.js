function concat(array) {
    let result = "";
    for (let i = 0; i < array.length; i++) {
        result += array[i]; //Combine each string from the array
    }
    return result;
}

const names = ["Johnny", "DeeDee", "Joey", "Marky"];

//Call funktion for result
const combineString = concat(names);

// Print the result to the HTML document
document.addEventListener("DOMContentLoaded", function() {
    const resultElement = document.createElement('p'); //Create <p> element
    resultElement.textContent = combineString; //Set the combined string as its content
    document.body.appendChild(resultElement); //Append <p> to the body
});