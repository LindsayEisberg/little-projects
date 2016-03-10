

var map
  function initialize() {
    var muscCenter = new google.maps.LatLng(32.785640, -79.947553);


    var mapOptions = {
      zoom: 16,
      center: muscCenter
    }
     map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

    console.log(map.center);
  }

    ///infowindow

    initialize();
    var locations = [
      ["MUSC Children's Hospital", 32.784352, -79.946823],
      ["Pediatric Emergency Room", 32.784226, -79.947896],
      ["After Hours Care - North Charleston", 32.9752579, -80.066016],
      ["After Hours Care - Mt. Pleasant", 32.8543497, -79.8010549],
      ["After Hours Care - Summerville", 32.9623627, -80.1556269],
      ["Rutledge Tower", 32.783867, -79.945214]
    ];
    console.log(locations);
    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            animation: google.maps.Animation.DROP,
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
    //panTo

    $('.location-menu').on('click', '#location1', function(e){
      e.preventDefault();
      var loc = new google.maps.LatLng(32.784352, -79.946823);
      map.panTo(loc);
      marker.setAnimation(google.maps)
    });
    $('.location-menu').on('click', '#location2', function(e){
      e.preventDefault();
      var loc = new google.maps.LatLng(32.784226, -79.947896);
      map.panTo(loc);
    });

    $('.location-menu').on('click', '#location3', function(e){
      e.preventDefault();
      var loc = new google.maps.LatLng(32.9752579, -80.066016);
      map.panTo(loc);
    });
    $('.location-menu').on('click', '#location4', function(e){
      e.preventDefault();
      var loc = new google.maps.LatLng(32.8543497, -79.8010549);
      map.panTo(loc);
    });

    $('.location-menu').on('click', '#location5', function(e){
      e.preventDefault();
      var loc = new google.maps.LatLng(32.9623627, -80.1556269);
      map.panTo(loc);
    });

    $('.location-menu').on('click', '#location6', function(e){
      e.preventDefault();
      var loc = new google.maps.LatLng(32.783867, -79.945214);
      map.panTo(loc);
    });






  // google.maps.event.addDomListener(window, 'load', initialize);
