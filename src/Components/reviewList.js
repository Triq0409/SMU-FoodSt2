import React, {Component} from 'react';
import ReviewItem from './Review';

class ReviewList extends Component{
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.reviews !== nextProps.reviews;
      } 

      render() {
        const { reviews } = this.props;
        
        const reviewList = reviews.map(
            ({id, text}) => (
              <ReviewItem 
                id={id}
                text={text}
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
