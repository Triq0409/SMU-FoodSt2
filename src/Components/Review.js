import React, { Component } from 'react';
import './Review.css';

class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    render() {
        const { text} = this.props
        return (
        <div className="review-item">
            <div className="text"> 
                <div>{text}</div>
            </div>
        </div>
        );
    }
}

export default TodoItem;