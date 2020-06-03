
import React, { Component } from 'react';
import { Marker } from 'react-naver-maps';
import MyMap from './NaverMaps';
import '../css/Map.css';

const navermaps = window.naver.maps;
class MapComp extends Component {
    
    newFoodMarker(){
        const foodList = [
            ['마시앤바시', 37.544574, 126.968097],
            ['작은도쿄', 37.543933, 126.970556],
            ['타타미', 37.544965, 126.968188],
            ['김성천스시', 37.544211, 126.972588],
            ['맘스터치', 37.545136, 126.967186],
            ['버거인', 37.543783, 126.969991],
            ['서브웨이 숙대점', 37.544757, 126.968130],
            ['신내떡', 37.544538, 126.969930],
            ['포36거리(포돈)', 37.545134, 126.966155]
        ];
    
        const foodloList = foodList.map(
            (foodList) => (
                <Marker
                    position={new navermaps.LatLng(foodList[1], foodList[2])}
                    onClick={() => {alert(`여기는 ${foodList[0]}입니다.`);}}
                />
            )
        );
    }

    render() {
        return (
            <div className='mapContainer'>
                <div className='BtnContainer'>
                    <button className='listBtn' onClick={() => this.listName='cafeList'}>카페</button>
                    <button className='listBtn' onClick={() => this.listName='foodList'}>식당</button>
                    <button className='listBtn' onClick={() => this.listName='dessertList'}>디저트</button>
                </div>
                <MyMap />
                <div>
                <div className='infoWindow'>
                    정보창 내용입니다.
                </div>
                <button className='infoBtn'>리뷰 보기</button></div>
            </div>
        );
    }
}

export default MapComp;


// <button className='listBtn' onClick={() => alert(this.listName)}>출력</button>