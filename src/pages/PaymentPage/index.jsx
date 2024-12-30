import React, { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { priceToCurrency } from '../../utils/priceToCurrency'
import { createTransaction } from '../../utils/createTransaction'
import QRCode from "react-qr-code"


const PaymentQRIS = () => {

    const { state } = useLocation()

    const data = {
        status: null,
        message: null,
        result: [{
            payment_request_number: null,
            payment_link: null
        }]
    }

    const [transactionData, setTransactionData] = useState(data)
    useEffect(() => {
        // console.log("ZZZZZ" + JSON.stringify(state.data.result[0]));

        setTransactionData(state.data)

    }, [transactionData])



    return (
        <div className='relative w-screen h-screen'>
            <div>
                <h1 className='font-bold text-center w-full pt-5 pb-5 text-2xl'>
                    QRIS Payment
                </h1>
                <h3 className='w-full text-center pb-5 text-sm'>
                    Invoice Number : {state.data.result[0].payment_request_number}
                </h3>
                <div className='relative text-center w-full justify-center items-center'>
                    {transactionData.result[0].payment_link != null ?
                        <QRCode
                            className='relative left-1/2 -translate-x-1/2'
                            size={256}
                            style={{ height: "auto", maxWidth: "30%", width: "30%" }}
                            value={state.data.result[0].payment_link}
                            viewBox={`0 0 256 256`}>
                        </QRCode> : ""
                    }

                </div>
                <h3 className='w-full font-bold text-xl text-center pt-5'>Rp {

                    priceToCurrency((state.data.result[0].amount))


                }</h3>
                <h3 className='w-full text-center pt-5 pb-5'>QR Validity</h3>
                <h3 className='w-full text-center'>Waiting For Payment</h3>
                <div className='flex justify-center items-center py-10'>
                    <button className='rounded-md px-10 py-4 font-bold bg-teal-500 text-black'>
                        Check Payment
                    </button>
                </div>
            </div>
        </div >
    )
}

export default PaymentQRIS