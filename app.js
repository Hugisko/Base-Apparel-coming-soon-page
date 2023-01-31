const submit = document.querySelector(".submit");
const error_message = document.querySelector(".error-message");
const exclamation = document.querySelector(".exclamation");
const email_input = document.getElementById("email");
const pattern = /^[A-Za-z0-9._+-]+[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;

submit.addEventListener("click", () => {
    if(email_input.value === "" || !pattern.test(email_input.value)){
        error_message.style.display = "block";
        error_message.textContent = "Please provide a valid email";
        error_message.style.color = "hsl(0, 93%, 68%)";
        exclamation.style.display = "block";
        email_input.style.border = "3px solid hsl(0, 93%, 68%)";
    }
    else {
        exclamation.style.display = "none";
        error_message.style.display = "block";
        error_message.textContent = "Successful submit";
        error_message.style.color = "green";
        email_input.style.border = "1px solid hsl(0, 36%, 70%)";
    }
});