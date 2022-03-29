import axios from 'axios';
import React, { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const KEY = "pk_test_51JjGIpCfNcIK2udYSIfH1moPVuGKSJ4HbT0G5S2uoSfLfOqFRdt8X5kmWRQhFigMBcNbse0U6pb9txuka7NHFkgv00qYn8hLJM";

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null)
    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post("http://localhost:5000/api/checkout/payment", {
                    tokenId: stripeToken?.id,
                    amount: 2000
                })
                console.log(res)
            } catch (err) {
                console.log("Errors", err)
            }
        }
        stripeToken && makeRequest()
    }, [stripeToken])

    console.log("token Khan", stripeToken)
    return (
        <>
            <div className="flex justify-center items-center w-full h-screen">
                <StripeCheckout
                    name="Saad Shop"
                    image="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                    billingAddress
                    shippingAddress
                    description="Your total is $20"
                    amount={2000}
                    token={onToken}
                    stripeKey={KEY}
                >
                    <button className="bg-black text-white rounded px-6 py-4">Pay Now</button>
                </StripeCheckout>
            </div>
        </>
    )
}

export default Pay;