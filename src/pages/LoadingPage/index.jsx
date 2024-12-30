import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader'
import PropagateLoader from 'react-spinners/PropagateLoader'


const LoadingPage = () => {

    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const next = () => {
        navigate('/')
    }

    useEffect(() => {


    }, [loading])
    return (
        <div className='flex w-screen h-screen items-center justify-center align-items-center'>
            <div>
                {
                    loading ?
                        <PropagateLoader
                            color={'#00f0ff'}
                            loading={loading}
                            size={20}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />

                        :
                        next()

                }
            </div>

        </div>
    )
}

export default LoadingPage