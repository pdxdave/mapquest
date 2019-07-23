import React, { Component } from "react";
import axios from "axios";

import "./App.css";
// import MapQ from "./components/MapQ";
import GeoMapQ from "./components/GeoMapQ";

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: []
    }
  }

  componentDidMount() {
    axios
      .get('http://www.mapquestapi.com/geocoding/v1/address?location=40031&key=MDlg7TMtdyZT869bwROpAkQmLRa7L29B')
      .then(response => {
        this.setState(() => ({ location: response.data.results[0].locations[0].latLng }))
        console.log(response.data.results[0].locations[0].latLng)

      })
      .catch(error => {
        console.log(error)
      });
  }

  render() {
    return (
      <div className="App">
        {/* <MapQ
          height={500}
          width={1000}
          center={[33.8121, -117.9190]}
          baseLayer={"map"}
          zoom={12}
        /> */}
        <GeoMapQ
          center={(this.state.location.lat, this.state.location.lng)}
        />
      </div>
    );
  }
}

export default App;
