import { React, useState } from 'react';
import { useRouter } from 'next/router'

export default function Login({ login }) {
    const [authError, showAuthError] = useState(false)
    const router = useRouter()

    return (

        <>
            <div className='flex h-screen '>
                <div className='px-10 py-10 m-auto border-4 border-orange-600 rounded-lg md:w-1/3'>
                <h2 className= 'mb-10 text-3xl font-extrabold text-left text-gray-900 '> Task Organizer Login</h2>

                    <form onSubmit={(event) => { event.preventDefault(), showAuthError(login(event.target.userName.value, event.target.password.value)) }}>
                        <div className='mb-6 md:flex md:items-center'>
                            <div className='md:w-1/4'>
                                <label htmlFor='userName' className='font-bold text-gray-700 text-md'>
                                    Username
                                </label>
                            </div>
                            <div className='w-3/4'>
                                <input name='userName' id='userName' placeholder='username' type='text' required className='w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none' />
                            </div>
                        </div>

                        <div className='mb-6 md:flex md:items-center'>
                            <div className='md:w-1/4'>
                                <label htmlFor='password' className='font-bold text-gray-700 text-md'>
                                    Password
                                </label>
                            </div>
                            <div className='w-3/4'>
                                <input name='password' id='password' placeholder='password' type='password' required className='w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none' />
                            </div>
                        </div>
                        {authError ? <div><h4 className='font-semibold text-red-500 font-md'>Username and Password do not match.</h4></div> : <> </>}
                        <div className='flex items-center justify-between mt-10'>
                            <button type='submit' className='w-2/6 px-4 py-2 font-bold text-white bg-blue-500 rounded shadow hover:bg-blue-400 focus:shadow-outline focus:outline-none active:bg-blue-700'>
                                Login
                            </button>

                            <div className='w-2/6'>
                            </div>
                            <button onClick={() => { router.push('/register') }} type='button' className='w-2/6 px-4 py-2 font-bold text-white bg-orange-500 rounded shadow hover:bg-orange-400 focus:shadow-outline active:bg-orange-700 focus:outline-none'> Sign Up </button>
                        </div>
                    </form>
                </div>

            </div>
        </>

    );
}
