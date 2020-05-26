import React, { Component } from 'react';
import MyMap from './Naver_test/test.js';

class App2 extends React.Component {
    render() {
    const navermaps = window.naver.maps;
    return (
      <div>
        <MyMap 
          key={1}
          position={new navermaps.LatLng(37.546368, 126.9626371)}
          animation={2}
          onClck={()=>{alert('여기는 숙명여자대학교입니다.');}}
        />
      </div>
    )
  }
}

export default App2;