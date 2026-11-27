import React from "react";
import bludo from '../../../assets/MainPageImage/bludo.jpg'
import bludo1 from '../../../assets/MainPageImage/bludo1.jpg'
import bludo2 from '../../../assets/MainPageImage/bludo2.jpg'
import { Link } from "react-router";


function DescriptionSection() {
    return (
    <section className="description">
        <div className="glav-nav-text">
            <h2>About us</h2>
        </div>
        <div className="glav-text">
            <h1><span className="colortext">We</span> Create the best<br/> foody product</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque diam<br/>pellentesque bibendum non dui volutpat fringilla bibendum. Urna,
                elit<br/> augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis<br/> sed vitae
                mus risus. Lacus nisi, et ac dapibus sit eu velit in<br/> consequat.</p>
        </div>
        <div className="description-text">
            <p className="text7"> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            <p className="text8">Quisque diam pellentesque bibendum non dui volutpat fringilla</p>
            <p className="text9">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="description-button"><Link><button>Read More</button></Link></div>
        <img className="foto1" src={bludo} alt="яица" width="660" height="330" /><br/>
        <img className="foto2" src={bludo1} alt="мясо" width="322" height="194" />
        <img className="foto3" src={bludo2} alt="сэндвичи" width="322" height="194" />
    </section>
    )
}

export default DescriptionSection