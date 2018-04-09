import React from 'react';
import ReactDOM from 'react-dom';
import { Control } from './map_controls';
import RouteFormContainer from './route_form_container';
import { MapBottomPanel } from './map_bottom_panel';

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
    this.updateRouteState = this.updateRouteState.bind(this);
    this.removeLastMarker = this.removeLastMarker.bind(this);
    this.calcElevation = this.calcElevation.bind(this);
    this.addForm = this.addForm.bind(this);
    this.state = {
      polyline: null,
      path: null,
      path: null,
      duration: "--:--",
      distance: "",
      elevation: "",
      form: null,
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
      mapTypeControl: false,
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

  calcElevation(overviewPath){
    let total = 0
    const elevator = new google.maps.ElevationService;
    var elevation = elevator.getElevationAlongPath(
      {
        path: overviewPath,
        samples: overviewPath.length
      },
      (result, status) => {
        window.result = result
        if (status == 'OK') {
          for (var i = 0; i < result.length - 1; i++) {
            if (result[i].elevation < result[i + 1].elevation) {
              total += result[i + 1].elevation - result[i].elevation;
            }
          }
        }
        this.setState({ elevation: total.toFixed(2) });
        return total;
      }
    );
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
        this.updateRouteState(response.routes[0])

        //response returns and array of Google DirectionsResult objects
      }
    });
  }

  updateRouteState(googleMapsRouteResponse){

    const elavation = this.calcElevation(googleMapsRouteResponse.overview_path)
    this.setState({
      polyline: googleMapsRouteResponse.overview_polyline,
      path: googleMapsRouteResponse.overview_path,
      duration: googleMapsRouteResponse.legs[0].duration.text,
      distance: (googleMapsRouteResponse.legs[0].distance.value / 1000.0).toFixed(2)
    })
    // this.routes.waypts =
    console.log(this.state)
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

  addForm(input){
    this.setState({form: input})
  }

  render() {

    const center = Control(this.centerMap, "Center");
    const undo = Control(this.removeLastMarker, "Undo");
    const redo = Control(this.removeLastMarker, "Redo");
    const save = Control(() => this.addForm(true), "Save");

    let form = undefined
    if (this.state.form === true){
     form =
        <div className="modal-container">

          <RouteFormContainer routePath={this.state}
            createRoute={this.props.create}
            currentUser={this.props.currentUser}
            closeForm={this.addForm}/>
        </div>
    }

    return (
      <React.Fragment>
        <main className="map-workspace">

          <nav className="map-button-bar">
            <ul>
              {undo}
              {redo}
              {center}
              {save}
            </ul>
          </nav>

          <div ref="renderedMap" id="map-container">
            {form}
          </div>

          <MapBottomPanel
            distance={this.state.distance}
            elevationGain={this.state.elevation}
            time={this.state.duration}/>

        </main>

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
