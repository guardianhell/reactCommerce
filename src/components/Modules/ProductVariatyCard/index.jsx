import React from 'react'
import { PiCoinVerticalThin } from "react-icons/pi";

const ProductVariatyCard = ({ data }) => {
    return (
        <div>
            <button className='flex flex-row gap-2 bg-blue-500 rounded-full'>
                <PiCoinVerticalThin size={40} />
                <div className='bg-transparent flex flex-col'>

                    <div>100</div>
                    <div>Rp 1000</div>
                </div>

            </button>

        </div>
    )
}

export default ProductVariatyCard