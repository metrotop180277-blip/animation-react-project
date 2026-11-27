import React from "react";
import GlavSection from "./components/GlavSection";
import DescriptionSection from "./components/DescriptionSection";
import FoodCategory from "./components/FoodCategory";
import DescriptionTwo from "./components/DescriptionTwo";
import Estimation from "./components/Estimation"
import TypeOfGoods from "./components/typeOfGoods";
import Chefs from "./components/Chefs";
import Testimonials from "./components/Testimonials";
import Rolik from "./components/Rolik";
import BlogPost from "./components/BlogPost";
import './HomePage.css'

function HomePage() {
    return (
        <section style={{backgroundColor: '#0D0D0D'}}>
        <GlavSection />
        <DescriptionSection />
        <FoodCategory />
        <DescriptionTwo />
        <Estimation />
        <TypeOfGoods />
        <Chefs />
        <Testimonials />
        <Rolik />
        <BlogPost />
        </section>
    )
}

export default HomePage