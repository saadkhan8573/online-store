import React from 'react'
import { useState } from 'react';

const Announcement = () => {
    const [showBar, setShowBar] = useState(true)
    return (
        <>
            {
                showBar &&
                <div className="py-1 px-4 flex justify-between text-white transition-all" style={{ backgroundColor: "teal" }}>
                    <div className="flex-1"></div>
                    <div className="flex-1 ">
                        <p className="text-center text-white font-medium text-sm">Super Deal! Free Shipping on Orders Over $50</p>
                    </div>
                    <div className="flex flex-1 justify-end">
                        <p className="cursor-pointer" onClick={() => setShowBar(false)}>X</p>
                    </div>
                </div>
            }
        </>
    )
}

export default Announcement;