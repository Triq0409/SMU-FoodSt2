import React, {Component} from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import ReviewTemplate from './ReviewTemplate';

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

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state)
        this.setState({
            textarea:''
        })
    }
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
            <ReviewTemplate
            reviewform={
                <ReviewForm
                    value={textarea.replace("\r\n",'<br>')}
                    onChange={handleChange}
                    //onCreate={handleCreate}
                    onSubmit={handleSubmit}
                />}
            children={
                <ReviewList
                    reviews={reviews} 
                    onRemove={handleRemove}
                />}
            >    
            </ReviewTemplate>
        )
    }
}

export default ReviewComp;