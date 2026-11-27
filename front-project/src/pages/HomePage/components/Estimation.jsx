import React from "react";
import Group from '../../../assets/MainPageImage/Group.png'
import pribor from '../../../assets/MainPageImage/pribor.png'
import pizza from '../../../assets/MainPageImage/pizza.png'
import eatMenu from '../../../assets/MainPageImage/eatmenu.png'

function Estimation() {
    return (
    <section className="estimation">
        <div className="fotoblock">
            <div className="foto10"><img src={Group} alt="шеф" />
                <p className="textblock">Professional Chefs</p>
                <p className="textblock4">420</p>
            </div>
            <div className="foto11"><img src={eatMenu} alt="меню" />
                <p className="textblock1">Items Of Food</p>
                <p className="textblock5">320</p>
            </div>
            <div className="foto12"><img src={pribor} alt="столовые приборы" />
                <p className="textblock2">Years Of Experienced</p>
                <p className="textblock6">30+</p>
            </div>
            <div className="foto13"><img src={pizza} alt="пицца" />
                <p className="textblock3">Happy Customers</p>
                <p className="textblock7">220</p>
            </div>
        </div>
    </section>
    )
}

export default Estimation