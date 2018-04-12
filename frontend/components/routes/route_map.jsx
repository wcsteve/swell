import React from 'react';
import ReactDOM from 'react-dom';
import { Control } from './map_controls';
import RouteFormContainer from './route_form_container';
import { MapBottomPanel } from './map_bottom_panel';
import mapStyle from '../../util/map_style.js'

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
    this.addBackLastMarker = this.addBackLastMarker.bind(this);
    this.clearMarkers = this.clearMarkers.bind(this);
    this.state = {
      polyline: null,
      path: null,
      duration: "--:--",
      distance: "",
      elevation: "",
      form: null,
      coordinates: null,
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
      styles: mapStyle
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
      this.redo = [];
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

    var returned;
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
        returned = response;
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
      distance: (googleMapsRouteResponse.legs[0].distance.value / 1000.0).toFixed(2),
    })
  }

  componentDidMount() {
    this.initMap();
  }

  centerMap(){
    if (this.markers.length === 0) {
      this.map.setCenter({ lat: 37.773972, lng: -122.431297 });
      this.map.setZoom(13)
    } else {
      let lastMarker = this.markers[this.markers.length - 1]
      this.map.setZoom(15)
      this.map.setCenter(lastMarker.getPosition())
    }
  }

  clearMarkers(){
    for (let i = 0; i < this.markers.length; i++) {
      this.marker[i].setMap(null);
    }
  }

  removeLastMarker(){
    if (this.markers.length >= 2 ) {
      let markerToDelete = this.markers[this.markers.length - 1]
      this.redo.push(markerToDelete)
      this.markers.splice(-1, 1);
      this.arrayLatLngs.splice(-1, 1);
      markerToDelete.setMap(null);
      this.calcRoute();
    } else {
      this.markers[this.markers.length - 1].setMap(null);
      this.directionsResultRenderer.setMap(null);
      this.markers =[]
      this.centerMap()
      this.directionsResultRenderer = new google.maps.DirectionsRenderer({
        draggable: true
      });
      this.directionsResultRenderer.setMap(this.map)
      this.polyline = null
      this.setState({
        duration: "--:--",
        distance: "",
        elevation: "",
      }).then(() => null)
    }
  }

  addBackLastMarker(){
    if (this.redo.length >= 1 ) {
      this.markers.push(this.redo.pop())
      // markerToDelete.setMap(null);
      this.calcRoute();

    }
  }

  exitForm(){
    this.props.history.push("/routes")
  }

  addForm(input){
    this.setState({form: input})
  }

  render() {

    const center = Control(this.centerMap, "Center");
    const undo = Control(this.removeLastMarker, "Undo");
    const redo = Control(this.addBackLastMarker, "Redo");
    let save
    if (this.markers.length >= 2) {
      save = Control(() => this.addForm(true), "Save");
    }

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
    window.state = this.state;
    return (
      <React.Fragment>
        <main className="map-workspace">

          <nav className="map-button-bar">
            <ul>
              {undo}
              {redo}
              {center}
              <div className="map-button" onClick={() => this.exitForm()}>Exit</div>
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
// ideas to implement:
//   DirectionsResult
//   optimizeWaypoints: true
