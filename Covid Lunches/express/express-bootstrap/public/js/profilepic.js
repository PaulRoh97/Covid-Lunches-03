// JavaScript source code

/*Check just extension*/
function is_valid_pic_extension(picPath) {

    /*Modified code from source: https://www.geeksforgeeks.org/file-type-validation-while-uploading-it-using-javascript/ */
    var allowedExtensions =
        /(\.jpg|\.jpeg|\.png)$/i;
    if (!allowedExtensions.exec(picPath)) {
        return false;
    }

    return true;
}

/*validate the picture*/
function is_valid_pic_path(picPath, callback) {

    /*Modified from: https://stackoverflow.com/questions/14651348/checking-if-image-does-exists-using-javascript */
    var picture = new Image();
    picture.src = picPath;
    picture.onload = function () { callback(true); };
    picture.onerror = function () { callback(false); };
}

/* is image from database plausible? If not, we have default.*/
function get_profile_pic() {

    var default_src = "/img/pumpple.jpg";

    var pictures = document.querySelectorAll(".profilepic");
    for (i = 0; i < pictures.length; i++){
        console.log('Checking profile pic #' + i);

        if (is_valid_pic_extension(pictures[i].src)) {

            //show default picture if not loaded
            is_valid_pic_path(pictures[i].src, function (exists) {
                if (!exists) {

                    /*update any profile pics if multiple pictures are shown*/
                    //var pictures = document.querySelectorAll(".profilepic");
                    console.log('Incorrect path exists');
                    for (j = 0; j < pictures.length; j++){
                        pictures[j].src = default_src;
                    }
                    return;
                }
            })
        }

        //show default picture if wrong extension
        else{
            //var pictures = document.querySelectorAll(".profilepic");
            console.log('Incorrect extension');
            for (j = 0; j < pictures.length; j++){
                pictures[j].src = default_src;
            }
            return;
        }
    }

}

/* change the profile picture to the uploaded image
 */
function change_profile_pic( new_img) {

    /*TODO: perform checks on image before making it the src*/
}