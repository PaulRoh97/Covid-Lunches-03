

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

    /*TODO: data query the profile's default location's*/
    const default_location = { lat: 39.34885819161449, lng: -76.51970863089325 };
    //39.015975363512396, -76.67026638671018
    var test_lat_index = 0;

    /*Map currently looks at pcikup location */
    var mapProp = {
        center: default_location,
        zoom: 15,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    /*See the location*/
    const marker = new google.maps.Marker({
        position: default_location,
        map: map,
        animation: google.maps.Animation.DROP,
    });

    google.maps.event.addListener(marker, 'click', function () {

        /*change lat long for testing*/
        marker.setMap(null);
        var new_location = { lat: 39.015975363512396, lng: -76.67026638671018 };
        new_marker = new google.maps.Marker({
            position: new_location,
            map: map,
            animation: google.maps.Animation.DROP,
        });
        map.setCenter(new_location);
    });


}