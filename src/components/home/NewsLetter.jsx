import React from 'react'
import SendIcon from '@mui/icons-material/Send';

const NewsLetter = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-5 my-8 w-full h-72 md:h-96 bg-red-50">
                <h1 className="text-4xl md:text-7xl font-bold tracking-wider">Newsletter</h1>
                <p className="text-xl md:text-3xl text-center tracking-wider font-extralight">Get timely updates from your favorite products</p>
                <div className="w-10/12 md:w-1/2 h-11 bg-white border border-gray-400">
                    <input className="w-10/12 h-full outline-none px-2.5 " type="text" placeholder="Your email" name="" id="" />
                    <button className="w-2/12 h-full bg-gray-600 outline-none border-none"><SendIcon className="text-white"/></button>
                </div>
            </div>
        </>
    )
}

export default NewsLetter;