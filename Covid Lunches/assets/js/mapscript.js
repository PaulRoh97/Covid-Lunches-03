
/*Calls the Google Maps API in javascript instead of inline HTML*/
function callMapAPI() {

    var script = document.createElement('script');

    /*safely access the key*/
    var my_key = config.MAP_KEY;
    script.src = 'https://maps.googleapis.com/maps/api/js?key=' + my_key + '&callback=myMap';
    script.async = true;

    // Attach your callback function to the `window` object
    window.initMap = function () {
    } 

    // Append the 'script' element to 'head'
    document.head.appendChild(script);
    
}


/*For our embedded Google map */
function myMap() {

    var mapProp = {
        center: new google.maps.LatLng(51.508742, -0.120850),
        zoom: 15,
    };

    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}