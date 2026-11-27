import React from "react";
import ukrop from '../../../assets/MainPageImage/ukrop.png'
import tarelkaeat from '../../../assets/MainPageImage/tarelkaeat.png'
import eat2 from '../../../assets/MainPageImage/eat2.jpg'
import eat5 from '../../../assets/MainPageImage/eat5.jpg'
import eat6 from '../../../assets/MainPageImage/eat6.jpg'
import eat7 from '../../../assets/MainPageImage/eat7.jpg'
import eat78 from '../../../assets/MainPageImage/eat78.jpg'
import eat8 from '../../../assets/MainPageImage/eat8.jpg'
import eat9 from '../../../assets/MainPageImage/eat9.jpg'
import eat10 from '../../../assets/MainPageImage/eat9.jpg'


function TypeOfGoods() {
    return (
    <section className="types-of-goods">
        <div className="glavtext">
            <h2>Choose & pick</h2>
        </div>
        <div className="glavtext1">
            <h1><span className="colortext">Fr</span>om Our Menu</h1>
        </div>
        <div className="q1"><span className="colortext5">Breakfast</span>
            <span className="poisktext">Lunch</span>
            <span className="poisktext1">Dinner</span>
            <span className="poisktext2">Dessert</span>
            <span className="poisktext3">Drink</span>
            <span className="poisktext4">Snack</span>
            <span className="poisktext5">Suops</span>
        </div>
        <img className="foto14" src={ukrop} alt="укроп" width="506" height="412" />
        <img className="foto15" src={tarelkaeat} alt="тарелка с едой" />
        <div className="menu2">
            <img className="eat3" src={eat2} alt="еда" />
            <span className="divtext"><b>Lettuce Leaf</b></span>
            <p className="divtext1">Lacus nisi, et ac dapibus velit in consequat.</p>
            <h2 className="divtext2">30$</h2>
        </div>
        <div className="menu3">
            <img className="eat3" src={eat5} alt="еда" />
            <span className="divtext"><b>Fresh Breakfast</b></span>
            <p className="divtext1">Lacus nisi, et ac dapibus velit in consequat.</p>
            <h2 className="divtext2">14.5$</h2>
        </div>
        <div className="menu4">
            <img className="eat3" src={eat6} alt="еда" />
            <span className="divtext"><b>Mild Butter</b></span>
            <p className="divtext1">Lacus nisi, et ac dapibus velit in consequat.</p>
            <h2 className="divtext2">12.5$</h2>
        </div>
        <div className="menu5">
            <img className="eat3" src={eat7} alt="еда" />
            <span className="divtext"><b>Fresh Bread</b></span>
            <p className="divtext1">Lacus nisi, et ac dapibus velit in consequat.</p>
            <h2 className="divtext2">12.5$</h2>
        </div>
        <div className="menu6">
            <img className="eat3" src={eat78} alt="еда" />
            <span className="divtext"><b>Glow Cheese</b></span>
            <p className="divtext1">Lacus nisi, et ac dapibus velit in consequat.</p>
            <h2 className="divtext2">12.5$</h2>
        </div>
        <div className="menu7">
            <img className="eat3" src={eat8} alt="еда" />
            <span className="divtext"><b>Italian Pizza</b></span>
            <p className="divtext1">Lacus nisi, et ac dapibus velit in consequat.</p>
            <h2 className="divtext2">14.5$</h2>
        </div>
        <div className="menu8">
            <img className="eat3" src={eat9} alt="еда" />
            <span className="divtext"><b>Sllice Beef</b></span>
            <p className="divtext1">Lacus nisi, et ac dapibus velit in consequat.</p>
            <h2 className="divtext2">12.5$</h2>
        </div>
        <div className="menu9">
            <img className="eat3" src={eat10} alt="еда" />
            <span className="divtext"><b>Mushaom Pizza</b></span>
            <p className="divtext1">Lacus nisi, et ac dapibus velit in consequat.</p>
            <h2 className="divtext2">12.5$</h2>
        </div>
    </section>
    )
}

export default TypeOfGoods