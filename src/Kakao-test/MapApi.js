/*global kakao*/
import React, { Component } from 'react';
const { kakao } = window;

class MapApi extends Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.async = true;
        script.src =
            "https://dapi.kakao.com/v2/maps/sdk.js?appkey=6bdd56dd4fb1342fd9686d7c02a3a6a2&autoload=false";
        document.head.appendChild(script);
    
        script.onload = () => {
        kakao.maps.load(() => {
            let container = document.getElementById("Mymap");
            let options = {
                center: new kakao.maps.LatLng(37.506502, 127.053617),
                level: 7
            };

            const map = new Window.kakao.maps.Map(container, options);
        });
    };
}

    render() {
        return <MapApi id="Mymap"></MapApi>;
    }
    
}

export default MapApi;