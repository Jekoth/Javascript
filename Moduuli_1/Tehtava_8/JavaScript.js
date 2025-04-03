let startYear = parseInt(prompt("Enter the start year:"));
let endYear = parseInt(prompt("Enter the end year:"));
let leapYears = "";

for (let year = startYear; year <= endYear; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        leapYears += `<li>${year}</li>`;
    }
}
if (leapYears) {
    document.body.innerHTML = `<ul>${leapYears}</ul>`;
} else {
    document.body.innerHTML = `<p>No leap years found in the given interval.</p>`;
}