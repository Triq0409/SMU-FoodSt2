import React from 'react';
import './Form.css';

const Form = ({mapPop, reviews}) => {
    return(
        <main className="template">
            <div className="title">
                숙플레이스
            </div>
            <section className="map">
                {mapPop}
            </section>
            <section className="review">
                {reviews}
            </section>
        </main>
    )
}

export default Form;