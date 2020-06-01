import React from 'react';
import './Form.css';

/*import './Form.css';

const Form = ({mapPop, reviewForm, reviewList}) => {
    return(
        <main className="template">
            <div className="body">
                <div className="title">
                    <img className="icon" src="http://www.sookmyung.ac.kr/sites/sookmyungkr/images/sub/contents/trade_character_05.png" alt="logo"></img>
                    <h1 className="font">숙플레이스</h1>
                </div>
                <section className="map">
                    {mapPop}
                </section>
                <section className="review">
                    {reviews}
                </section>
            </div>
        </main>
    )
}

export default Form;
*/

const Form = ({mapPop, form, children}) => {
    return(
        <main className='template'>
            <section className="map">
                {mapPop}
            </section>
            <section className="review">
                {form}
            </section>
            <section className="reviewList">
                {children}
            </section>
        </main>  
    )
}



export default Form;