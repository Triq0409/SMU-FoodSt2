import React from 'react';
import '../css/ReviewForm.css';

const ReviewForm = ({text, onCreate, onChange}) =>  {
    return(
        <div className = "form">
            <input text={text} onChange={onChange} onCreate={onCreate}/>
            <div className="create-button" onClick={onCreate}>
                +
            </div>
        </div>
    )
}


export default ReviewForm;