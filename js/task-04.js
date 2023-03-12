const counter = document.querySelector(`#counter`);

const counterButtons = counter.querySelectorAll(`button`);


console.log(counterButtons[0]);
console.log(counterButtons[1]);

counterButtons[0].addEventListener('click', () => {
    const  counterValue = counter.querySelector(`#value`);
    return counterValue.textContent -= 1;
});

counterButtons[1].addEventListener('click', () => {
    const counterValue = counter.querySelector(`#value`);
    const parsedCounterValue = parseInt(counterValue.textContent);
    return counterValue.textContent = parsedCounterValue + 1;
});



