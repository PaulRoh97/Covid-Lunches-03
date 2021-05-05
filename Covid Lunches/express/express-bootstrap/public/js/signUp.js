const NEW_PASS = 0,
    CONFIRM_PASS = 1,
    MAIL_FORMAT = /^(([^<>()\[\]\\.,'{}?+-_!@#$%*;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    PASS_FORMAT = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*.]{8,26}$/

let path = window.location.pathname

if (path === '/sign-up') {
    document.getElementById('sign-up-button').addEventListener('click', (event) => {
        clearError('alert-danger')
        emptyFields = fieldsEmpty()
        emailValidated = validateEmail()
        passwordValidated = validatePassword()

        // if (!emptyFields && emailValidated && passwordValidated) {
        //     // save to database
        //     location.href = '/student-info'
        // }
        // prevent actually submitting the form if everything is not yet validated
        if (emptyFields || !emailValidated || !passwordValidated) {
            event.preventDefault()
        } else {
            location.href = '/student-info'
        }
    })
} else if (path === '/student-info') {
    document.getElementById('submit-button').addEventListener('click', (event) => {
        clearError('alert-danger')
        emptyFields = fieldsEmpty()
        if (emptyFields) {
            event.preventDefault()
        }
    })
}

function fieldsEmpty() {
    let inputFields = document.getElementsByTagName('input')
    let errorMessage = 'Please fill in all fields.',
        errorType = 'd-flex justify-content-center input-alert',
        parentElement = 'forms',
        childElement = 'first-form'

    // specifically check whether the state drop down hasn't been selected
    if (document.querySelector('.form-select').value === '---') {
        showError(errorMessage, errorType, parentElement, childElement)
        return true
    } else {
        // check if input fields are empty
        for (let i = 0; i < inputFields.length; i++) {
            if (inputFields[i].value === '') {
                showError(errorMessage, errorType, parentElement, childElement)
                return true
            }
        }
    }
    return false
}

function validateEmail() {
    let emailField = document.getElementById('email'),
        errorMessage = 'Invalid email address. Please try again.',
        errorType = 'email-alert',
        parentElement = 'email-address',
        childElement = 'email'

    if (emailField.value.match(MAIL_FORMAT))
        return true
    if (emailField.value !== '')
        showError(errorMessage, errorType, parentElement, childElement)
    return false
}

function validatePassword() {
    // grab the password input field
    let newPassField = document.getElementById('new-pass'),
        errorMessage = 'Password must be 8 to 26 characters and contain at least one numeric digit and a special character.',
        errorType = 'pass-alert',
        parentElement = 'new-password',
        childElement = 'new-pass'

    if (newPassField.value.match(PASS_FORMAT))
        return comparePasswords()
    if (newPassField.value !== '')
        showError(errorMessage, errorType, parentElement, childElement)
    return false
}

// ensure new password and confirm password match
function comparePasswords() {
    /* 
    compare the newly set password to the reentered, newly set password
    example:
        new password: abcd123
        confirm pass: abcd123
        success!
    */
    let newPassField = document.getElementById('new-pass')
    let confirmnewPassField = document.getElementById('confirm-pass')

    let errorMessage = 'Passwords must match',
        errorType = 'unmatched-password',
        parentElements = ['new-password', 'confirm-password'],
        childElements = ['new-pass', 'confirm-pass']

    if (newPassField.value != confirmnewPassField.value) {
        showError(errorMessage, errorType, parentElements[NEW_PASS], childElements[NEW_PASS])
        showError(errorMessage, errorType, parentElements[CONFIRM_PASS], childElements[CONFIRM_PASS])
        return false
    }
    return true
}

// display error message
function showError(errorMessage, errorType, parentElement, childElement) {
    errorDivs = document.getElementsByClassName(`${errorType}`)
    // only show the errors if there aren't any being showed already
    if ((errorType == 'unmatched-password' && errorDivs.length <= 1) ||
        (errorType == 'pass-alert' && errorDivs.length == 0) ||
        (errorType == 'email-alert' && errorDivs.length == 0) ||
        (errorType.includes('input-alert') && errorDivs.length == 0)) {
        // create a div
        const errorDiv = document.createElement('div')
        errorDiv.className = `${errorType} alert-danger`
        // get elements
        const inputField = document.querySelector(`#${childElement}`)
        // create text node and append to div
        errorDiv.appendChild(document.createTextNode(errorMessage))
        errorDiv.style.color = 'red'
        errorDiv.style.paddingLeft = '5px'
        errorDiv.style.paddingRight = '5px'
        errorDiv.style.borderRadius = '5px'
        // insert error message above input field
        document.querySelector(`.${parentElement}`).insertBefore(errorDiv, inputField)
    }
}

function clearError(errorType) {
    errorDivs = document.getElementsByClassName(`${errorType}`)
    // remove all error messages
    for (let i = errorDivs.length - 1; i >= 0; i--)
        errorDivs[i].remove()
}