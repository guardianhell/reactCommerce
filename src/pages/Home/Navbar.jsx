import React from 'react'
import InputBox from '../../components/Modules/InputBox'

const Navbar = () => {
    return (
        <header className='relative z-20'>
            <nav className='flex flex-wrap items-center'>

                <div>
                    <img src='netflix-logo-icon.png' width={200} height={100}></img>
                </div>
                <div className='flex p-8 gap-10'>
                    <h3>Product</h3>
                    <h3>Games</h3>
                    <InputBox />
                </div>

            </nav>
        </header>
    )
}

export default Navbar