import React from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/auth'
import { useRouter } from 'next/router'

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const register_url = baseUrl + '/accounts/register/';

export default function Signup() {

  const { login } = useAuth();
  const router = useRouter()

  async function handleRegister(e) {
    e.preventDefault();

    if (e.target.password1.value !== e.target.password2.value) {
      alert('Passwords do not match!')
      return
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
        alert('Account successfully created')
        login(e.target.userName.value, e.target.password1.value)
        router.push('/')
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='flex h-screen '>
      <div className='px-10 py-10 m-auto border-4 border-blue-600 rounded-lg md:w-1/3'>
        <a onClick={() => { router.push('/') }}>back</a>
        <form onSubmit={handleRegister}>

          <div>
            <label id='userName'> Username </label>
            <input name='userName' id='userName' placeholder='username' required />
          </div>

          <div>
            <label id='email'> E-mail </label>
            <input name='email' id='email' placeholder='example@host.com' type='email' required />
          </div>

          <div>
            <label id='firstName'> First Name </label>
            <input name='firstName' id='firstName' placeholder='John' required />
          </div>

          <div>
            <label id='lastName'> first name </label>
            <input name='lastName' id='lastName' placeholder='Smith' required />
          </div>

          <div>
            <label id='password1'> Password </label>
            <input name='password1' id='password1' placeholder='password' type='password' pattern="(?=.~*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
          </div>

          <div>
            <label id='password2'>Confirm Password</label>
            <input name='password2' id='password2' placeholder='re-enter password' type='password' pattern="(?=.~*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
          </div>

          <div>
            <label id='age'> Birth date </label>
            <input name='age' id='age' type='date' required />
          </div>

          <div>
            <button type='submit'> Submit </button>
          </div>
        </form>
      </div>
    </div>

  );
}
