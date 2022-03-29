import React from 'react'
import {NavLink} from 'react-router-dom'

const CategoriesItems = ({ item }) => {
    return (
        <>
            <NavLink exact to={`/shop/${item.category}`}>
                <div className="w-full m-4 relative">
                    <img className="w-full h-96 object-cover" src={item.img} alt={item.title} />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-3" style={{ background: "#00000045" }}>
                        <h1 className="text-white font-semibold text-3xl uppercase">{item.title}</h1>
                        <button className="bg-gray-200 text-gray-800 rounded px-6 py-2">Shop Now</button>
                    </div>
                </div>
            </NavLink>
        </>
    )
}

export default CategoriesItems
