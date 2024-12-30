import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import { registerApi } from '../../utils/auth'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [reTypePassword, setReTypePassword] = useState('')

    const [validFirstName, setValidFirstName] = useState(false)
    const [validLastName, setValidLastName] = useState(false)
    const [validEmail, setValidEmail] = useState(false)
    const [validPassword, setValidPassword] = useState(false)
    const [validReTypePassword, setValidReTypePassword] = useState(false)



    useEffect(() => {


    }, [firstName])

    useEffect(() => {


    }, [lastName])

    useEffect(() => {


    }, [email])

    useEffect(() => {


    }, [password])

    useEffect(() => {


    }, [reTypePassword])



    const submit = () => {

        try {

            const response = registerApi(firstName, lastName, email, password, reTypePassword).then((res) => {
    
                if (res.status == 200) {
                    navigate("/")
                }
    
            }).catch((error) => {
                console.log(error);
                const errorData = {
                    Code: "400",
                    message: error.message
                }
                return errorData
            })
    
            return response
            
        } catch (error) {
            return error
        }



    }

    return (
        <DefaultLayout>
            <div className='flex flex-col mt-20 w-full h-full'>
                <div className='justify-center items-center left-1/2 mx-[30%]'>
                <h2 className='flex text-2xl font-bold justify-center items-center m-5'>Register New Account</h2>
                    <label className="input input-bordered flex items-center gap-2 m-5 bg-teal-200">
                        <svg className="bg-transparent w-5 h-5 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clipRule="evenodd" />
                    </svg>
                        <input type="text" className="grow " placeholder="First Name" id='firstName'
                            onChange={(e) => {
                                setFirstName(e.target.value)
                            }} />
                </label>
                    <label className="input input-bordered flex items-center gap-2 m-5 bg-teal-200">
                        <svg className="bg-transparent w-5 h-5 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clipRule="evenodd" />
                    </svg>
                        <input type="text" className="grow" placeholder="Last Name" id='lastName'
                            onChange={(e) => {
                                setLastName(e.target.value)
                            }} />
                </label>
                    <label className="input input-bordered flex items-center gap-2 m-5 bg-teal-200">
                        <svg className="bg-transparent w-5 h-5 text-gray-800 dark:text-white"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16v-5.5A3.5 3.5 0 0 0 7.5 7m3.5 9H4v-5.5A3.5 3.5 0 0 1 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1" />
                    </svg>

                        <input type="text" className="grow" placeholder="Email" id='email'
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }} />
                </label>
                    <label className="input input-bordered flex items-center gap-2 m-5 bg-teal-200">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                            className="bg-transparent h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                    </svg>
                        <input type="password" className="grow" placeholder='Password' id='password'
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }} />
                </label>
                    <label className="input input-bordered flex items-center gap-2 m-5 bg-teal-200">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                            className="bg-transparent h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                    </svg>
                        <input type="password" className="grow" placeholder='Re-type Password' id='retypePassword'
                            onChange={(e) => {
                                setReTypePassword(e.target.value)
                            }} />
                </label>
                    <div className='flex'>
                        <button className='flex rounded-lg bg-teal-300 text-2xl font-bold justify-center items-center p-2 w-full mt-10'
                            onClick={() => { submit() }}
                        >Register</button>

                    </div>
                </div>


            </div>
        </DefaultLayout>
    )
}

export default Register