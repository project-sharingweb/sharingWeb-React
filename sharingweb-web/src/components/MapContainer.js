import React from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import {withShopContext} from '../contexts/ShopStore'
 
export class MapContainer extends React.Component {
  render() {
    const {shop} = this.props
    return (
      <div>
      {shop &&
        <div>
          <Map google={this.props.google} zoom={14}
          initialCenter={{
            lat: shop.locations.latitude || 40.392449,
            lng: shop.locations.longitude || -3.698499
          }}>
    
            <Marker title={`${shop.name} address`}
                    name={`${shop.name}`}
                    position={{lat: shop.locations.latitude || 40.392449, lng: shop.locations.longitude || -3.698499}} />
    
          </Map>
        </div>}
      </div>
    );
  }
}
 
export default withShopContext(GoogleApiWrapper({
  apiKey: "AIzaSyDg4TVpLcCNik67o6WtbOYrH6zz3SjGjys"
})(MapContainer))