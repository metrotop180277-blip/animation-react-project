import React from "react";
// import Nav from "../Nav/Nav";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout() {
    return (
        <div>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer />
        </div>
    )
}

export default Layout