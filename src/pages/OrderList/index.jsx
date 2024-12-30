import React from 'react'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import OrderTable from '../../components/Modules/OrderTable'

const OrderPage = () => {
    return (
        <DefaultLayout>
            <div className='flex w-full'>
                <h2 className='relative font-bold text-3xl py-4 mb-6 left-1/2 -translate-x-1/2'>Order History</h2>
            </div>
            <OrderTable />
        </DefaultLayout>
    )
}

export default OrderPage