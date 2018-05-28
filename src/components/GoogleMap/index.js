import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap as MyGoogleMap, Marker } from "react-google-maps";

import CircularProgress from 'material-ui/CircularProgress';

const SimpleMapExampleGoogleMap = withScriptjs(
  withGoogleMap(props => (
    <MyGoogleMap
      ref={props.onMapLoad}
      defaultZoom={12}
      defaultCenter={{ lat: 64.304613, lng: -20.219680 }}
      options={{ scrollwheel: false }}>
      <Marker
        defaultPosition={{ lat: 64.304551, lng: -20.219693 }}
      />
    </MyGoogleMap>
  ))
);

const GoogleMap = (props) => {
  const _googleMapURL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCDfziJD2atQgi_pl43_91vz6y-k3rgkVA';

  return (
    <div style={{ height: '100%', width: '100%', }}>
      <SimpleMapExampleGoogleMap
        googleMapURL={_googleMapURL}
        loadingElement={
          <div style={{ height: '100%', textAlign: 'center' }}>
            <p>Loading Google Maps...</p>  
            <CircularProgress size={80} thickness={5} />
          </div>
        } 
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
      />
    </div>
  );
}

export default GoogleMap;