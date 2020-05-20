import { NaverMap } from 'react-naver-maps';
import React, { Component } from 'react';

class MyMap extends Component {
    render(){
    return (
        <NaverMap 
            id='maps-examples-map-simple'
            style={{
            width: '800px',
            height: '600px',
            }}
        />);
    }
}

export default MyMap;
