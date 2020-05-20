import React, { Component } from "react";

class MapContent extends Component {
  render() {
    return <MapContents id="Mymap" style={{
      width: '800px',
      height: '600px',
    }}>
    </MapContents>; // 이부분이 지도를 띄우게 될 부분.
  }
}

export default MapContent;