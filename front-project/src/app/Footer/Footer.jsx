import React from "react";
import { Link } from "react-router";
import Watch from '../../assets/MainPageImage/Watch.png'
import Socialiicon from '../../assets/MainPageImage/Socialiicon.png'

function Footer() {
    return (
    <footer id="4" className="footer-menu"  style={{backgroundColor: '#0D0D0D'}}>
        <div className="start-footer">
            <h1 className="start-glav-footer-text"><span className="colortext">St</span>ill You Need Our Support ?</h1>
            <span className="start-footer-text">Dont wait make a smart & logical quote here. Its pretty easy.</span>
            <div className="part-start-footer">
                <span className="part-start-footer-text"><Link className="aaa">Enter Your
                        Email</Link></span>
                <div className="par2t-start-footer">
                    <span className="part-start-footer-text2"><Link className="aa">Subscribe Now</Link></span>
                </div>
            </div>
        </div>
        <h1 className="footer-glav-text"><br/>About Us.</h1>
        <p className="footer-text">orporate clients and leisure travelers has <br/>
            been relying on Groundlink for dependab <br/>
            safe, and professional chauffeured car <br/>
            service in major cities across World.</p><br/>
        <img className="footer-img" src={Watch} alt="Часы" width="78" height="72"/>
        <span className="footer-text2">Opening Houres <br/>
            Mon - Sat(8.00 - 6.00) <br/>
            Sunday - Closed</span>
        <nav className="nav-footer">
            <div className="footer-nav">
                <ul>
                    <h1 className="footer-text-h1">Useful Links</h1>
                    <li className="footer-nav-list"><Link className="footer-nav-link">About</Link></li>
                    <li className="footer-nav-list"><Link className="footer-nav-link">News</Link></li>
                    <li className="footer-nav-list"><Link className="footer-nav-link">Partners</Link></li>
                    <li className="footer-nav-list"><Link className="footer-nav-link">Team</Link></li>
                    <li className="footer-nav-list"><Link className="footer-nav-link">Menu</Link></li>
                    <li className="footer-nav-list"><Link className="footer-nav-link">Contacts</Link></li>
                </ul>
            </div>
            <div className="footer-nav1">
                <ul>
                    <h1 className="footer-text-h1">Help?</h1>
                    <li className="footer-nav-list1"><Link className="footer-nav-link1">FAQ</Link></li>
                    <li className="footer-nav-list1"><Link className="footer-nav-link1">Term & conditions</Link></li>
                    <li className="footer-nav-list1"><Link className="footer-nav-link1">Reporting</Link></li>
                    <li className="footer-nav-list1"><Link className="footer-nav-link1">Documentation</Link></li>
                    <li className="footer-nav-list1"><Link className="footer-nav-link1">Support Policy</Link></li>
                    <li className="footer-nav-list1"><Link className="footer-nav-link1">Privacy</Link></li>
                </ul>
            </div>
        </nav>
        <div className="end-footer">
            <p className="end-footer-text">Copyright © 2022 by Ayeman. All Rights Reserved.</p>
            <img className="end-footer-img" src={Socialiicon} alt=""/>
        </div>
    </footer>
    )
}

export default Footer