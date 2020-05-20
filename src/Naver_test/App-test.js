import React, { Component } from 'react';
import MyMap from './test.js';

class App2 extends React.Component {
  /*constructor(props) {
    super(props);

    this.state = {
      center: { lat: 37.3595704, lng: 127.105399 }
    }

    this.panToNaver = this.panToNaver.bind(this);
  }

  panToNaver() {
    this.setState({ center: { lat: 37.3595704, lng: 127.105399 }})
  }
        <button onClick={this.panToNaver}>Pan To Naver</button>
        <p>lat: {this.state.center.y || this.state.center.lat}</p>
        <p>lng: {this.state.center.x || this.state.center.lng}</p>
        <NaverMap 
          id='map-sample' 
          style={{width: '800px', height: '600px'}}
          
          // uncontrolled zoom
          defaultZoom={10}

          // controlled center
          // Not defaultCenter={this.state.center}
          center={this.state.center}
          onCenterChanged={center => this.setState({ center })}
        />*/
        
  render() {
    return (
      <div>
        <MyMap />
      </div>
    )
  }
}

export default App2;