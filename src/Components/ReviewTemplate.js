import React from 'react';
import '../css/ReviewTemplate.css';

const ReviewTemplate = ({reviewform,children}) => {
    return(
        <main className="review-template">
            <section className="form-wrapper">
                {reviewform}
            </section>
            <section className="reviews-wrapper">
                {children}
            </section>
        </main>
    );
}

export default ReviewTemplate;