import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, YouTube } from '@mui/icons-material';
import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between p-8 bg-gray-50">
                <div className="flex-1 p-2">
                    <h1 className="text-black text-4xl font-bold">SAAD.</h1>
                    <p className="text-black my-2 text-justify w-5/6"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusantium excepturi officia esse fugit mollitia adipisci, atque voluptatem vel architecto odit molestias, deserunt nemo iusto? Porro rerum pariatur assumenda atque.</p>
                    <div className="flex items-center gap-3">
                        <div className="flex justify-center items-center bg-blue-700 rounded-full w-12 h-12">
                            <Facebook className="text-white" />
                        </div>
                        <div className="flex justify-center items-center bg-blue-700 rounded-full w-12 h-12">
                            <Instagram className="text-white" />
                        </div>
                        <div className="flex justify-center items-center bg-blue-700 rounded-full w-12 h-12">
                            <Pinterest className="text-white" />
                        </div>
                        <div className="flex justify-center items-center bg-blue-700 rounded-full w-12 h-12">
                            <YouTube className="text-white" />
                        </div>
                    </div>
                </div>
                <div className="flex-1 p-2">
                    <h3 className="text-2xl text-black font-bold">Usefull Links </h3>
                    <ul className="flex flex-wrap text-lg">
                        <li className="w-1/2">Home</li>
                        <li className="w-1/2">Cart</li>
                        <li className="w-1/2">Man Fashion</li>
                        <li className="w-1/2">Women Fashion</li>
                        <li className="w-1/2">Accessories</li>
                        <li className="w-1/2">My account</li>
                        <li className="w-1/2">Order Tracking</li>
                        <li className="w-1/2">Whishlist</li>
                        <li className="w-1/2">Terms</li>
                        <li className="w-1/2">Privacy</li>
                    </ul>
                </div>
                <div className="flex-1 p-2">
                    <h3 className="text-2xl text-black font-bold">Contact </h3>
                    <div className="my-3">
                        <Room className="mr-2" /> jhangi saydan
                    </div>
                    <div className="my-3">
                        <Phone className="mr-2" /> +92 312 1234567
                    </div>
                    <div className="my-3">
                        <MailOutline className="mr-2" /> admin@gmail.com
                    </div>
                    <div className="my-3">
                        <img className="w-64 h-12 object-cover" src="https://unblast.com/wp-content/uploads/2018/08/Credit-Card-Icons.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;