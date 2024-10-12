import React from 'react'
import ProductCard from '../ProductCard'
import CarouselLayout from '../../Layouts/CarouselLayout'

const CategoryList = ({ title }) => {
    return (
        <section className=' text-white py-4 px-11'>
            <h3 className='bg-transparent text-xl font-semibold mb-2 my-5'>{title}</h3>
            <CarouselLayout>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </CarouselLayout>
        </section>
    )
}

export default CategoryList