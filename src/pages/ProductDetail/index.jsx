import React from 'react'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import ProductVariatyCard from '../../components/Modules/ProductVariatyCard'
import PaymentQRIS from '../PaymentPage'

const ProductDetail = () => {
    return (
        <DefaultLayout>
            <div className='relative py-16 px-16'>
                <div className='flex flex-row gap-16'>
                    <img className='rounded-lg aspect-auto w-[35%]' src='ant.jpg' />
                    <p className='mt-12'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='flex flex-wrap flex-row mt-10 w-full text-center gap-2 justify-center items-center'>
                    <ProductVariatyCard></ProductVariatyCard>
                    <ProductVariatyCard></ProductVariatyCard>
                    <ProductVariatyCard></ProductVariatyCard>
                    <ProductVariatyCard></ProductVariatyCard>
                    <ProductVariatyCard></ProductVariatyCard>
                    <ProductVariatyCard></ProductVariatyCard>
                </div>
                <div className='flex flex-row w-[40%] gap-4 my-5'>
                    <h3 className='flex justify-center items-center mr-4a'>Game ID</h3>
                    <input className='input input-bordered' type='text'></input>
                    <button className='bg-emerald-200 rounded-md px-4 py-2 hover:bg-emerald-400'>Check</button>
                </div>
                <div className='flex flex-row w-[40%] gap-8'>
                    <h3 className='flex justify-center items-center'>Payment</h3>
                    <button className='bg-stone-500 p-2 rounded'>
                        <img className='bg-transparent' src='Logo QRIS.png' height={60} width={60} ></img>
                    </button>
                </div>
                <div
                    className='flex mt-10 justify-center items-center'>
                    <button

                        className='transition bg-teal-300 rounded-md px-10 py-4 font-bold hover:bg-teal-600 hover:text-white hover:duration-500'
                        onClick={() => document.getElementById("PaymentQRIS").showModal()}
                    >Buy Now</button>
                    <dialog id="PaymentQRIS" className='modal'>
                        <h3>QRIS</h3>
                    </dialog>
                </div>

            </div>
        </DefaultLayout>
    )
}

export default ProductDetail