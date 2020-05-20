/*global kakao*/
import React, { Component } from 'react';
import { Map } from 'react-kakao-maps';
const {kakao} = window;

class MapTest extends React.Component {
   /*constructor(props) {
        super(props);	
    }
    map;
    componentDidMount(){
        var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
        var options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(35.157588, 129.058822), //지도의 중심좌표.
            level: 4 //지도의 레벨(확대, 축소 정도)
        };
	    this.map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        }*/
    render() {
        return (
          <Map options={{
            center: new kakao.maps.LatLng(35.157588, 129.058822), //지도의 중심좌표.
            level: 4 //지도의 레벨(확대, 축소 정도)
          }}>
          </Map>
        )
    }
}
export default MapTest;

/*
class MapContent extends Component {
  render() {
    return <MapContents id="Mymap" style={{
      width: '800px',
      height: '600px',
    }}>
    </MapContents>; // 이부분이 지도를 띄우게 될 부분.
  }
}

export default MapContent;*/