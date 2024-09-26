import React from 'react'
import { GoSearch } from 'react-icons/go'

const InputBox = () => {
    return (
        <div>
            <div className='relative ml-4 top-1/2 -translate-y-1/2'>
                <input className='text-stone-500 bg-white rounded-full pl-12 w-[200px] h-[40px]'></input>
                <GoSearch fill='black' className='bg-white font-bold text-red absolute top-1/2 -translate-y-1/2 z-10 left-3' />
            </div>
        </div>

    )
}

export default InputBox