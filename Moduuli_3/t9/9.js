const input = document.getElementById('calculation');
const resultParag = document.getElementById('result');
const button = document.getElementById('start');

button.addEventListener('click', function () {
  const value = input.value.trim();//remove spaces from input
  let num1, num2, result;

  if (value.includes('+')) {
    [num1, num2] = value.split('+');
    result = parseInt(num1) + parseInt(num2);
  } else if (value.includes('-')) {
    [num1, num2] = value.split('-');
    result = parseInt(num1) - parseInt(num2);
  } else if (value.includes('*')) {
    [num1, num2] = value.split('*');
    result = parseInt(num1) * parseInt(num2);
  } else if (value.includes('/')) {
    [num1, num2] = value.split('/');

    if (parseInt(num2) === 0) {
      resultParag.textContent = 'Error: division by zero';
      return;
    }

    result = Math.floor(parseInt(num1) / parseInt(num2));

    if (result === 0) {
      resultParag.textContent = 'Error';
      return;
    }

  }

  else {
    resultParag.textContent = 'Invalid input. Use +, -, * or / ';
    return;
  }

  if (isNaN(result)) {
    resultParag.textContent = 'Please enter valid integers';
  }
  else {
    resultParag.textContent = 'Result: ' + result;
  }

});