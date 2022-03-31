import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Component } from "react";

export class GoogleMaps extends Component {
  render() {
    console.log(this.props);
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={{ height: "50%", position: "relative" }}
        containerStyle={{ width: "60%" }}
      >
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>{/* <h1>{this.state.selectedPlace.name}</h1> */}</div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA1coAth-Bo7m99rnxOm2oOBB88AmaSbOk",
})(GoogleMaps);
