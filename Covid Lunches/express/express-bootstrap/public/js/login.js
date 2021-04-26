const NEW_PASS = 0,
    CONFIRM_PASS = 1,
    MAIL_FORMAT = /^(([^<>()\[\]\\.,'{}?+-_!@#$%*;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    PASS_FORMAT = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*.]{8,26}$/


document.querySelector('.sign-in-btn').addEventListener('click', (event) => {
    event.preventDefault()
    clearError('alert-danger')
    emptyFields = fieldsEmpty()
    emailValidated = validateEmail()

    if (!emptyFields && emailValidated) {
        // save to database
        location.href = '/inner-page'
    }
})

function fieldsEmpty() {
    let inputFields = document.getElementsByTagName('input')
    let errorMessage = 'Please fill in all fields.',
        errorType = 'd-flex justify-content-center input-alert',
        parentElement = 'forms',
        childElement = 'first-form'

    // check if input fields are empty
    for (let i = 0; i < inputFields.length; i++) {
        if (inputFields[i].value === '') {
            showError(errorMessage, errorType, parentElement, childElement)
            return true
        }
    }
    return false
}

function validateEmail() {
    let emailField = document.getElementById('email'),
        errorMessage = 'Invalid email address. Please try again.',
        errorType = 'email-alert',
        parentElement = 'forms',
        childElement = 'first-form'

    if (emailField.value.match(MAIL_FORMAT))
        return true
    if (emailField.value !== '')
        showError(errorMessage, errorType, parentElement, childElement)
    return false
}

// display error message
function showError(errorMessage, errorType, parentElement, childElement) {
    errorDivs = document.getElementsByClassName('alert-danger')
    // only show the errors if there aren't any being showed already
    if (errorDivs.length == 0) {
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
        errorDiv.style.marginBottom = '20px'
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