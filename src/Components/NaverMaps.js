import { NaverMap, Marker } from 'react-naver-maps';
import React, { Component, useState } from 'react';
import '../css/App.css'

/*
    funtion 1 = 버튼 클릭을 확인해 동일한 이름의 마커를 리턴해주는 함수
    funtion 2 = 리스트의 마커를 생성하는 함수
*/
const navermaps = window.naver.maps;

function btnClicked(){


    return(
        <div>test</div>
    );
}

class MyMap extends Component {
    state ={
        listName: undefined
    }

    newCafeMarker(){
        const cafeList = [
            ['커피니 숙대점', 37.545162, 126.966798],
            ['카페코지 숙대점', 37.544918, 126.968947],
            ['을의 커피', 37.545766, 126.966821]
        ];
    
        const cafeloList = cafeList.map(
            (cafeList) => (
                <Marker
                    position={new navermaps.LatLng(cafeList[1], cafeList[2])}
                    onClick={() => {alert(`여기는 ${cafeList[0]}입니다.`);}}
                />
            )
        );

        return(
            <div>
                Cafe는 {cafeList}.
            </div>
        )
    }

    newMarker() {
        const cafeList = [
            ['커피니 숙대점', 37.545162, 126.966798],
            ['카페코지 숙대점', 37.544918, 126.968947],
            ['을의 커피', 37.545766, 126.966821]
        ];
    
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
    
        const dessertList = [
            ['몬스터 플레이스', 37.544345, 126.966821],
            ['디어파인', 37.544945, 126.966474]
        ]
    
    }

    getListname() {
        return(
            <div>{this.listName}</div>
        )
    }
    
    render(){
        const locations =[
            ['숙명여대',37.5450416, 126.9647459],
            ['커피니 숙대점', 37.545162, 126.966798],
            ['카페코지 숙대점', 37.544918, 126.968947],
            ['을의 커피', 37.545766, 126.966821],
            ['마시앤바시', 37.544574, 126.968097],
            ['작은도쿄', 37.543933, 126.970556],
            ['타타미', 37.544965, 126.968188],
            ['김성천스시', 37.544211, 126.972588],
            ['맘스터치', 37.545136, 126.967186],
            ['버거인', 37.543783, 126.969991],
            ['서브웨이 숙대점', 37.544757, 126.968130],
            ['신내떡', 37.544538, 126.969930],
            ['포36거리(포돈)', 37.545134, 126.966155],
            ['몬스터 플레이스', 37.544345, 126.966821],
            ['디어파인', 37.544945, 126.966474]
        ];
        const loList = locations.map(
            (locations) => (
                <Marker
                    position={new navermaps.LatLng(locations[1], locations[2])}
                    onClick={() => {alert(`여기는 ${locations[0]}입니다.`);}}
                />
            )
        );
        return (
        <div className='map'>
            <NaverMap
                mapDivId={'maps'}
                style={{
                width: '100%',
                height: '100%' 
                }}
                defaultCenter={{  lat: 37.5450416, lng: 126.9647459 }}
                defaultZoom={15}
            >
                {loList}
            </NaverMap>
        </div>
        );
    }
}

export default MyMap;
