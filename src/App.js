import React, { Component } from "react";

import "./App.css";
import MapQ from "./components/MapQ";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapQ
          height={500}
          width={1000}
          center={[33.8121, -117.9190]}
          baseLayer={"map"}
          zoom={12}
        />
      </div>
    );
  }
}

export default App;
