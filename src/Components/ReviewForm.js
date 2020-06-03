import React,{Component} from 'react';
import '../css/ReviewForm.css';

const ReviewForm = ({value, onCreate, onChange}) =>  {
    
    return(
        <div className = "form" >
            <textarea value={value.replace('\r\n','<br>')} onChange={onChange} 
            />
            <div className="create-button" onClick={onCreate}>
                +
            </div>
        </div>
    )
}

export default ReviewForm;