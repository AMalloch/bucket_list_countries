const MapWrapper = function (container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
    this.markers = [];
}

MapWrapper.prototype.addMarker = function (coords) {
  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap,
    animation: google.maps.Animation.DROP
  });
  this.markers.push(marker);
  return marker;
}

MapWrapper.prototype.addClickEvent = function () {
  google.maps.event.addListener(this.googleMap, 'click', function (event) {
    var position = { lat: event.latLng.lat(), lng: event.latLng.lng() }
    this.addMarker(position);
  }.bind(this));
}
//
// MapWrapper.prototype.addInfoWindow = function (coords, text) {
//   var marker = this.addMarker(coords);
//   marker.addListener('click', function ()) {
//     var infoWindow = new google.maps.InfoWindow({
//       content: text
//     });
//     infoWindow.open(this.map, marker);
//   });
// };

// MapWrapper.prototype.setMapOnAll = function (this.googleMap) {
//   for (var i = 0; i < this.markers.length; i++) {
//     markers[i].setMap(this.googleMap);
//   }
// };
//
MapWrapper.prototype.clearMap = function() {
    for (var i = 0; i < this.markers.length; i++ ) {
      this.markers[i].setMap(null);
    }
    this.markers.length = 0;
};

module.exports = MapWrapper;
