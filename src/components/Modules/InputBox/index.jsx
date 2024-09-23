import React from 'react'
import { GoSearch } from 'react-icons/go'

const InputBox = () => {
    return (
        <div className='relative'>
            <input className='text-stone-500 bg-white rounded-full pl-12'></input>
            <GoSearch fill='black' className='font-bold text-red absolute top-1/2 -translate-y-1/2 z-10 left-3' />
        </div>
    )
}

export default InputBox