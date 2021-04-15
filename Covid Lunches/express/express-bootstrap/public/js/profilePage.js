const NEW_PASS = 0,
    CONFIRM_PASS = 1,
    PASS_FORMAT = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/

document.getElementById('save-button').addEventListener('click', validatePassword);

// validate password
function validatePassword() {
    // grab the password input field
    let newPassField = document.getElementById('new-pass'),
        errorMessage = '',
        errorType = 'pass-alert',
        parentElement = 'new-password',
        childElement = 'new-pass',
        compareError = 'unmatched-password'

    if (newPassField.value.match(PASS_FORMAT)) {
        clearError(errorType);
        comparePasswords();
    } else if (newPassField.value == '') {
        // remove password compare errors, if any; password validation errors take precedence
        clearError(compareError);
        errorMessage = 'Please enter a password.';
    } else {
        // remove password compare errors, if any; password validation errors take precedence
        clearError(compareError);
        errorMessage = 'Password must be 8 to 16 characters and contain at least one numeric digit and a special character.';
    }
    clearError(errorType);
    showError(errorMessage, errorType, parentElement, childElement);
    return true;
}


function comparePasswords() {
    /* 
    compare the newly set password to the reentered, newly set password
    example:
        new password: abcd123
        confirm pass: abcd123
        success!
    */
    let newPassField = document.getElementById('new-pass');
    let confirmnewPassField = document.getElementById('confirm-pass');

    let errorMessage = 'Passwords must match',
        errorType = 'unmatched-password',
        parentElements = ['new-password', 'confirm-password'],
        childElements = ['new-pass', 'confirm-pass'];

    if (newPassField.value != confirmnewPassField.value) {
        showError(errorMessage, errorType, parentElements[NEW_PASS], childElements[NEW_PASS]);
        showError(errorMessage, errorType, parentElements[CONFIRM_PASS], childElements[CONFIRM_PASS]);
    } else {
        clearError(errorType);
    }
}

// display error message
function showError(errorMessage, errorType, parentElement, childElement) {
    errorDivs = document.getElementsByClassName(`${errorType}`);
    // only show the errors if there aren't any being showed already
    if ((errorType == 'unmatched-password' && errorDivs.length <= 1) || (errorType == 'pass-alert' && errorDivs.length == 0)) {
        // create a div
        const errorDiv = document.createElement('div');
        errorDiv.className = `${errorType} alert-danger`;

        // get elements
        const inputField = document.querySelector(`#${childElement}`);

        // create text node and append to div
        errorDiv.appendChild(document.createTextNode(errorMessage));
        errorDiv.style.color = 'red';

        // insert error message above input field
        document.querySelector(`.${parentElement}`).insertBefore(errorDiv, inputField);
    }
}

function clearError(errorType) {
    errorDivs = document.getElementsByClassName(`${errorType}`);

    if (errorDivs.length > 0) {
        // remove all error messages
        for (let i = errorDivs.length - 1; i >= 0; i--) {
            errorDivs[i].remove();
        }
    }
}