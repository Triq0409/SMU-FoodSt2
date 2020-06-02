import React, {Component} from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import ReviewTemplate from './ReviewTemplate';

class ReviewComp extends Component{
    id = 2
    state={
        input:'',
        reviews:[
            {id:0, text:'리뷰리스트'},
            {id:1, text:'왜 안돼'}
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
            <ReviewTemplate
            reviewform={
                <ReviewForm
                    value={input}
                    onChange={handleChange}
                    onCreate={handleCreate}
                />}
            >
                <ReviewList
                    reviews={reviews}
                />

            </ReviewTemplate>
        )
    }
}

export default ReviewComp;