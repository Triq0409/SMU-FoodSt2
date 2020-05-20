import React, { Component } from 'react';
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps';
/*
import MyMap from './test.js';

class App extends Component {
  render(){
    return(
      <div>My Test Map!
        <MyMap />
      </div>
    );
  }
}*/
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      center: { lat: 37.3595704, lng: 127.105399 }
    }

    this.panToNaver = this.panToNaver.bind(this);
  }

  panToNaver() {
    this.setState({ center: { lat: 37.3595704, lng: 127.105399 }})
  }

  render() {
    return (
      <div>
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
        />
      </div>
    )
  }
}

export default App;