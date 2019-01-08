import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '30%',
  height: '100%'
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={13}
        style={mapStyles}
        initialCenter={{
         lat: 19.397756,
         lng: -99.1715912
        }}
      >
        {this.props.hosts.map(host => <Marker key={host._id}
          position={{lat:host.address.location.coordinates[0], lng:host.address.location.coordinates[1]}}
          name={host.name}
        />)}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDCFh6m1V3DjbWxzTDD9XauPCebaxX-tdA'
})(MapContainer);