import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import MenuPage from "../../pages/menuPage/menuPage";
import HomePage from "../../pages/HomePage/HomePage";
import BlogPage from "../../pages/BlogPage/BlogPage";
import TwoPages from "../../pages/TwoPages/TwoPage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import ShopPage from "../../pages/ShopPage/ShopPage";
import ContactPage from "../../pages/ContactPage/ContactPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'home',
                element: <HomePage />
            },
            {
                path: 'menu',
                element: <MenuPage />
            },
            {
                path: 'blog',
                element: <BlogPage />
            },
            {
                path: 'page',
                element: <TwoPages />
            },
            {
                path: 'about',
                element: <AboutPage />
            },
            {
                path: 'shop',
                element: <ShopPage />
            },
            {
                path: 'contact',
                element: <ContactPage />
            },
        ]
    }
])

export default router