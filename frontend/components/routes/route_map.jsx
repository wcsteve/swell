import React from 'react';
import ReactDOM from 'react-dom';
import { Control, ButtonBar } from './map_controls'
import CreateRouteFormComponent from './create_route_form_component'


class RouteMap extends React.Component{
  constructor(props) {
  super(props);
    this.markers = [];
    this.arrayLatLngs = [];
    this.redo = [];
    this.directionsServiceOjb = new google.maps.DirectionsService();
    //create an object of type DirectionsService

    this.directionsResultRenderer = new google.maps.DirectionsRenderer({
      draggable: true
    });
    // Creates a DirectionRnderer object which will handle displaying DirectionsResult
    this.centerMap = this.centerMap.bind(this);
    this.removeLastMarker = this.removeLastMarker.bind(this);
    this.state = {
      polyline: null,
      path: null
    }
  }


  initMap() {
    const mapOptions = {
      center: { lat: 37.773972, lng: -122.431297 },
      zoom: 13,
      streetViewControl: false,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
      },
      styles: [
        {
          "featureType": "poi",
          "stylers": [{"visibility": 'off'}]
        }
      ],
      mapTypeControl: true,
      mapTypeControlOptions: {
       style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
       position: google.maps.ControlPosition.RIGHT_TOP
     }
    };
    this.map = new google.maps.Map(this.refs.renderedMap, mapOptions);
    this.directionsResultRenderer.setMap(this.map);

    this.map.addListener('click', e => {
      let newMarker = new google.maps.Marker({
        position: e.latLng,
      });

      newMarker.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker.getPosition());
      });

      this.markers.push(newMarker)
      if (this.markers.length > 1) {
        this.calcRoute()
      } else {
        newMarker.setMap(this.map)
      }
    });

  }

  calcRoute(){
    const waypts = this.markers.slice(1, this.markers.length - 1);
    const wayPtLatLongs = waypts.map(
      waypt => ({location: waypt.position, stopover: false})
    );


    const request = {
      origin: this.markers[0].position,
      destination: this.markers[this.markers.length - 1].position,
      travelMode: 'WALKING',
      waypoints: wayPtLatLongs,
      unitSystem: google.maps.UnitSystem.IMPERIAL
    }

    this.directionsServiceOjb.route(request, (response, status) => {
      window.response = response
      if (status == 'OK') {
        this.directionsResultRenderer.setDirections(response),
        updateRouteState(response.routes[0])
        //response returns and array of Google DirectionsResult objects
      }
    });
  }

  updateRouteState(googleMapsRouteResponse){
    this.setState({
      polyline: googleMapsRouteResponse.overview_polyline,
      path: googleMapsRouteResponse.overview_path,
      duration: googleMapsRouteResponse.duration.text,
      distance: googleMapsRouteResponse.distance.value
    })
    // this.routes.waypts =
  }

  componentDidMount() {
    this.initMap();
  }

  centerMap(){
    this.map.setCenter({ lat: 37.773972, lng: -122.431297 });
  }

  removeLastMarker(){
    if (this.markers.length >= 2 ) {
      let markerToDelete = this.markers[this.markers.length - 1]
      this.redo.push(markerToDelete)
      this.markers.splice(-1, 1);
      this.arrayLatLngs.splice(-1, 1);
      markerToDelete.setMap(null);
      this.calcRoute();
    }
  }

  // addBackLastMarker(){
  //   if (this.redo.length >= 1 ) {
  //     let markerToDelete = this.markers[this.markers.length - 1]
  //     this.redo.push(markerToDelete)
  //     this.markers.splice(-1, 1);
  //     markerToDelete.setMap(null);
  //     this.calcRoute();
  //   }
  // }

  render() {

    const center = Control(this.centerMap, "Center");
    const undo = Control(this.removeLastMarker, "Undo");

    return (
    <React.Fragment>
      <div ref="renderedMap" id="map-container"/>
      <div className="button-bar">
        {center}
        {undo}
      </div>
      <CreateRouteFormComponent path={this.arrayLatLngs}
        createRoute={this.props.create}
        currentUser={this.props.currentUser}/>
    </React.Fragment>
    )
  }


}

export default RouteMap;
// this.state =
// this.state = {
//   travelMode: 'WALKING',
//   polyline: null,
//   result: null,
//   duration: '--:--',
//   distance: '',
//   elevation: 0,
//   path: null,
//   markers: [],
//   undo: [],
//   redo: []
// };

// ideas to implement:
//   DirectionsResult
//   optimizeWaypoints: true
