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
                <div className='relative mt-10 w-full text-center'>
                    <ProductVariatyCard></ProductVariatyCard>
                </div>
                <div className='mt-10'>
                    Purchase Button
                </div>

            </div>
        </DefaultLayout>
    )
}

export default ProductDetail