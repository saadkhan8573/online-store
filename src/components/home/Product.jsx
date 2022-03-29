import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../../redux/actions/cartAction';

const Product = ({ product }) => {
    const { products } = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();

    const handleClick = () => {
        const updatedData = products?.find(val => val._id == product._id)
        updatedData ? alert("You already Added this Product in to Cart") : dispatch(addtocart(product))
    }
    return (
        <>
            <div className="flex flex-col justify-center items-center m-1  w-1/4 h-96 bg-gray-50 cursor-pointer relative">
                <img className="w-3/4 h-2/3 object-cover z-10" src={product.img || "https://www.w3schools.com/howto/img_avatar.png"} alt="" />
                <div className="w-11/12 h-4/5 absolute bg-white rounded-full"></div>
                <div className="flex justify-center items-center gap-4 absolute top-0 left-0 w-full h-full z-20 transition-all opacity-0 hover:opacity-100" style={{ background: "#00000030" }}>
                    <div className="bg-white rounded-full w-12 h-12  cursor-pointer flex items-center justify-center" onClick={handleClick}>
                        <ShoppingCartOutlinedIcon />
                    </div>
                    <div className="bg-white rounded-full w-12 h-12  cursor-pointer flex items-center justify-center">
                        <NavLink exact to={`/product/${product._id}`}><SearchOutlinedIcon /></NavLink>
                    </div>
                    <div className="bg-white rounded-full w-12 h-12  cursor-pointer flex items-center justify-center">
                        <FavoriteBorderOutlinedIcon />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Product
