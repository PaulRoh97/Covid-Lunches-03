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

/* the src of the image is the profile picture in the database*/
function get_profile_pic() {

    var src = "img/chefs/chefs-1.jpg";
    //var src = "../public/img/chefs/chef.jpg";
    //var src = "../public/img/chefs/chefs-1.txt";

    console.log('Checking profile pic' + src);

    if (is_valid_pic_extension(src)) {
        is_valid_pic_path(src, function (exists) {
            if (exists) {

                /*update any profile pics if multiple pictures are shown*/
                var pictures = document.querySelectorAll(".profilepic");
                console.log('Profile pic elements on page: ' + pictures.length);
                for (i = 0; i < pictures.length; i++){
                    pictures[i].src = src;
                }
            }
        })
    }

}

/* change the profile picture to the uploaded image
 */
function change_profile_pic( new_img) {

    /*TODO: perform checks on image before making it the src*/
}