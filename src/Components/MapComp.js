
import React, { Component } from 'react';
import { Marker } from 'react-naver-maps';
import MyMap from './NaverMaps';
import '../css/Map.css';
import './ReviewComp';
import ReviewComp from './ReviewComp';

const navermaps = window.naver.maps;
class MapComp extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
      }

    handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn,
          showResults: !prevState.showResults
        }));
      }

    render() {
        return (
            <div>
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
                <button className='infoBtn' onClick={this.handleClick}>{this.state.isToggleOn ? '리뷰 보기' : '리뷰 숨기기'}</button></div>
            </div>
            <div className="marginBtm">✦✦✦</div>
            {this.state.showResults ? <ReviewComp /> : null }
          </div>
        );
    }
}

export default MapComp;


// <button className='listBtn' onClick={() => alert(this.listName)}>출력</button>