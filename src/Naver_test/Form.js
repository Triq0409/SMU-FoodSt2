import React from 'react';
import './Form.css';

const Form = ({mapPop, reviewForm, reviewList}) => {
    return(
        <main className="template">
            <div className="title">
                숙플레이스
            </div>
            <section className="map">
                {mapPop}
            </section>
            <section className="review">
                {reviewForm}
            </section>
            <section className="reviewList">
                {reviewList}
            </section>
        </main>
    )
}

export default Form;