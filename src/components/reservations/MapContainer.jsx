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
        zoom={12}
        style={mapStyles}
        initialCenter={{
         lat: 19.3977718,
         lng: -99.1718299
        }}
      >
        {this.props.hosts.map(host => <Marker key={host._id} 
          onClick={this.onMarkerClick}
          position={{lat:host.address.location.coordinates[0], lng:host.address.location.coordinates[1]}}
          photo={host.photoURL}
          price={host.price}
          title={host.name}
        ><h3>{host.name}</h3></Marker>)}
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
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GM_API_KEY
})(MapContainer);