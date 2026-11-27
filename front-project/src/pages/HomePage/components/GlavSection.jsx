import React from "react";
import { Link } from "react-router";
import oneList from '../../../assets/MainPageImage/List-1.png'
import twoList from '../../../assets/MainPageImage/List-2.png'
import ellipse from '../../../assets/MainPageImage/Ellipse.png'
import rectangle from '../../../assets/MainPageImage/Rectangle.png'
import tarelki from '../../../assets/MainPageImage/Tarelki.png'

function GlavSection() {
    return (
    <section className="glav">
        <div className="glav-glav">
            <div className="glav-nav-text">
                <h2>Its Quick & Amusing!</h2>
            </div>
            <div className="glav-text">
                <h1><span className="colortext">Th</span>e Art of speed <br/> food Quality</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                    Varius sed pharetra dictum neque massa congue</p>
            </div>
            <div className="menu-button"><Link to={'/menu'}><button>See Menu</button></Link></div>
        </div>
        <div className="img-glav">
            <img className="Tarelki" src={tarelki} alt="" />
            <img className="Ellipse" src={ellipse} alt="" />
            <img className="List-1" src={oneList} alt="" />
            <img className="List-2" src={twoList} alt="" />
            <img className="Rectangle" src={rectangle} alt="" />
        </div>
    </section>
    )
}

export default GlavSection