/*global kakao*/
import React, { useEffect } from 'react';
const {kakao} = window;

class MapTest extends React.Component {
    componentDidMount() {
        const script = document.createElement('script');
        script.async = true;
        script.src = "http://dapi.kakao.com/v2/maps/sdk.js?appkey=6bdd56dd4fb1342fd9686d7c02a3a6a2&autoload=false";
        document.head.appendChild(script);

        useEffect(() => {
            kakao.maps.load(() => {
                let el = document.getElementById('myMap');
                let map = new kakao.maps.Map(el, {
                    center: new kakao.maps.Coords(37.545206089586245,126.96525487501158)
                })
            })
        }, []);
    }
}

export default MapTest;