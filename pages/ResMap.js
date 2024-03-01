/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, Component } from 'react';

import {Map,  Marker, GoogleApiWrapper} from 'google-maps-react';

const containerStyle = {
  position: "relative",
  width: "100%",
  height: 415
}


export class MapContainer extends Component {

  render() {



    return (
        
      <Map google={this.props.google} 
         initialCenter={{
         lat: this.props.lat,
         lng: this.props.lng
       }}
     center={{
        lat: this.props.lat,
        lng: this.props.lng
       }}
      zoom={14}
      containerStyle={containerStyle}
      
      >
 
        <Marker  position={{
              lat: this.props.lat,
              lng: this.props.lng
            }}
                name={'Current location'}
                 />
      </Map>

    );
  }
}
 


export default GoogleApiWrapper({
    apiKey: ("")
        
})(MapContainer)
