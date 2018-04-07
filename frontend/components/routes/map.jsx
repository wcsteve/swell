import React from 'react';
import ReactDOM from 'react-dom';

class RouteMap extends React.Component{
  componentDidMount() {
    //tells React to find the node to render map to,
    const map = ReactDOM.findDOMNode(this.refs.map)
    //Set render options for map
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };

    this.map = new google.maps.Map(map, mapOptions);
  }

  render() {
    return (
      <div ref="map" id="map-container"/>

    )
  }

}

export default RouteMap;
