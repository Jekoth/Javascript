let targetElem = document.querySelector('#target');

targetElem.innerHTML = `
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
`;

targetElem.classList.add(`my-list`);
console.log(targetElem.innerHTML);