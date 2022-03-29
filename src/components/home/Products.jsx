import React from 'react'
import Product from './Product'
import { ProductsData } from '../../data'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
const Products = ({ cate, filters, sort }) => {
    const [products, setProducts] = useState([])
    const [filteredproducts, setFilteredproducts] = useState([])
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(cate
                    ? `http://localhost:5000/api/products?category=${cate}`
                    : "http://localhost:5000/api/products"
                );
                setProducts(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getProducts()
    }, [cate])

    useEffect(() => {
        cate &&
            setFilteredproducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            );
    }, [products, cate, filters]);

    useEffect(() => {
        if (sort === "newest") {
            setFilteredproducts((preVal) => {
                return [...preVal].sort((a, b) => a.createdAt - b.createdAt)
            })
        } else if (sort === "asc") {
            setFilteredproducts((preVal) => {
                return [...preVal].sort((a, b) => a.price - b.price)
            })
        } else {
            setFilteredproducts((preVal) => {
                return [...preVal].sort((a, b) => b.price - a.price)
            })
        }
    }, [sort])
    console.log("cate",cate)
    return (
        <>
            <div className="flex flex-wrap justify-center items-center px-7">
                {cate ?
                    filteredproducts.map((product) => {
                        return (<>
                            <Product product={product} />
                        </>)
                    }) :
                    products.map((product) => {
                        return (<>
                            <Product product={product} />
                        </>)
                    })
                }
            </div>
        </>
    )
}

export default Products
