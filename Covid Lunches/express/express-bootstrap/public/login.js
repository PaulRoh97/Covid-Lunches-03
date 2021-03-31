// get the modal
let modal = document.getElementById("modal");
// get the element that is not the login form
let container = document.getElementById("container");
// get the button that opens the login form
let loginBtn = document.getElementById("login-btn");
// grab the login button
let loginFormBtn = document.getElementById('login-form-btn');

// open the pop-up login form when the user clicks on the login button
loginBtn.onclick = function () {
    modal.style.display = "block";
}

// close the login form when user clicks outside of it
window.onclick = function (event) {
    if (event.target == container) {
        modal.style.display = "none";
    }
}

loginFormBtn.onclick = function () {
    validateEmail();
    validatePassword();
}

// validate email address
function validateEmail () {
    
    let emailField = document.getElementById('email');
    let mailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailField.value.match(mailFormat)) {
        clearEmailError();
    } else if (emailField.value == '') {
        let message = 'Please enter an email address.';
        showError(message, 'email-alert', 'email')
    } else {
        let message = 'Invalid email address. Please try again.';
        showError(message, 'email-alert', 'email')
    }
}

// validate password
function validatePassword () {
    
    let passField = document.getElementById('password');
    let passFormat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

    if (passField.value.match(passFormat)) {
        clearPasswordError();
    } else if (passField.value == '') {
        let message = 'Please enter a password.';
        showError(message, 'pass-alert', 'password');
    } else {
        let message = 'Password must be 7 to 15 characters and contain at least one numeric digit and a special character.';
        showError(message, 'pass-alert', 'password');
    }
}

// display error message
function showError(errorMessage, errorType, element) {
    // create a div
    const errorDiv = document.createElement('div');
    errorDiv.className = `${errorType} alert-danger`;

    // get elements
    const card = document.querySelector(`.${element}`);
    const inputField = document.querySelector(`#${element}`);

    // create text node and append to div
    errorDiv.appendChild(document.createTextNode(errorMessage));
    errorDiv.style.color = 'red';
    errorDiv.style.marginBottom = "10px"
    // errorDiv.style.fontSize = 'small';
    // insert error message above input field
    card.insertBefore(errorDiv, inputField);

    // clear error
    if (document.getElementsByClassName('pass-alert').length > 1) {
        console.log('Greater than 1');
        clearPasswordError();
    }
    if (document.getElementsByClassName('email-alert').length > 1) {
        console.log('Greater than 1');
        clearEmailError();
    }
}

function clearEmailError() {
    if (document.getElementsByClassName('email-alert').length >= 1) {
        document.querySelector('.email-alert').remove();
    }
}

function clearPasswordError () {
    if (document.getElementsByClassName('pass-alert').length >= 1) {
        document.querySelector('.pass-alert').remove();
    }
}