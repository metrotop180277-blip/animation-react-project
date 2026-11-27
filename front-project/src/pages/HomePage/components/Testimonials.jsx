import React from "react";
import pepel from '../../../assets/MainPageImage/pepel.jpg'
import Quotes from '../../../assets/MainPageImage/Quotes.png'
import star from '../../../assets/MainPageImage/star.png'
import Dot from '../../../assets/MainPageImage/Dot.png'

function Testimonials() {
    return (
        <section className="Testimonials">
            <h2 className="text26">Testimonials</h2>
            <h1 className="text27">What our client are saying</h1>
            <div className="divblock">
                <img className="pepel1" src={pepel} alt="человек" width="133" height="134" />
                <img className="nine" src={Quotes} alt="99" />
                <p className="text28"> ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque diam pellentesque <br/> bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna,
                    vitae feugiat <br /> pretium donec id elementum. Ultrices mattis sed vitae mus risus.
                    Lacus nisi, et ac <br /> dapibus sit eu velit in consequat.</p>
                <img className="fotoblock1" src={star} alt="оценка" />
                <b className="text29">Alamin Hasan</b>
                <span className="text30">Food Specialist</span>
            </div>
            <img className="peremes" src={Dot} alt="" />
        </section>
    )
}

export default Testimonials