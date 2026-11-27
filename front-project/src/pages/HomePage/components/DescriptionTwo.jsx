import React from "react";
import eat from '../../../assets/MainPageImage/eat.jpg'
import burger from '../../../assets/MainPageImage/burger.jpg'
import menu1 from '../../../assets/MainPageImage/menu1.jpg'
import burito from '../../../assets/MainPageImage/burito.jpg'
import burger2 from '../../../assets/MainPageImage/burger2.jpg'
import burger3 from '../../../assets/MainPageImage/burger3.jpg'
import q from '../../../assets/MainPageImage/123.png'
import w from '../../../assets/MainPageImage/4567.png'
import e from '../../../assets/MainPageImage/7890.png'

function DescriptionTwo() {
    return (
    <section className="description-two">
        <div className="description-two-text">
            <div className="glav-nav-text">
                <h2>Why Choose us</h2>
            </div>
            <div className="glav-color-text">
                <h1><span className="colortext">Ex</span>ta ordinary taste<br/> And Experienced</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque diam<br/> pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit<br/> augue
                    urna, vitae feugiat pretium donec id elementum.
                    Ultrices mattis<br/> sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in<br/> consequat.
                </p>
            </div>
            <br/>
        </div>
        <img className="foto4" src={eat} alt="еда" width="356" height="362" />
        <img className="foto5" src={menu1} alt="еда" width="281" height="231" />
        <img className="foto6" src={burger2} alt="еда" width="244" height="306" />
        <img className="foto7" src={burger3} alt="еда" width="221" height="226" />
        <img className="foto8" src={burger} alt="еда" width="161" height="168" />
        <img className="foto9" src={burito} alt="еда" width="161" height="166" />
        <div className="ikonka1"><img class="ikonka4" src={w} alt="ikonka"
                width="56" height="56" /></div>
        <div className="ikonka2"><img class="ikonka5" src={e} alt="ikonka"
                width="56" height="56" /></div>
        <div className="ikonka3"><img class="ikonka6" src={q} alt="ikonka"
                width="56" height="56" /></div>
        <h4 className="text17">Fast Food</h4>
        <h4 className="text18">Lunch</h4>
        <h4 className="text19">Dinner</h4>
        <div className="ikonka-img">
            <div className="text20"></div>
            <div className="text21"></div>
            <h1 className="text22">30+</h1>
            <p className="text23">Years of<br/> <b>Experienced</b></p>
        </div>
    </section>
    )
}

export default DescriptionTwo