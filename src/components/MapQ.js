import React, { Component } from "react";


class MapQ extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  render() {

    const mapStyle = {
      height: this.state.height,
      width: this.state.width
    };
    
    return (
      <div id="map" style={mapStyle}>
        
      </div>
    );
  }

  componentDidMount() {
    let L = window.L;
  
    L.mapquest.key = "MDlg7TMtdyZT869bwROpAkQmLRa7L29B";

    L.mapquest.map("map", {
      center: this.state.center,
      layers: L.mapquest.tileLayer(this.state.baseLayer),
      zoom: this.state.zoom
    });

    L.mapquest
      .textMarker([33.8121, -117.9190], {
        icon: {
          primaryColor: "#333333",
          secondaryColor: "#333333",
          size: "sm"
        },
        draggable: false,
        text: "DisneyLand",
        position: "right",
        subtext: "Let's have fun",
        type: "marker"
      })
      .addTo(L.mapquest.Map.getMap());
  }
}

export default MapQ;
