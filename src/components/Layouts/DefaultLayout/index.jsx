import React from 'react'
import Navbar from '../../../pages/Home/Navbar'

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default DefaultLayout