const BrowseViewModel = require("./browse-view-model");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new BrowseViewModel();
}

exports.onNavigatingTo = onNavigatingTo;


var mapbox = require("nativescript-mapbox");
 
function onMapReady(args) {
  // you can tap into the native MapView objects (MGLMapView for iOS and com.mapbox.mapboxsdk.maps.MapView for Android)
  var nativeMapView = args.ios ? args.ios : args.android;
  console.log("Mapbox onMapReady for " + (args.ios ? "iOS" : "Android") + ", native object received: " + nativeMapView);
 
  // .. or use the convenience methods exposed on args.map, for instance:
  args.map.addMarkers([
    {
      lat: 40.280155,
      lng: -111.726463,
      title: 'One-line title here',
      subtitle: 'Really really nice location',
      selected: true, // makes the callout show immediately when the marker is added (note: only 1 marker can be selected at a time)
      onCalloutTap: function(){console.log("'Nice location' marker callout tapped");}
    },
    {
        lat: 53.3602160,
        lng: 4.8891680,
        title: 'One-line title here',
        subtitle: 'Really really nice location',
        selected: true, // makes the callout show immediately when the marker is added (note: only 1 marker can be selected at a time)
        onCalloutTap: function(){console.log("'Nice location' marker callout tapped");}
      }
]
  );
}
 
exports.onMapReady = onMapReady;
