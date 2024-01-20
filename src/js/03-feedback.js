
import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
console.log(form);

const localStorageKey = "feedback-form-state";
const localStorageEmail = localStorage.getItem(localStorageKey) ?? "" ;
const localStorageMessage  = localStorage.getItem(localStorageKey) ?? "";
form.elements.email.value = localStorageEmail;
form.elements.message.value = localStorageMessage;
console.log(localStorageEmail);
console.log(localStorageMessage);

form.addEventListener("input", throttle((evt) => {
    console.log('Callback called!')
    localStorage.setItem(localStorageKey, evt.target.value);
}), 500);

form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    console.log( {email: localStorageEmail, message: localStorageMessage} )
    if(localStorageEmail === '' || localStorageMessage === ''){
        return alert ("Input your email and feedback!");
    }
    localStorage.removeItem(localStorageKey);
    form.reset();
});