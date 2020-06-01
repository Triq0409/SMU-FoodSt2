import React from 'react';
import {  NaverMap, Marker } from 'react-naver-maps';

import MyMap from './Components/NaverMaps';
import Write from './Components/Review';

import './css/App.css';


function App() {
  return (
    <div className="template">
      <div className="header">
        <img className="icon" src="http://www.sookmyung.ac.kr/sites/sookmyungkr/images/sub/contents/trade_character_05.png" alt="logo"></img>
          <div className="title">
          <a href="http://www.naver.com">
            <h4 className="fontSub">송&nbsp;이&nbsp;들&nbsp;의&nbsp; &nbsp;맛&nbsp;집&nbsp;가&nbsp;이&nbsp;드</h4><br /><br />
            <h1 className="font">숙플레이스</h1>
          </a>
          </div>
      </div>
        <div className="content">
          <div>
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

