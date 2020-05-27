import React from 'react';
import {  NaverMap, Marker } from 'react-naver-maps';

import MyMap from './Components/NaverMaps';
import Write from './Components/Review';

import './css/test.css';


function App() {
  return (
    <div className="template">
      <div className="title">

        <h4 className="fontSub">송&nbsp;이&nbsp;들&nbsp;의&nbsp; &nbsp;맛&nbsp;집&nbsp;가&nbsp;이&nbsp;드</h4><br />
        <h1 className="font">숙플레이스</h1>
      
      </div>
      
      <div className="content">
        <div className="map">
          <MyMap />
        </div>
        Review 공간입니다
      </div>
    
    </div>
  );
};

export default App;

/*
     <Form mapPop={(
      <MyMap />
    )}
    reviews={(
      <Write />
    )}
    >
    </Form>
  );
*/

