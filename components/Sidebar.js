import React from 'react';
import Logout from '../components/Logout';
import { useRouter } from 'next/router'
import { useAuth } from '../contexts/auth'

export default function Sidebar() {

    const router = useRouter();
    const { user } = useAuth();
    return (
        <>
            {user !== null ?
                <div>
                    <div>
                        <h4>{user.username}</h4>
                    </div>
                    <div>
                        <h4><a onClick={() => { router.push('/') }}>Dashboard</a></h4>
                    </div>
                    <div>
                        <h4><a onClick={() => { router.push('/profile') }}>Profile</a></h4>
                    </div>
                    <div>
                        <h4><Logout /></h4>
                    </div>
                </div> : <p>Loading</p>}
        </>
    );
}
