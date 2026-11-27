import React from "react";
import Nav from "../Nav/Nav";
import { Link, useLocation } from "react-router";
import MagnifyingGlass from '../../assets/MainPageImage/MagnifyingGlass.png'
import User from '../../assets/MainPageImage/User.png'
import Tote from '../../assets/MainPageImage/Tote.png'

function Header() {
    const location = useLocation()
    
    if (location.pathname === '/menu') {
        return (
            <header style={{backgroundColor: "#0D0D0D", height: "90px", display: "flex", width: "100%"}}>
                <div className="header-logo" style={{color: "white", marginLeft: "200px", width: "fit-content"}}>Food<span className="colortext">tuck</span></div>
                <nav className="header-nav">
                    <div className="header-lists">
                        <ul className="header-ul" style={{marginLeft: "342px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "32px"}}>
                            <li className="header-list1"><Link to={'/home'} className="header-links" style={{textDecoration: "none", wordSpacing: "32px", color: "orange", transition: "0.5s ease"}}>Home</Link></li>
                            <li className="header-list"><Link to={'/menu'} className="header-link" style={{textDecoration: "none", wordSpacing: "32px", color: "white", transition: "0.5s ease"}}>Menu</Link></li>
                            <li className="header-list"><Link to={'/blog'} className="header-link" style={{textDecoration: "none", wordSpacing: "32px", color: "white", transition: "0.5s ease"}}>Blog</Link></li>
                            <li className="header-list"><Link to={'/pages'} className="header-link" style={{textDecoration: "none", wordSpacing: "32px", color: "white", transition: "0.5s ease"}}>Pages</Link></li>
                            <li className="header-list"><Link to={'/about'} className="header-link" style={{textDecoration: "none", wordSpacing: "32px", color: "white", transition: "0.5s ease"}}>About</Link></li>
                            <li className="header-list"><Link to={'/shop'} className="header-link" style={{textDecoration: "none", wordSpacing: "32px", color: "white", transition: "0.5s ease"}}>Shop</Link></li>
                            <li className="header-list"><Link to={'/contact'} className="header-link" style={{textDecoration: "none", wordSpacing: "32px", color: "white", transition: "0.5s ease"}}>Contact</Link></li>

                            <img className="header-img" style={{position: "relative", left: "257px"}} src={MagnifyingGlass} alt="поиск" width="24" height="24" />
                            <img className="header-img" style={{position: "relative", left: "257px"}} src={User} alt="люди" width="24" height="24" />
                            <img className="header-img" style={{position: "relative", left: "257px"}} src={Tote} alt="корзина" width="24" height="24" />
                        </ul>
                    </div>
                </nav>
            </header>
            )
    }


    return (
        <header style={{backgroundColor: '#0D0D0D'}}>
            <div className="header-logo">
                <h4 className="header-logo-color">Food<span className="text">tuck</span></h4>
            </div>
        <Nav/>
        </header>
    )
}

export default Header