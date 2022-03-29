import React, { useState } from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/navbar/Navbar'
import Products from '../components/home/Products'
import NewsLetter from '../components/home/NewsLetter'
import Footer from '../components/footer/Footer'
import { useLocation } from 'react-router-dom'

const ProductsList = () => {
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("newest")
    const location = useLocation()
    const cate = location.pathname.split("/")[2]

    const handleFilter = (event) => {
        const { name, value } = event.target;
        setFilters((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    
    return (
        <>
            <div>
                <Navbar />
                <Announcement />
                <div className="flex flex-col justify-center h-52 mx-12">
                    <h1 className="text-4xl font-bold mb-6">Dresses</h1>
                    <div className="flex justify-between items-center mb-5">
                        <div className="flex items-center gap-5">
                            <h2 className="text-xl font-bold">Filter Products:</h2>
                            <select name="color" onChange={handleFilter} className="border border-gray-300 px-3 py-2 outline-none">
                                <option value="color" selected>Color</option>
                                <option value="white">White</option>
                                <option value="black">Black</option>
                                <option value="red">Red</option>
                                <option value="blue">Blue</option>
                                <option value="yellow">Yellow</option>
                                <option value="green">Green</option>
                            </select>
                            <select name="size" onChange={handleFilter} className="border border-gray-300 px-3 py-2 outline-none">
                                <option selected>Size</option>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="2XL">2XL</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-5">
                            <h2 className="text-xl font-bold">Sort Products:</h2>
                            <select onChange={(e) => setSort(e.target.value)} className="border border-gray-300 px-3 py-2 outline-none">
                                <option value="newest" selected>Newest</option>
                                <option value="asc">Price(asc)</option>
                                <option value="desc">Price(desc)</option>
                            </select>
                        </div>
                    </div>
                </div>
                <Products cate={cate} filters={filters} sort={sort} />
                <NewsLetter />
                <Footer />
            </div>
        </>
    )
}

export default ProductsList
