import React from 'react';
import './Write.css';

const Write = ({text, onCreate}) =>  {
    return(
        <div className = "form">
            <input text={text} onCreate={onCreate}/>
            <div className="create-button" onClick={onCreate}>
                +
            </div>
        </div>
    )
}


export default Write;