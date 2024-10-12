import React from 'react'
import { PiCoinVerticalThin } from "react-icons/pi";

const ProductVariatyCard = ({ data }) => {
    return (
        <div className=''>
            <button className=''>
                <div className='flex flex-row gap-2 bg-amber-300 rounded-full px-6 py-1 gap-4 hover:bg-amber-500'>
                    <div className='flex bg-transparent justify-center items-center'>
                        <PiCoinVerticalThin className='bg-transparent text-red-500' size={30} />
                        <div className='flex bg-transparent text-stone-500 text-xs'>100</div>
                    </div>

                    <div className='bg-transparent flex flex-col justify-center items-center'>
                        <div className='bg-transparent text-sm'>Rp 1000</div>
                    </div>
                </div>


            </button>

        </div>
    )
}

export default ProductVariatyCard