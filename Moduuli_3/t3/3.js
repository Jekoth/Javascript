//Defines array, select elem by its ID "target".
// Loop through each name in the array and append to the htmlContent string
'use strict';
const names = ['John', 'Paul', 'Jones'];

let target = document.getElementById("target");

let htmlContent = '';

for (let i = 0; i < names.length; i++) {
    htmlContent += '<li>' + names[i] + '</li>';
}

target.innerHTML = htmlContent;