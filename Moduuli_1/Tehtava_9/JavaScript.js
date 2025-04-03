let number = parseInt(prompt("Enter an integer:"));

function isPrime(num) {
    if (num < 2) return false;

    //Check for factors from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;//Not prime if divisible by any number other than 1 and itself
        }
    }
    return true;
}

let result = isPrime(number) ? `${number} is a prime number.` : `${number} is not a prime number.`;
document.body.innerHTML = `<h1>Prime Number Checker</h1><p>${result}</p>`;