

    var marker1 = new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(32.784352, -79.946823),
      title: "MUSC Childrens Hospital"
    });
    var infowindow = new google.maps.InfoWindow({
      content : "MUSC Childrens Hospital"
    });

    google.maps.event.addListener(marker1, 'click', function() {
      infowindow.open(map,marker1);
    });

    var marker2 = new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(32.784226, -79.947896),
      title: "Pediatric Emergency Room"
    });
    var infowindow2 = new google.maps.InfoWindow({
      content : "Pediatric Emergency Room"
    });

    google.maps.event.addListener(marker2, 'click', function() {
      infowindow2.open(map,marker2);
    });

    var marker3 = new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(32.9752579, -80.066016),
      title: "After Hours Care - North Charleston"
    });
    var infowindow3 = new google.maps.InfoWindow({
      content : "After Hours Care - North Charleston"
    });

    google.maps.event.addListener(marker3, 'click', function() {
      infowindow3.open(map,marker3);
    });

    var marker4 = new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(32.8543497, -79.8010549),
      title: "After Hours Care - Mt. Pleasant"
    });
    var infowindow4 = new google.maps.InfoWindow({
      content : "After Hours Care - Mt. Pleasant"
    });

    google.maps.event.addListener(marker4, 'click', function() {
      infowindow4.open(map,marker4);
    });

    var marker5 = new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(32.9623627, -80.1556269),
      title: "After Hours Care - Summerville"
    });
    var infowindow5 = new google.maps.InfoWindow({
      content : "After Hours Care - Summerville"
    });

    google.maps.event.addListener(marker5, 'click', function() {
      infowindow5.open(map,marker5);
    });

    var marker6 = new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(32.783867, -79.945214),
      title: "Rutledge Tower"
    });
    var infowindow6 = new google.maps.InfoWindow({
      content : "Rutledge Tower"
    });

    google.maps.event.addListener(marker6, 'click', function() {
      infowindow6.open(map,marker6);
    });




    var hospitalContent = "MUSC Children's Hospital";
    var infowindow = new google.maps.InfoWindow({
      content: hospitalContent
    });
    var er = "Pediatric Emergency Room";
    var infowindow2 = new google.maps.InfoWindow({
      content: er
    });
    var afterHoursNC = "After Hours Care - North Charleston";
    var infowindow3 = new google.maps.InfoWindow({
      content: afterHoursNC
    });
    var afterHoursMP = "After Hours Care - Mt. Pleasant";
    var infowindow4 = new google.maps.InfoWindow({
      content: afterHoursMP
    });
    var afterHoursSum = "After Hours Care - Summerville";
    var infowindow5 = new google.maps.InfoWindow({
      content: afterHoursSum
    });
    var rutTower = "Rutledge Tower";
    var infowindow6 = new google.maps.InfoWindow({
      content: rutTower
    });

    var marker;
    var markers = new Array();

    for (var i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      markers.push(marker);
    }

    google.maps.event.addListener(markers[0], 'click', function() {
      infowindow.open(map,markers[0]);
    });
    google.maps.event.addListener(markers[1], 'click', function() {
      infowindow2.open(map,markers[1]);
    });
    google.maps.event.addListener(markers[2], 'click', function() {
      infowindow3.open(map,markers[2]);
    });
    google.maps.event.addListener(markers[3], 'click', function() {
      infowindow4.open(map,markers[3]);
    });
    google.maps.event.addListener(markers[4], 'click', function() {
      infowindow5.open(map,markers[4]);
    });
    google.maps.event.addListener(markers[5], 'click', function() {
      infowindow6.open(map,markers[5]);
    });
