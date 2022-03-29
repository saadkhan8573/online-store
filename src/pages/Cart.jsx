import React from 'react'
import Announcement from '../components/Announcement';
import CartPage from '../components/cart/CartPage'
import Footer from '../components/footer/Footer';
import NewsLetter from '../components/home/NewsLetter';
import Navbar from '../components/navbar/Navbar';

const Cart = () => {
    return (
        <>
            <Navbar />
            <Announcement />
            <CartPage />
            <NewsLetter />
            <Footer />
        </>
    )
}

export default Cart;