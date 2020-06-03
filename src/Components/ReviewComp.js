import React, {Component} from 'react';
import Review from './Review';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import ReviewTemplate from './ReviewTemplate';

import '../css/App.css';
import '../css/Review.css';

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

    handleRemove = (id) => {
        const { reviews } = this.state;
        this.setState({
          reviews: reviews.filter(review => review.id !== id)
        });
      }

   /*handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state)
        this.setState({
            textarea:''
        })
    }*/
    render(){
        
        const {textarea,reviews} = this.state
       // var contents = textarea.replace("\r\n","<br>");
        const{
            handleChange,
            handleCreate,
            handleRemove,
            handleSubmit
        }=this;

        return (
        <div className="revsiz">      
            <div className='textStyle'>송이들의 한마디</div>
            <ReviewTemplate
            reviewform={
                <ReviewForm
                    value={textarea.replace("\r\n",'<br>')}
                    onChange={handleChange}
                    onCreate={handleCreate}
                   // onSubmit={handleSubmit}
                />}
            children={
                <ReviewList
                    reviews={reviews} 
                    onRemove={handleRemove}
                />}
            >    
            </ReviewTemplate>
        </div>
        );
    }
}

export default ReviewComp;