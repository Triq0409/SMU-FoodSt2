import React, {Component} from 'react';
import Review from './Review';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import ReviewTemplate from './ReviewTemplate';
import '../css/App.css';

class ReviewComp extends Component{
    id = 1
    state={
        input:'',
        reviews:[
            {id:0, text:'리뷰리스트'}
        ]
    }
    handleChange = (e) =>{
        this.setState({
          input : e.target.value,
        });
      }
    handleCreate = () => {
        const {input, reviews} = this.state;
        this.setState({
          reviews: reviews.concat({
            id: this.id++,
            text: input
          })
        })
      }
    render(){
        const {input, reviews} = this.state
        const{
            handleChange,
            handleCreate
        }=this;
        return (
            <div>
                <div className='textStyle'>송이들의 한마디</div>
                <ReviewTemplate
                    reviewform={
                        <ReviewForm
                            value={input}
                            onChange={handleChange}
                            onCreate={handleCreate}
                        />}
                    children={
                        <ReviewList
                            reviews={reviews}
                        />
                    }>
                </ReviewTemplate>
            </div>
        )
    }
}

export default ReviewComp;