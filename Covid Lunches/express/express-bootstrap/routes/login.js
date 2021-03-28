document.querySelector('#email').addEventListener('input', validateEmail);

// Get the modal
let modal = document.getElementById("myModal");
// Get the element that is not the login form
let container = document.getElementById("container");

// Get the button that opens the login form
let btn = document.getElementById("loginBtn");

// When the user clicks on the button, open the login form
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the login form, close it
window.onclick = function (event) {
    if (event.target == container) {
        modal.style.display = "none";
    }
}

// Validate email
function validateEmail() {
    console.log(this.value);
    // more code here
}