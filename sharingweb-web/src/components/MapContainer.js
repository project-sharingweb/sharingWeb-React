import React from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import {withShopContext} from '../contexts/ShopStore'
 
export class MapContainer extends React.Component {
  state = {
    latitude: this.props.shop.locations.coordinates[1],
    longitude: this.props.shop.locations.coordinates[0]
  }

  componentWillReceiveProps() {
    this.setState({
      latitude:this.props.shop.locations.coordinates[1],
      longitude: this.props.shop.locations.coordinates[0]
    })
  }
  render() {
    const {shop} = this.props
    return (
      <div>
      {shop &&
        <div>
          <Map google={this.props.google} zoom={14}
          initialCenter={{
            lat: this.state.latitude || 40.392449,
            lng: this.state.longitude || -3.698499
          }}>
    
            <Marker title={`${shop.name} address`}
                    name={`${shop.name}`}
                    position={{lat: this.state.latitude, lng: this.state.longitude}} />
    
          </Map>
        </div>}
      </div>
    );
  }
}
 
export default withShopContext(GoogleApiWrapper({
  apiKey: "AIzaSyDg4TVpLcCNik67o6WtbOYrH6zz3SjGjys"
})(MapContainer))