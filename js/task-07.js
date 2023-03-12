const input = document.querySelector('#font-size-control');
const output = document.querySelector('#text');


// console.log(input.value);

input.addEventListener('input', (event) => {
    output.style.fontSize = event.currentTarget.value + 'px';
});