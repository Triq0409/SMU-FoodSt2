import React from 'react';
import '../css/Review.css';

const Review = ({text, onCreate}) =>  {
    return(
        <div className = "form">
            <input text={text} onCreate={onCreate}/>
            <div className="create-button" onClick={onCreate}>
                +
            </div>
        </div>
    )
}


export default Review;