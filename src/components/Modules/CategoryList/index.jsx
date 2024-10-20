import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard'
import CarouselLayout from '../../Layouts/CarouselLayout'
import EachUtils from '../../../utils/EachUtils'
import { getVoucher } from '../../../utils/getVoucher'
import { getListDTU } from '../../../utils/getListDTU'

const CategoryList = ({ title, data }) => {


    return (
        <section className=' text-white py-4 px-11'>
            <h3 className='bg-transparent text-xl font-semibold mb-2 my-5'>{title}</h3>
            <CarouselLayout>

                <EachUtils
                    of={data}
                    render={(item, index) => (
                        <div key={index}>
                            <ProductCard data={item} />
                        </div>
                    )}
                />


            </CarouselLayout>
        </section>
    )
}



export default CategoryList