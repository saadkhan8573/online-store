import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const { quantity } = useSelector(state => state.cartReducer)
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-0 h-auto md:h-20 py-5 md:py-0 bg-gray-50 px-7">
                <div className="flex flex-1 items-center gap-3">
                    <h2 className="text-xl font-bold">EN</h2>
                    <div className="flex items-center border border-gray-300 rounded-sm h-10 md:w-1/2 px-2">
                        <input type="text" placeholder="Search..." className="bg-transparent flex-grow outline-none mx-2" />
                        <SearchOutlinedIcon />
                    </div>
                </div>
                <div className="flex flex-1 justify-center">
                    <NavLink exact to="/"><h1 className="text-4xl font-bold">SAAD.</h1></NavLink>
                </div>
                <div className="flex flex-1 justify-end items-center gap-7">
                    {
                        localStorage.getItem('login') ?
                            <NavLink exact to="/logout"><h3>Logout</h3></NavLink>
                            :
                            <>
                                <NavLink exact to="/register"><h3>Register</h3></NavLink>
                                <NavLink exact to="/login"><h3>Login</h3></NavLink>
                            </>
                    }
                    <NavLink exact to="/cart">
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlinedIcon color="action" />
                        </Badge>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar
