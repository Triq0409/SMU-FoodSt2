/*global kakao*/
import React, { Component } from 'react';
import './App.css';
import MapApi from './components/MapApi';
import { Map, Marker, MarkerClusterer, Polyline } from 'react-kakao-maps'


class App extends Component {
  render() {
    return (
      <MapApi />
    );
  }
}

export default App;
