
import React, { Component } from 'react';
import '../css/Review.css';

class ReviewItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    render() {
        const {text} = this.props
        return (
        <div className="review-item">
            <div className="review-text"> 
                <div>{text}</div>
            </div>
        </div>
        );
    }
}

export default ReviewItem;