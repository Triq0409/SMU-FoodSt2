import React, { Component } from 'react';
import '../css/Review.css';

class ReviewItem extends Component {

    render() {
        const {text, id, onRemove} = this.props

        return (
            <div className="review-item"> 
                <div className="review-text"> 
                    <div>{text}</div>
                </div>
                <div className="remove" onRemove={onRemove(id)}>&times;
                </div>
            </div>
        );
    }
}

export default ReviewItem;