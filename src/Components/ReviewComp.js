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

    handleRemove = (id) => {
        const { reviews } = this.state;
        this.setState({
          reviews: reviews.filter(review => review.id !== id)
        });
      }

    handleSubmit = () => {
        this.setState({
            input:''
        })
    }
    render(){
        const {input, reviews} = this.state
        const{
            handleChange,
            handleCreate,
            handleRemove,
            handleSubmit
        }=this;

        return (
            <ReviewTemplate
            reviewform={
                <ReviewForm
                    value={input}
                    onChange={handleChange}
                    onCreate={handleCreate}
                    onSubmit={handleSubmit}
                />}
            children={
                <ReviewList
                    reviews={reviews} 
                   // onRemove={handleRemove}
                />}
            >    
            </ReviewTemplate>
        )
    }
}

export default ReviewComp;