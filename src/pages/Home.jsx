import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/navbar/Navbar';
import Slider from '../components/home/Slider'
import Categories from '../components/home/Categories';
import Products from '../components/home/Products';
import NewsLetter from '../components/home/NewsLetter'
import Footer from '../components/footer/Footer'

const Home = () => {
    return (
        <>
            <Announcement />
            <Navbar />
            <Slider/>
            <Categories/>
            <Products/>
            <NewsLetter/>
            <Footer/>
        </>
    )
}

export default Home
