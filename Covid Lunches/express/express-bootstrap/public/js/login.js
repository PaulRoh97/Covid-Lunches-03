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

// close the login form when user clicks outside of it and cleans up input fields
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        clearError('email-alert');
        clearError('pass-alert');
    }
}

// validate email and password upon login attempt
loginFormBtn.onclick = function () {
    validateEmail();
    validatePassword();
}

// validate email address
function validateEmail() {
    // grab the email input field
    let emailField = document.getElementById('email');
    let mailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errorMessage = '';

    if (emailField.value.match(mailFormat)) {
        clearError('email-alert');
        return true;
    } else if (emailField.value == '') {
        errorMessage = 'Please enter an email address.';
    } else {
        errorMessage = 'Invalid email address. Please try again.';
    }
    showError(errorMessage, 'email-alert', 'email');
    return false;
}

// validate password
function validatePassword() {
    // grab the password input field
    let passField = document.getElementById('password');
    let passFormat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    let errorMessage = '';

    if (passField.value.match(passFormat)) {
        clearError('pass-alert');
    } else if (passField.value == '') {
        errorMessage = 'Please enter a password.';
    } else {
        errorMessage = 'Password must be 8 to 16 characters and contain at least one numeric digit and a special character.';
    }
    showError(errorMessage, 'pass-alert', 'password');
    return true;
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

    // insert error message above input field
    card.insertBefore(errorDiv, inputField);

    // clear errors
    if (document.getElementsByClassName(errorType).length > 1) {
        clearError(errorType);
    }
}

function clearError(errorType) {
    if (document.getElementsByClassName(`${errorType}`).length >= 1) {
        document.querySelector(`.${errorType}`).remove();
    }
}