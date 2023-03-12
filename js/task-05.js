const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

console.log(input.value);
console.log(output);

input.addEventListener('input', (event) => {
    output.textContent = event.currentTarget.value;

    if (input.value === '') {
    output.textContent = 'Anonymous';
    };
});


