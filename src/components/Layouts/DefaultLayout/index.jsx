import React from 'react'
import Navbar from '../../../pages/Home/Navbar'
import FooterLayout from '../../Modules/Footer'

const DefaultLayout = ({ children }) => {
    return (
        <div className='h-screen'>
            <Navbar />
            {children}
            <FooterLayout />
        </div>
    )
}

export default DefaultLayout