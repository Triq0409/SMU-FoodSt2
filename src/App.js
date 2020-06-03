import React, {Component} from 'react';
import ReviewComp from './Components/ReviewComp';
import MapComp from './Components/MapComp';
import './css/App.css';

function App(){

    return(
      <div className="template">
        <div className="header">
          <img className="icon" src="http://www.sookmyung.ac.kr/sites/sookmyungkr/images/sub/contents/trade_character_05.png" alt="logo"></img>
          <div className="title">
          <a href="http://localhost:3000">
            <h4 className="fontSub">송&nbsp;이&nbsp;들&nbsp;의&nbsp; &nbsp;맛&nbsp;집&nbsp;가&nbsp;이&nbsp;드</h4><br /><br />
            <h1 className="font">숙플레이스</h1>
          </a>
          </div>
        </div>
        <div className="content">
        <MapComp />
        </div>

  </div>
);

}

export default App;


/*
    <div className="content">
      <MapComp />
      <div className="marginBtm">✦✦✦</div>
      <ReviewComp />
    </div>
<div className="template">
        <div className="header">
          <img className="icon" src="http://www.sookmyung.ac.kr/sites/sookmyungkr/images/sub/contents/trade_character_05.png" alt="logo"></img>
          <div className="title">
          <a href="http://localhost:3000">
            <h4 className="fontSub">송&nbsp;이&nbsp;들&nbsp;의&nbsp; &nbsp;맛&nbsp;집&nbsp;가&nbsp;이&nbsp;드</h4><br /><br />
            <h1 className="font">숙플레이스</h1>
          </a>
          </div>
        </div>

        <div className="content">
          <div className="mapContainer"><MapComp /></div>
          <div className="marginBtm">✦✦✦</div>
          <ReviewComp />
      </div>
    </div>
    
    
    <div className="revsiz">
            <ReviewComp />
          </div>*/