import React from 'react'
import { useNavigate } from 'react-router-dom'

const PaymentSuccess = () => {

    const navigate = useNavigate()
    return (
        <div className='font-sans w-screen h-screen'>

            <div className='text-center py-10 text-4xl'>
                <h1 className='font bold'>
                    Payment Success
                </h1>
                <h2 className='py-10'>
                    Thank You!
                </h2>
                <h3 className='text-base'>
                    Payment Ref. Number : 13212321
                </h3>
                <button
                    onClick={() => { navigate('/') }}
                    className='text-sm rounded-md px-10 py-2 bg-teal-300 my-10 hover:bg-teal-500 hover:text-white hover:duration-300'>
                    Back to Home
                </button>
            </div>


        </div>
    )
}

export default PaymentSuccess