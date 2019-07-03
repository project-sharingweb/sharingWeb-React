import React from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends React.Component {
  render() {
    return (
      <div>
        <Map google={this.props.google} zoom={14}>
  
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
  
        </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: "AIzaSyDg4TVpLcCNik67o6WtbOYrH6zz3SjGjys"
})(MapContainer)