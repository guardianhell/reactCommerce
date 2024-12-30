import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import ProductVariatyCard from '../../components/Modules/ProductVariatyCard'
import PaymentQRIS from '../PaymentPage'
import { useLocation, useNavigate } from 'react-router-dom'
import { getProductDetail } from '../../utils/getProductDetail'
import { createTransaction } from '../../utils/createTransaction'
import EachUtils from '../../utils/EachUtils'

const ProductDetail = () => {
    const navigate = useNavigate()
    const data = useLocation().state.data
    const [productDetailData, setProductDetail] = useState([])
    const [productSelected, setProductSelected] = useState(null)

    const [isLoading, setIsLoading] = useState(false)


    const createTrx = async () => {



        const data = {
            total_amount: (productDetailData[productSelected].price),
            product_variaty_id: productDetailData[productSelected].id
        }

        console.log("DATA : " + data);

        const trx = await createTransaction(data)

        const response = new Promise((resolve, reject) => {


        })

        console.log("TRX : " + JSON.stringify(trx));

        return trx
    }


    useEffect(() => {
        getProductDetail(data.id).then((result) => { setProductDetail(result) })
        console.log("SELECTED : " + JSON.stringify(productDetailData[productSelected]));
        console.log(isLoading);

        window.scrollTo(0, 200)
    }, [productSelected, isLoading])



    return (
        <DefaultLayout>
            <div className='relative py-16 px-16'>
                <div className='flex flex-row gap-16'>
                    <img className='rounded-lg aspect-auto w-[20%]' src={data.product_thumbnail} />
                    <p className='mt-12 font-bold'>{data.product_description}</p>
                </div>
                <h3 className='flex w-full font-bold text-xl mt-5'>{data.product_name}</h3>
                <div className='flex flex-wrap flex-row mt-10 w-full text-center gap-2 justify-center items-center'>
                    <EachUtils
                        of={productDetailData}
                        render={(item, index) => (
                            <ProductVariatyCard
                                key={index}
                                data={item}
                                index={index}
                                setProductSelected={setProductSelected}
                                productSelected={productSelected} />
                        )}
                    />
                </div>
                {/* <div className='flex flex-row w-[40%] gap-4 my-5'>
                    <h3 className='flex justify-center items-center mr-4a'>Game ID</h3>
                    <input className='input input-bordered' type='text'></input>
                    <button className='bg-emerald-200 rounded-md px-4 py-2 hover:bg-emerald-400'>Check</button>
                </div> */}
                <div className='flex flex-row w-[40%] gap-8 mt-10'>
                    <h3 className='flex justify-center items-center'>Payment</h3>
                    <button className='bg-stone-500 p-2 rounded'>
                        <img className='bg-transparent' src='Logo QRIS.png' height={60} width={60} ></img>
                    </button>
                </div>
                <div
                    className='flex mt-10 justify-center items-center'>
                    <button

                        className={`text-black transition ${!isLoading ? 'bg-teal-500 hover:bg-teal-600 hover:text-white' : "bg-zinc-200"} rounded-md px-10 py-4 font-bold  hover:duration-500`}
                        disabled={isLoading}
                        onClick={() => {

                            console.log("halo");
                            console.log(productSelected);
                            console.log(isLoading);

                            if (!isLoading && productSelected != null) {
                                setIsLoading(true)

                                createTrx().then((data) => {
                                    [productSelected]
                                    navigate("/payment", {
                                        state: { data }
                                    }),
                                        console.log("Sending")
                                    setIsLoading(false)
                                })

                                // const data = productDetailData
                            }

                        }}
                    >{!isLoading ? "Buy Now" : "Please Wait"}</button>
                    {/* <dialog id="PaymentQRIS" className='modal'>
                        <h3>QRIS</h3>
                    </dialog> */}
                </div>

            </div>
        </DefaultLayout>
    )
}

export default ProductDetail