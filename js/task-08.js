const form = document.querySelector(".login-form");

form.addEventListener('submit', SubmitEvent);

function SubmitEvent(event) {
    event.preventDefault();
    if (form.email.value === '' || form.password.value === '' ) {
        alert(`Заполните все поля`)
    }
    console.log(`e-mail: ${form.email.value} password: ${form.password.value}`);
}