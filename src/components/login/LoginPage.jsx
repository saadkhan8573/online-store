import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { userlogin } from '../../redux/actions/authAction'
import { publicrequest } from '../../requestMethods'

const LoginPage = () => {
    const [handleInput, sethandleInput] = useState({
        username: "",
        password: ""
    })
    const history = useHistory()

    useEffect(() => {
        localStorage.getItem('login') && history.push("/");
    }, [])

    const dispatch = useDispatch()
    const { isFetching } = useSelector(state => state.LoginReducer)

    const handleChange = (event) => {
        const { name, value } = event.target;
        sethandleInput((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        dispatch(userlogin(handleInput))
        setTimeout(() => {
            localStorage.getItem('login') && history.push("/");
        }, 1500);
    }
    return (
        <>
            <div className="w-full h-screen flex justify-center items-center" style={{ background: "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url('https://i.pinimg.com/originals/09/77/5b/09775b464a1f3320ea36bd08452e4dce.jpg')" }}>
                <div className="w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/4 p-6 bg-white ">
                    <h1 className="text-3xl font-extralight uppercase tracking-wider text-center">Sign In</h1>
                    <form className="w-full mx-auto" onSubmit={handleSubmit}>
                        <input className="my-3 px-2 w-full h-10 border outline-none" type="text" placeholder="username" name="username" value={handleInput.username} onChange={handleChange} />
                        <input className="my-3 px-2 w-full h-10 border outline-none" type="password" placeholder="password" name="password" value={handleInput.password} onChange={handleChange} />
                        <button className="text-white px-12 py-3 mt-3 uppercase" type="submit" style={{ backgroundColor: "teal" }}>{isFetching ? "Loading" : "Login"}</button>
                        <p className="text-sm text-gray-500 my-2 uppercase"><u>Do Not you remember the password?</u></p>
                        <NavLink exact to="/register"><p className="text-sm text-gray-500 my-2 uppercase"><u>Create a new Account</u></p></NavLink>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage;