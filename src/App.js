
import React, {Component} from 'react';
import {  NaverMap, Marker } from 'react-naver-maps';

import MapComp from './Components/MapComp'
import Write from './Components/Review';
import Form from './Components/ReviewForm';
import ReviewList from './Components/reviewList';
import Template from './Naver_test/Form';

import './css/App.css';

function App(){

    return(
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
          <MapComp />
          Review 영역입니다!
        </div>
      </div>

);

}

export default App;

/*
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
      form={(
        <Form
          text={input}
          onChange={handleChange}
          onCreate={handleCreate}
        />)}
      children={(
        <ReviewList 
          reviews={reviews}
        />
      )}>
      </Template>
    );

  }
}

export default App;

function App() {
  
  const {input,reviews} = this.state;
  const{
    handleChange,
    handleCreate
  } = this;

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
          <div>
          form={(
            <Form
              text={input}
              onChange={handleChange}
              onCreate={handleCreate}
            />)}
          children={(
            <ReviewList 
              reviews={reviews}
            />
          )}>
          </div>
        </div>
    </div>
  );
};

export default App;


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


