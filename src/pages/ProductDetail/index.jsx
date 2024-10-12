import React from 'react'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import ProductVariatyCard from '../../components/Modules/ProductVariatyCard'

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
                    <ProductVariatyCard></ProductVariatyCard>
                    <ProductVariatyCard></ProductVariatyCard>
                    <ProductVariatyCard></ProductVariatyCard>
                    <ProductVariatyCard></ProductVariatyCard>
                    <ProductVariatyCard></ProductVariatyCard>
                    <ProductVariatyCard></ProductVariatyCard>
                </div>
                <div className='flex mt-10 justify-center items-center'>
                    <button className='bg-teal-300 rounded-md px-10 py-4 font-bold hover:bg-teal-600 hover:text-white'>Buy Now</button>
                </div>

            </div>
        </DefaultLayout>
    )
}

export default ProductDetail