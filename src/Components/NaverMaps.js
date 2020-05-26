import { NaverMap, Marker } from 'react-naver-maps';
import React, { Component } from 'react';


class MyMap extends Component {

    render(){
        const navermaps = window.naver.maps;
        return (
            <NaverMap
                id='map-sample'
                style={{
                    width: '100%',
                    height: '85vh' 
                }}
                defaultZoom={17}
                defaultCenter={{ lat: 37.5450416, lng: 126.9647459}}
            >
            <Marker
                key={1}
                position={new navermaps.LatLng(37.5450416, 126.9647459 )}
                animation={0}
                onClick={() => {alert('여기는 숙명여대입니다.');}}
            />    
            </NaverMap>
        )
    }
}

export default MyMap;