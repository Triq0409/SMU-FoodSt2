/*
import React, {Component} from 'react';
import MyMap from './Components/NaverMaps';
import Template from './Naver_test/Form';
import './App.css';
import Form from './Components/ReviewForm';
import ReviewList from './Components/reviewList';


class App extends Component {
  id = 1

  state = {
    input:'',
    reviews:[
      {id:0, text: '리뷰테스트'}
    ]
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value 
    });
  }
  handleCreate = () => {
    const { input,reviews } = this.state;
    this.setState({
      input: '', 
      reviews: reviews.concat({
        id: this.id++,
        text: input,
      })
    });
  }

  render(){
    const {input,reviews} = this.state;
    const{
      handleChange,
      handleCreate
    } = this;

    return (
      <Template mapPop={(
        <MyMap />
      )}
      reviews={(
        <Form
          text={input}
          onChange={handleChange}
          onCreate={handleCreate}
        />)}
      reviewList={(
        <ReviewList 
          reviews={reviews}
        />
      )}>
      </Template>
    );

  }
}

export default App;


*/
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


