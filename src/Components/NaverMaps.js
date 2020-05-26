import { NaverMap, Marker } from 'react-naver-maps';
import React, { Component } from 'react';


class MyMap extends Component {

    render(){
        const navermaps = window.naver.maps;
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
            <NaverMap
                mapDivId={'maps'}
                style={{
                width: '900px',
                height: '85vh' 
                }}
                defaultCenter={{  lat: 37.5450416, lng: 126.9647459 }}
                defaultZoom={15}
            >
                {loList}
          </NaverMap>
        )
    }
}

export default MyMap;
/*
            <Marker
                key={1}
                position={new navermaps.LatLng(37.5450416, 126.9647459 )}
                animation={2}
                mouseover={() => {alert('여기는 숙명여대입니다.');}}
            />
            <Marker       
                key={2}
                position={new navermaps.LatLng(37.551229, 126.988205)}
                animation={1}
                onClick={() => {alert('여기는 N서울타워입니다.');}}
            />
                    const loList = locations.map(
            <Marker
            key={1}
            position={new navermaps.LatLng(37.5450416, 126.9647459 )}
            animation={2}
            mouseover={() => {alert('여기는 숙명여대입니다.');}}
        />
        );
            */