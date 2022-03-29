import React from 'react'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Slider = () => {
    const handleClick = () => {

    }
    return (
        <>
            <div className=" w-full relative" style={{ height: "auto" }}>
                <div className="bg-black opacity-70 rounded-full w-12 h-12 absolute top-0 bottom-0 left-3 m-auto cursor-pointer flex items-center justify-center ">
                    <ArrowLeftIcon className="text-white" onClick={() => handleClick("left")} />
                </div>
                <div className="w-screen h-full overflow-hidden">
                    <div className="flex flex-col md:flex-row w-screen h-full">
                        <div className="flex-1">
                            <img className="w-full h-full object-top object-cover" src="http://themes.magesolution.com/claue/m1/media/promobanners/women.jpg" alt="Slider Image" />
                        </div>
                        <div className="flex flex-1 flex-col justify-center items-center gap-7 md:gap-12 p-7">
                            <h1 className="text-4xl md:text-7xl font-bold uppercase">Summer Sale</h1>
                            <p className="tracking-widest uppercase text-lg md:text-xl text-center">Dont compromise on style! get flat 30% off for new arrivals</p>
                            <button className="text-lg border-2 border-gray-600 px-8 py-2 transition-all hover:bg-gray-600 hover:text-white">Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="bg-black opacity-70 rounded-full w-12 h-12 absolute top-0 bottom-0 right-3 m-auto cursor-pointer flex items-center justify-center">
                    <ArrowRightIcon className="text-white" onClick={() => handleClick("right")} />
                </div>
            </div>
        </>
    )
}

export default Slider
