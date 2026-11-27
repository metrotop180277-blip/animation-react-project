import React from "react";
import GlavMenu from "./componentsMenuPage/GlavMenu";
import MenuTovar from "./componentsMenuPage/menuTovar";
import Modal from "../../app/Modal/Modal";

function MenuPage() {
    return (
        <section style={{backgroundColor: "white"}}>
            <GlavMenu />
            <MenuTovar />
            <Modal />
        </section>
    )
}

export default MenuPage