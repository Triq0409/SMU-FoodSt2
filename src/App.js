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



