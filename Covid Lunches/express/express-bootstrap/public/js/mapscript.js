/*Calls the Google Maps API in javascript instead of inline HTML*/
function callMapAPI() {

    var script = document.createElement('script');

    /*safely access the key*/
    // var my_key = config.MAP_KEY;
    var my_key = document.getElementById("key").innerHTML;
    console.log(`|${my_key}`)
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

    document.getElementById("LocationLabel").innerHTML = "Elmwood Elementary";

    console.log("created map at marker location");

    /*Test functionality: change marker to a list of testing locations on click*/
    google.maps.event.addListener(marker, 'click', function () {

        /*change lat long for testing*/
        testLat = testLocations[test_lat_index][1];
        testLng = testLocations[test_lat_index][2];

        /*test out of range: default location time!*/
        if (testLat < -90)  { testLat = 39.34885819161449; testLng = -76.51970863089325;}
        if (testLat > 90)   { testLat = 39.34885819161449; testLng = -76.51970863089325; }
        if (testLng < -180) { testLat = 39.34885819161449; testLng = -76.51970863089325; }
        if (testLng > 180)  { testLat = 39.34885819161449; testLng = -76.51970863089325; }

        var new_location = { lat: testLat, lng: testLng};

        marker.setPosition(new_location);
        map.setCenter(new_location);

        var locationLabel = document.getElementById("LocationLabel");
        locationLabel.innerHTML = testLocations[test_lat_index][0];

        console.log("Have new marker at location: " + testLocations[test_lat_index][0]);
        test_lat_index = (test_lat_index + 1) % testLocations.length;
    });


}