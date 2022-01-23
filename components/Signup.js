import React from 'react';
import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const register_url = baseUrl + '/accounts/register/';

export default function Signup({ login }) {

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

try{
  const response = await axios.post(register_url, accountInfo)
  if (response.status == 201) {
    alert('Account successfully created')
    login(e.target.userName.value, e.target.password1.value)
  }
}
catch(err){
  console.log(err);
}
  }

  return (
    <div>
      <form onSubmit={handleRegister}>

        <div>
          <label id='userName'> username </label>
          <input name='userName' id='userName' placeholder='USERNAME' required />
        </div>

        <div>
          <label id='email'> email </label>
          <input name='email' id='email' placeholder='EMAIL' type='email' required />
        </div>

        <div>
          <label id='firstName'> first name </label>
          <input name='firstName' id='firstName' placeholder='FIRST NAME' required />
        </div>

        <div>
          <label id='lastName'> first name </label>
          <input name='lastName' id='lastName' placeholder='LAST NAME' required />
        </div>

        <div>
          <label id='password1'> password </label>
          <input name='password1' id='password1' placeholder='PASSWORD' type='password' pattern="(?=.~*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
        </div>

        <div>
          <label id='password2'>re-enter password</label>
          <input name='password2' id='password2' placeholder='PASSWORD' type='password' pattern="(?=.~*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
        </div>

        <div>
          <label id='age'> age </label>
          <input name='age' id='age' type='date' required />
        </div>

        <div>
          <button type='submit'> submit </button>
        </div>
      </form>
    </div>
  );
}
