import React from 'react';
import '../css/test.css';

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

const Form = ({mapPop, reviews}) => {
    return(
        <main>
                <div>
                    <h1>숙플레이스</h1>
                </div>
            <div className="centered">
                <div className="content">
                    <div className="map">
                        {mapPop}
                    </div>
                    <div>
                        {reviews}
                        review 영역입니다.
                    </div>
                </div>
            </div>
        </main>
        )
    }
        /*
            <section className="map">
                {mapPop}
            </section>
            <section className="review">
                {reviewForm}
            </section>
            <section className="reviewList">
                {reviewList}
            </section>

*/

export default Form;