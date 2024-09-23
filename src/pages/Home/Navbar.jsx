import React from 'react'
import InputBox from '../../components/Modules/InputBox'

const Navbar = () => {
    return (
        <header className='relative z-20'>
            <nav className='flex flex-wrap items-center'>
                <div>
                    <img src='netflix-logo-icon.png' width={200} height={100}></img>
                </div>
                <div className='flex p-8 gap-2'>
                    <button className='hover:bg-white/30 rounded pl-3 pr-3'>Product</button>
                    <button className='hover:bg-white/30 rounded pl-3 pr-3'>Games</button>
                    <InputBox />
                    <div className='avatar absolute right-0'>
                        <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2 mr-8">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Navbar