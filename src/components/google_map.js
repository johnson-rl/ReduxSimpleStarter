import React, {Component} from 'react';

class GoogleMap extends Component {
  componentDidMount() { // called automatically as soon as component is "mounted"
    new google.maps.Map(this.refs.map, { // our refence from below being used
      zoom:12,                            // finds the element on screen and
      center: {                           // embeds the map into it
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }


  render () {
    return <div ref="map" />; // ref is a reference to an HTML element rendered to the page
  }

}

export default GoogleMap;
