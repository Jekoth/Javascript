const form = document.getElementById('source');
const targetParagraph = document.getElementById('target');

form.addEventListener('submit', function(event) {
    //Prevent default form submission
    event.preventDefault();

    //Select input elements using attribute selectors
    const firstName = form.querySelector('input[name="firstname"]').value;
    const lastName = form.querySelector('input[name="lastname"]').value;

    //Print output
    targetParagraph.textContent = `Your name is ${firstName} ${lastName}`;
});