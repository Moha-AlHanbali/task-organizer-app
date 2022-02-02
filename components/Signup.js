import { React, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/auth'
import { useRouter } from 'next/router'

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const register_url = baseUrl + '/accounts/register/';

export default function Signup() {
  const [matchingError, showMatchingError] = useState(false);
  const [existingError, showExistingError] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  async function handleRegister(e) {
    e.preventDefault();
    showExistingError(false)

    if (e.target.password1.value !== e.target.password2.value) {
      showMatchingError(true)
      return
    } else {
      showMatchingError(false)
    }

    const accountInfo = {
      'username': e.target.userName.value,
      'password': e.target.password1.value,
      'password2': e.target.password2.value,
      'email': e.target.email.value,
      'first_name': e.target.firstName.value,
      'last_name': e.target.lastName.value,
      'age': String(e.target.age.value)
    }

    try {
      const response = await axios.post(register_url, accountInfo)
      if (response.status == 201) {
        login(e.target.userName.value, e.target.password1.value)
        router.push('/')
      }
    }
    catch (err) {
      if (err.message === 'Request failed with status code 400') {
        showExistingError(true)
      }

    }
  }

  return (
    <div className='flex h-screen '>
      <div className='px-10 py-10 m-auto border-4 border-blue-600 rounded-lg md:w-1/3'>
        <button onClick={() => { router.push('/') }} className='text-lg font-bold text-gray-400'> &lsaquo; back</button>
        <h2 className='py-10 mt-6 text-3xl font-extrabold text-left text-gray-900'> Create New Account</h2>

        <form onSubmit={handleRegister} className='py-10'>

          {existingError ? <div className='mb-5'><h4 className='font-semibold text-red-500 font-md'>An account with this email or username seems to already exist.</h4></div> : <></>}

          <div className='mb-6 md:flex md:items-center'>
            <div className='md:w-1/4'>
              <label htmlFor='userName' className='font-bold text-gray-700 text-md'> Username </label>
            </div>
            <div className='w-3/4'>

              <input name='userName' id='userName' placeholder='username' required className='w-full px-3 py-2 mx-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none' />
            </div>
          </div>

          <div className='mb-6 md:flex md:items-center'>
            <div className='md:w-1/4'>

              <label htmlFor='email' className='font-bold text-gray-700 text-md'> E-mail </label>
            </div>
            <div className='w-3/4'>

              <input name='email' id='email' placeholder='example@host.com' type='email' required className='w-full px-3 py-2 mx-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none' />
            </div>
          </div>

          <div className='mb-6 md:flex md:items-center'>
            <div className='md:w-1/4'>

              <label htmlFor='firstName' className='font-bold text-gray-700 text-md'> First Name </label>
            </div>
            <div className='w-3/4'>

              <input name='firstName' id='firstName' placeholder='John' required className='w-full px-3 py-2 mx-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none' />
            </div>
          </div>

          <div className='mb-6 md:flex md:items-center'>
            <div className='md:w-1/4'>

              <label htmlFor='lastName' className='font-bold text-gray-700 text-md'> Last Name </label>
            </div>
            <div className='w-3/4'>

              <input name='lastName' id='lastName' placeholder='Smith' required className='w-full px-3 py-2 mx-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none' />
            </div>
          </div>


          <div className=' md:flex md:items-center'>
            <div className='md:w-3/12'></div>
            <div className='ml-4 md:w-9/12'>
              <h5 className='w-full text-xs text-gray-300'>8 characters minimum, contains numbers, uppercase and lowercase letters</h5></div>
          </div>
          <div className='mb-6 md:flex md:items-center'>

            <div className='md:w-1/4'>

              <label htmlFor='password1' className='font-bold text-gray-700 text-md'> Password </label>
            </div>
            <div className='w-3/4'>

              <input name='password1' id='password1' placeholder='password' type='password' pattern="(?=.~*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required className='w-full px-3 py-2 mx-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none' />
            </div>

          </div>
          
          <div className=' md:flex md:items-center'>
            <div className='md:w-3/12'></div>
            <div className='ml-4 md:w-9/12'>
              <h5 className='w-full text-xs text-gray-300'>8 characters minimum, contains numbers, uppercase and lowercase letters</h5></div>
          </div>

          <div className='mb-6 md:flex md:items-center'>
            <div className='md:w-1/4'>

              <label htmlFor='password2' className='font-bold text-gray-700 text-md'>Confirm Password</label>
            </div>
            <div className='w-3/4'>
              <input name='password2' id='password2' placeholder='re-enter password' type='password' pattern="(?=.~*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required className='w-full px-3 py-2 mx-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none' />
            </div>
          </div>
          {matchingError ? <div className='mb-5'><h4 className='font-semibold text-red-500 font-md'>Passwords do not match.</h4></div> : <></>}

          <div className='mb-6 md:flex md:items-center'>
            <div className='md:w-1/4'>

              <label htmlFor='age' className='font-bold text-gray-700 text-md'> Birth Date </label>
            </div>
            <div className='w-3/4'>

              <input name='age' id='age' type='date' required className='w-full px-3 py-2 mx-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none' />
            </div>
          </div>

          <div className='pt-10'>
            <button type='submit' className='w-2/6 px-4 py-2 font-bold text-white bg-orange-500 rounded shadow hover:bg-orange-400 active:bg-orange-700 focus:shadow-outline focus:outline-none" type="button'> Register </button>
          </div>
        </form>
      </div>
    </div>

  );
}
