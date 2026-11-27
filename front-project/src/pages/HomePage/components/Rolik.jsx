import React from "react";
import { Link } from "react-router";
import menuu from '../../../assets/MainPageImage/menu1717.png'
import Play from '../../../assets/MainPageImage/Play.png'

function Rolik() {
    return (
    <section className="rolik">
        <div className="rolik">
            <img className="rolik-img" src={menuu} alt="видеоролик" />
            <h2 className="text31">Restaurant Active Process</h2>
            <h1 className="text32"><span className="colortext7">We</span> Document Every Food <br/>
                Bean Process untile it is saved</h1>
            <p className="text33">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque diam pellentesque <br/> bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, </p>
            <button className="knopka3"><Link className="knopka2-a">Read More</Link></button>
            <button className="knopka4"><img src={Play} alt="" /></button>
            <b className="text34">Paly Video</b>
        </div>
    </section>
    )
}

export default Rolik