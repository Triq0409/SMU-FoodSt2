import React, {Component} from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import ReviewTemplate from './ReviewTemplate';
import '../css/App.css';

class ReviewComp extends Component{
    id = 2
    state={
        textarea:'',
        reviews:[
            {id:0, text:'리뷰리스트'},
            {id:1, text:'왜 안돼'}
        ]

    }

    handleChange = (e) =>{
        this.setState({
          textarea : e.target.value,
        });
    }

    handleCreate = () => {
        const {textarea, reviews} = this.state;
        this.setState({
          reviews: reviews.concat({
            id: this.id++,
            text: textarea
          })
        })
    }

    render(){
        const {textarea,reviews} = this.state
        const{
            handleChange,
            handleCreate,
            handleRemove
        }=this;

        return (
        <div className="revsiz">      
            <div className='textStyle'>송이들의 한마디</div>
            <ReviewTemplate
            reviewform={
                <ReviewForm
                    value={textarea}
                    onChange={handleChange}
                    onCreate={handleCreate}
                />}
                >
                <ReviewList
                    reviews={reviews} 
                  //  onRemove={handleRemove}
                />
               
            </ReviewTemplate>
            {console.log("check")}
            {console.log(reviews)}
        </div>
        );
    }
}

export default ReviewComp;