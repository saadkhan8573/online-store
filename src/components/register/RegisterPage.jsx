import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { userRegister } from '../../redux/actions/authAction';
import { useHistory } from 'react-router-dom';

const RegisterPage = () => {
    const [handleInput, setHandleInput] = useState({
        fname: "",
        lname: "",
        username: "",
        email: "",
        password: "",
        c_pass: ""
    })
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        localStorage.getItem('login') && history.push("/");
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setHandleInput((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const obj = {
            username: handleInput.username,
            email: handleInput.email,
            password: handleInput.password,
        }
        dispatch(userRegister(obj))

        setHandleInput({
            fname: "",
            lname: "",
            username: "",
            email: "",
            password: "",
            c_pass: ""
        })
    }
    return (
        <>
            <div className="w-full min-h-screen flex justify-center items-center py-5 md:py-0" style={{ background: "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url('https://i.pinimg.com/originals/09/77/5b/09775b464a1f3320ea36bd08452e4dce.jpg')" }}>
                <div className="w-11/12 sm:w-2/3 md:w-1/2 lg:w-2/5 p-6 bg-white ">
                    <h1 className="text-2xl md:text-3xl font-extralight uppercase tracking-wider text-center">Create an account</h1>
                    <form className="flex flex-wrap justify-center w-full mx-auto" onSubmit={handleSubmit}>
                        <input className="m-2 px-2 w-full md:w-5/12 h-10 border outline-none" type="text" placeholder="first name" name="fname" value={handleInput.fname} onChange={handleChange} />
                        <input className="m-2 px-2 w-full md:w-5/12 h-10 border outline-none" type="text" placeholder="last name" name="lname" value={handleInput.lname} onChange={handleChange} />
                        <input className="m-2 px-2 w-full md:w-5/12 h-10 border outline-none" type="text" placeholder="username" name="username" value={handleInput.username} onChange={handleChange} />
                        <input className="m-2 px-2 w-full md:w-5/12 h-10 border outline-none" type="email" placeholder="email" name="email" value={handleInput.email} onChange={handleChange} />
                        <input className="m-2 px-2 w-full md:w-5/12 h-10 border outline-none" type="password" placeholder="password" name="password" value={handleInput.password} onChange={handleChange} />
                        <input className="m-2 px-2 w-full md:w-5/12 h-10 border outline-none" type="password" placeholder="confirm password" name="c_pass" value={handleInput.c_pass} onChange={handleChange} />
                        <p className="text-xs text-gray-500 text-center my-2">By creating an account. I conent to the processing of my personal data in accordance with the <b className="uppercase">Privacy policy</b></p>
                        <button className="text-white px-12 py-3 mt-3 uppercase" type="submit" style={{ backgroundColor: "teal" }}>Create</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterPage;