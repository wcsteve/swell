import React from 'react';
import mapStyle from '../../util/map_style.js'


export default class RouteIndexItem extends React.Component {

  constructor(props){
    super(props)

  }

  initMap() {

    const mapOptions = {
      disableDefaultUI: true,
      draggable: false,
      gestureHandling: 'none',
      scrollwheel: false,
      disableDoubleClickZoom: true,
      styles: mapStyle,
      zoom: 13,
    };

    this.map = new google.maps.Map(this.refs.renderedSmallMap, mapOptions);

    const routePath = google.maps.geometry.encoding.decodePath(this.props.route.polyline)

    const routePolyline = new google.maps.Polyline({
      path: routePath,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    const boundary = new google.maps.LatLngBounds();
    // converts polyline path to MVCArray
    const routeMVCArr = routePolyline.getPath();
    // extends the boundary for each lat-lng pair in the MVCArray
    routeMVCArr.forEach(latLng => boundary.extend(latLng));
    // fits the map to the boundary
    this.map.fitBounds(boundary);

    routePolyline.setMap(this.map);

  }

  componentDidMount() {
    this.initMap();
  }

  render(){

    return(
      <React.Fragment>
        <div ref="renderedSmallMap" id="small-map">

        </div>
      </React.Fragment>
    )
  }
}
