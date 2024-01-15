const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
   
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    


    if ( email === "" || password === "") {
        alert ("Fill in the fields of the form");
    }
    else {
        const formData = {
            email: email,
            password: password
        };
        console.log(formData);
        console.log(`Thank you for creating your account`);
        form.reset();
    }
}

