import React from "react";
import { Link } from "react-router";
import glavmenu from '../../../assets/MenuPageImage/tar.gif'

function GlavMenu() {
    return (
        <section className="glav-menu" style={{backgroundImage: `url(${glavmenu})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "410px"}}>
            <div className="nav-text" style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "36vh"}}>
                <h1 className="glav-text" style={{fontSize: "48px", color: "white", margin: "0"}}>Our Shop</h1>
                <p className="nav-pod-text" style={{color: "white", wordSpacing: "5px"}}><Link to={'/home'} className="aa" style={{color: "white"}}>Home</Link> {'>'} <Link to={'/menu'} className="colortext">Shop</Link></p>
            </div>
        </section>
    )
}

export default GlavMenu