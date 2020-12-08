import React, { useState } from 'react';
import './style.css';

import { Map, GoogleApiWrapper } from 'google-maps-react';

const MapsAPIkey: string = typeof process.env.REACT_APP_GOOGLE_API_KEY !== 'string' ? '' : process.env.REACT_APP_GOOGLE_API_KEY;

const initialMarker = {
    lat: 47.44,
    lng: -122.176,
}

const MapScreen = (props: any) => {
    const [Marker, setMarker] = useState<{ lat: number; lng: number }>(initialMarker);
    if (MapsAPIkey === '') return (
        <div className="error-screen">Please setup the Google Maps API key.</div>
    )
    return (
      <div className="map-wrapper">
        <Map
          google={props.google}
          style={mapStyles}
          initialCenter={Marker}
        ></Map>
      </div>
    );
}

const mapStyles = {
    width: '100%',
    height: '100%',
    padding: 20,
}

export default GoogleApiWrapper({
    apiKey: MapsAPIkey
})(MapScreen);