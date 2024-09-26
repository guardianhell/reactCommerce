import React from 'react'
import InputBox from '../../components/Modules/InputBox'

const Navbar = () => {
    return (
        <header className='relative z-20 pt-5'>
            <nav className='flex flex-wrap items-center'>
                <div className='pl-10'>
                    <img src='netflix-logo-icon.png' width={200} height={100}></img>
                </div>
                <div className='flex p-8 gap-2 h-30'>
                    <button className='hover:bg-zinc-400/30 rounded pl-3 pr-3 font-bold'>Product</button>
                    <button className='hover:bg-zinc-400/30 rounded pl-3 pr-3 font-bold'>Games</button>
                    <InputBox />

                    {/* <div className='avatar absolute right-0'>
                        <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2 mr-8">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div> */}
                </div>
                <div className="absolute right-10 ml-20 dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn bg-zinc-200 shadow-l h-1">Account</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li>
                            <div>
                                <div className='avatar bg-transparent'>
                                    <div className="w-10 rounded-full">
                                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>

                                </div>
                                <div className='bg-transparent ml-4'>Miller Duncan</div>
                            </div>
                        </li>
                        <li><a>Item 2</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>

            </nav>
        </header>
    )
}

export default Navbar