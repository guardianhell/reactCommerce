import React, { useState } from 'react'
import InputBox from '../../components/Modules/InputBox'
import { userData } from '../../jotai/atoms'
import { useAtom } from 'jotai/react'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

    const [loginData] = useAtom(userData)

    const navigate = useNavigate()
    return (
        <header className='relative z-20 pt-5'>
            <nav className='flex flex-wrap items-center'>
                <div className='pl-10'>
                    <a href="/">
                        <img src='Acme-Logo.png' width={200} height={100}></img>
                    </a>
                </div>
                <div className='flex p-8 gap-2 h-30'>
                    <button className='flex-none hover:bg-zinc-400/30 rounded pl-3 pr-3 font-bold'>Voucher</button>
                    <button className='flex-none hover:bg-zinc-400/30 rounded pl-3 pr-3 font-bold'>Games</button>
                    <InputBox className='grow' />

                    {/* <div className='avatar absolute right-0'>
                        <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2 mr-8">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div> */}
                </div>
                <div className="absolute right-10 ml-20 dropdown dropdown-end">



                    <div>

                        <div tabIndex={0} role="button" className="btn bg-teal-300 shadow-l h-1 border-transparent rounded-lg text-black hover:bg-teal-500 hover:text-white px-10 hover:border-transparent"
                            onClick={() => {

                                if (!loginData) {
                                    navigate('/login')
                                }

                            }}
                        >{loginData ? "Account" : "Login"}</div>

                        {
                            loginData ?

                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                    <li>
                                        <div className='bg-transparent font-bold text-xl'>Miller Duncan
                                        </div>
                                    </li>
                                    <li><a>Orders</a></li>
                                    <li><a>Log Out</a></li>
                                </ul>

                                :

                                <>

                                </>

                        }




                    </div>




                </div>

            </nav>
        </header>
    )
}

export default Navbar