
import React, { Component } from 'react';
import MyMap from './NaverMaps';
import '../css/Map.css';

class MapComp extends Component {
    state ={
        listName : undefined
    }
    render() {
        return (
            <div>
                <div>
                    <button className='listBtn' onClick={() => this.listName='cafeList'}>카페</button>
                    <button className='listBtn' onClick={() => this.listName='foodList'}>식당</button>
                    <button className='listBtn' onClick={() => this.listName='dessertList'}>디저트</button>
                    <button className='listBtn' onClick={() => alert(this.listName)}>출력</button>
                    <div>불러올 리스트의 이름은 {this.listName}입니다!</div>
                </div>
                <MyMap />
            </div>
        );
    }
}

export default MapComp;