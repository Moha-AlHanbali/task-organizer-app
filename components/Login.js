import React from 'react';
import { useRouter } from 'next/router'

export default function Login({ login }) {
    const router = useRouter()

    return (

        <>
            <div>
                <form onSubmit={(event) => {event.preventDefault(), login(event.target.userName.value, event.target.password.value)}}>
                    <div>
                        <label id='userName'>
                            username
                        </label>
                        <input name='userName' id='userName' placeholder='USERNAME' required />
                    </div>

                    <div>
                        <label id='password'>
                            password
                        </label>
                        <input name='password' id='password' placeholder='PASSWORD' type='password' required />
                    </div>

                    <div>
                        <button type='submit'>
                            login
                        </button>
                    </div>
                </form>
            </div>

            <div>
                <p>Not a member yet? <a onClick={null}> Sign Up here!</a></p>
            </div>
        </>

    );
}
