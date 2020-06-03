import React,{Component} from 'react';
import '../css/ReviewForm.css';

const ReviewForm = ({value, onSubmit, onCreate, onChange}) =>  {
    
    return(
        <div className = "form" onSubmit={onSubmit}>
            <input value={value} onChange={onChange} />
            <div className="create-button" onClick={onCreate}>
                +
            </div>
        </div>
    )
}

export default ReviewForm;