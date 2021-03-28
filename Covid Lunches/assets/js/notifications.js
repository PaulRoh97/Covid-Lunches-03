// JavaScript source code

/*Simple notification that */
function notifyEvent() {

    /*Code modified from: https://developer.mozilla.org/en-US/docs/Web/API/notification*/

    /*Browser support?*/
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    }

    /*No permission asking needed*/
    else if (Notification.permission === "granted") {
        var notification = new Notification("Hi there!");
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
                alert("We created the notification");
                new Notification("Hi there!");
            }
        });
    }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
}