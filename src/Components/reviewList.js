import React, {Component} from 'react';
import Review from './Review';

class ReviewList extends Component{
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
      } 
      render() {
        const { reviews } = this.props;

        const reviewList = reviews.map(
            ({id, text}) => (
              <Review
                id={id}
                text={text}
            />
            )
        );

        return(
            <div>
                {reviewList}
            </div>
        )
    }
}

export default ReviewList;
