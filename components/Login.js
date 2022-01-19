import React from 'react';

export default function Login({ login }) {
    return (

        <>
            <div>
                <form onSubmit={(event) => {event.preventDefault(), login(event.target.userName.value, event.target.password.value)}}>
                    <div>
                        <label id='userName'>
                            username
                        </label>
                        <input name='userName' id='userName' placeholder='USERNAME' required>
                        </input>
                    </div>

                    <div>
                        <label id='password'>
                            password
                        </label>
                        <input name='password' id='password' placeholder='PASSWORD' required>
                        </input>
                    </div>

                    <div>
                        <button>
                            login
                        </button>
                    </div>
                </form>
            </div>
        </>

    );
}
