import React, {Component} from 'react';
import ReviewItem from './Review';

class ReviewList extends Component{
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.reviews !== nextProps.reviews;
      } 

      render() {
        const { reviews, onRemove } = this.props;
        
        const reviewList = reviews.map(
            ({id, text}) => (
              <ReviewItem 
                id={id}
                text={text}
                onRemove={onRemove}
            />
            )
        )

        return(
            <div>
                {reviewList}
            </div>
        )
    }
}

export default ReviewList;
