import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { decProductQuantity, incProductQuantity, removefromcart } from '../../redux/actions/cartAction'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { publicrequest } from '../../requestMethods';
import EmptyCart from './EmptyCart';

const KEY = "pk_test_51JjGIpCfNcIK2udYSIfH1moPVuGKSJ4HbT0G5S2uoSfLfOqFRdt8X5kmWRQhFigMBcNbse0U6pb9txuka7NHFkgv00qYn8hLJM";

const CartPage = () => {
    const [productQuantity, setproductQuantity] = useState(1)
    const cartReducer = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()
    const [stripeToken, setStripeToken] = useState(null)
    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await publicrequest.post("/checkout/payment", {
                    tokenId: stripeToken?.id,
                    amount: cartReducer.total * 100
                })
            } catch (err) {
                console.log("Errors", err)
            }
        }
        stripeToken && makeRequest()
    }, [stripeToken])

    const handleQuantity = (type) => {
        if(type === "inc"){

        }
    }

    return (
        <>
            {cartReducer?.products.length ?
                <div className="container mx-auto mt-10">
                    <div className="flex shadow-md my-10">
                        <div className="w-3/4 bg-white px-10 py-10">
                            <div className="flex justify-between border-b pb-8">
                                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                                <h2 className="font-semibold text-2xl">{cartReducer.quantity} Items</h2>
                            </div>
                            <div className="flex mt-10 mb-5">
                                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Quantity</h3>
                                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
                                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
                            </div>
                            {cartReducer.products?.map((data) => {
                                return (
                                    <>
                                        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                            <div className="flex w-2/5"> {/* product */}
                                                <div className="w-20">
                                                    <img className="h-24" src={data.img} alt />
                                                </div>
                                                <div className="flex flex-col justify-between ml-4 flex-grow">
                                                    <span className="font-bold text-sm">{data.title}</span>
                                                    <div className="flex gap-0.5">
                                                        {data.categories?.map((cate) => (
                                                            <span className="text-red-500 text-xs">{cate},</span>
                                                        ))}
                                                    </div>
                                                    <div className="flex gap-0.5">
                                                        {data.color.map(color => (
                                                            <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" style={{ background: `${color}` }} />
                                                        ))}
                                                        <p className="w-6 h-6 focus:outline-none">{data.size}</p>
                                                    </div>
                                                    <button className="font-semibold hover:text-red-500 text-gray-500 text-xs text-left" onClick={() => dispatch(removefromcart(data))}>Remove</button>
                                                </div>
                                            </div>
                                            <div className="flex justify-center w-1/5">
                                                <div className="flex items-center gap-3 text-xl">
                                                    <p className="cursor-pointer" onClick={() => dispatch(decProductQuantity(data))}>-</p>
                                                    <p className="flex justify-center items-center border border-gray-400 rounded-md w-8 h-7">{data.quantity}</p>
                                                    <p className="cursor-pointer" onClick={() =>  dispatch(incProductQuantity(data))}>+</p>
                                                </div>
                                            </div>
                                            <span className="text-center w-1/5 font-semibold text-sm">${data.price}</span>
                                            <span className="text-center w-1/5 font-semibold text-sm">${data.price * data.quantity}</span>
                                        </div>
                                    </>)

                            })}
                            <a href="#" className="flex font-semibold text-indigo-600 text-sm mt-10">
                                <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                                Continue Shopping
                            </a>
                        </div>
                        <div id="summary" className="w-1/4 px-8 py-10">
                            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                            <div className="flex justify-between mt-10 mb-5">
                                <span className="font-semibold text-sm uppercase">Items {cartReducer.quantity}</span>
                                <span className="font-semibold text-sm">{cartReducer.total}$</span>
                            </div>
                            <div>
                                <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                                <select className="block p-2 text-gray-600 w-full text-sm">
                                    <option>Standard shipping - $10.00</option>
                                </select>
                            </div>
                            <div className="py-10">
                                <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                                <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full border outline-none" />
                            </div>
                            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                            <div className="border-t mt-8">
                                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                    <span>Total cost</span>
                                    <span>${cartReducer.total}</span>
                                </div>
                                <StripeCheckout
                                    name="Saad Shop"
                                    image="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                                    billingAddress
                                    shippingAddress
                                    description={`Your total is $ ${cartReducer.total}`}
                                    amount={cartReducer.total * 100}
                                    token={onToken}
                                    stripeKey={KEY}
                                >
                                    <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                                </StripeCheckout>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <EmptyCart />
            }
        </>
    )
}

export default CartPage
