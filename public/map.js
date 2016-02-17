function initialize() {
  var mapOptions = {
    zoom: 12,
    maxZoom: 20,
    center: new google.maps.LatLng(37.54, -121.9),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById("map_canvas"),
                                mapOptions);
  setMarkers(map);
}

function setMarkers(map) {
	 var image = new google.maps.MarkerImage('public/marker.png',
		      // This marker is 20 pixels wide by 32 pixels tall.
		      new google.maps.Size(20, 32),
		      // The origin for this image is 0,0.
		      new google.maps.Point(0,0),
		      // The anchor for this image is the base of the flagpole at 0,32.
		      new google.maps.Point(0, 32));
	 
	$(document).ready(function() {
        $.getJSON("locations.json", function(data) {
        	
        	console.log("locations here:"+JSON.stringify(data));
        	$.each(data, function(key, data) {
            var latLng = new google.maps.LatLng(data.latitude, data.longitude); 
            // Creating a marker and putting it on the map
            var marker = new google.maps.Marker({
                position: latLng,
                title: data.type
            });
             marker.setMap(map);
          });  
        });
      }); 
}