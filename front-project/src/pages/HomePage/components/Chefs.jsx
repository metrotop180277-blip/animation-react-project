import React from "react";
import card2 from '../../../assets/MainPageImage/Card2.png'
import card3 from '../../../assets/MainPageImage/Card3.png'
import card4 from '../../../assets/MainPageImage/Card4.png'
import card5 from '../../../assets/MainPageImage/Chefcard.png'

function Chefs() {
    return (
    <section className="Chefs">
        <h2 className="text24">Chefs</h2>
        <h1 className="text25"><span className="colortext6">Me</span>et Our Chef</h1>
        <div className="shef">
            <img className="shef1" src={card5} alt="шеф" width="312" height="391" />
            <img className="shef2" src={card2} alt="шеф" width="312" height="391" />
            <img className="shef2" src={card3} alt="шеф" width="312" height="391" />
            <img className="shef2" src={card4} alt="шеф" width="312" height="391" />
        </div>
        <button className="knopka2"><a class="knopka2-a" href="#">See More</a></button>
    </section>
    )
}

export default Chefs