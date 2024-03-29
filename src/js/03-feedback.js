
import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");
const btn = document.querySelector("button");
const LOCALSTOREAGE_KEY = "feedback-form-state";

const callbakSavedDataUser = () => {
    // implementam obiectul unde utilizatorul introduce date in campurile corespuzatoare. Obiectul va avea valori goale
    const objData = {
        email : input.value,
        message : textarea.value
    }
// salvam in local storage ceea ce utilizatorul va introduce, cum acesta accepta doar siruri de caractere transormam obiectul cu met JOSON.stringify
    localStorage.setItem(LOCALSTOREAGE_KEY, JSON.stringify(objData));
    console.log(objData);
};

// setam valorile elementelor pe baza datelor stocate in local strorage 
if(localStorage.length != 0)
    {
    // input.value = JSON.parse(localStorage.getItem(LOCALSTOREAGE_KEY)).email;
    // textarea.value = JSON.parse(localStorage.getItem(LOCALSTOREAGE_KEY)).message;
    const formData = JSON.parse(localStorage.getItem(LOCALSTOREAGE_KEY));
    console.log(formData);
    if (formData)
        {
        input.value = formData.email ?? "";
        textarea.value = formData.message ?? "";
        }
    };

    form.addEventListener('input', throttle((callbakSavedDataUser), 500));
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // Metoda test() testează o potrivire într-un șir.Dacă găsește o potrivire, returnează true, în caz contrar returnează false.
        if(!emailRegex.test(input.value)){
            return alert("Please enter a valid email address.");
        }
        const objData = {
            email: input.value,
            message: textarea.value
        };
        console.log(objData);

        console.log({email: input.value, message: textarea.value});
        
        if ( input.value === "" || textarea.value === "" ){
            return alert ("Input your email and feedback!");
        }
        localStorage.removeItem(LOCALSTOREAGE_KEY);
        form.reset();
    };
    form.addEventListener("submit", handleSubmit);
