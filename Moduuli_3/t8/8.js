const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operationSelect = document.getElementById('operation');
const resultParag = document.getElementById('result');
const button = document.getElementById('start');

button.addEventListener('click', function() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operation = operationSelect.value;
    let result;

    //if input is not a number
    if (isNaN(num1) || isNaN(num2)) {
        resultParag.textContent = 'Please enter valid numbers';
        return;
    }
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'multi':
            result = num1 * num2;
            break;
        case 'div':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                resultParag.textContent = 'Error: division by zero';
                return;
            }
            break;
        default:
            resultParag.textContent = 'Please select a valid operation';
            return;
    }
    resultParag.textContent = 'Result: ' + result;
});