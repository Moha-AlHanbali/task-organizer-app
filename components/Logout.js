import React from 'react';
import { useAuth } from '../contexts/auth'
import { useRouter } from 'next/router'

export default function Logout() {
    const { logout } = useAuth();
    const router = useRouter();

    return (
        <div>
            <button onClick={() => {logout(), router.push('/')}} className="text-sm font-semibold text-gray-900 ">Logout</button>

        </div>
    );
}
