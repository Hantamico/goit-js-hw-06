const input = document.querySelector(`#validation-input`);
const validValue = Number(input.dataset.length);
console.log(validValue);

input.addEventListener('blur', () => {
    console.log(input.value.length);
    if (input.value.length === validValue) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
    console.log(input.classList);
});


