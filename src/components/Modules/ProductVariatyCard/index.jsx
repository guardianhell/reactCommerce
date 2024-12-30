import React, { useEffect } from 'react'
import { PiCoinVerticalThin } from "react-icons/pi";
import { priceToCurrency } from '../../../utils/priceToCurrency';


const ProductVariatyCard = ({ data, index, productSelected, setProductSelected }) => {

    let bgColor = ""

    const handleClick = (event) => {
        setProductSelected(index)
        console.log(data);

    }

    useEffect(() => {



    }, [productSelected, bgColor])

    return (
        <div className=""
            onClick={handleClick}
        >
            <button className=''>
                <div className={`transition flex flex-row gap-2 ${productSelected == index ? "bg-amber-500 px-10 py-4" : "bg-amber-300 px-6 py-1"} rounded-full gap-4 hover:bg-amber-500 hover:duration-500 active:bg-amber-500`}
                >
                    <div className='flex bg-transparent justify-center items-center'>
                        <PiCoinVerticalThin className='bg-transparent text-red-500' size={30} />
                        <div className='flex bg-transparent text-stone-500 text-xs'>{data.variaty_name}</div>
                    </div>

                    <div className='bg-transparent flex flex-col justify-center items-center font-bold'>
                        <div className='bg-transparent text-sm'>Rp {priceToCurrency(data.price)}</div>
                    </div>
                </div>


            </button>

        </div>
    )
}

export default ProductVariatyCard