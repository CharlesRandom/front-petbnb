import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  height: '80%',
  width: '500px',
  flexGrow: 2,
  margin: '20px',
  padding: '10px 10px'
};

export class MapHost extends Component {
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
    const {host} = this.props.host
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
          lat: 19.3977762,
          lng: -99.1715564
          }}
        >
          <Marker key={host._id} 
            onClick={this.onMarkerClick}
            position={{lat:host.address.location.coordinates[0], lng:host.address.location.coordinates[1]}}
            photo={host.photoURL}
            price={host.price}
            title={host.name}
          ><h3>{host.name}</h3></Marker>
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.title}</h4>
              <h5>${this.state.selectedPlace.price} per night</h5>
              <img style={{width:"200px"}} src={this.state.selectedPlace.photo} alt="profile pic"/>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GM_API_KEY
})(MapHost);