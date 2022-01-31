import React from 'react';
import { useAuth } from '../contexts/auth'
import { useRouter } from 'next/router'

export default function Logout() {
    const { logout } = useAuth();
    const router = useRouter();

    return (
        <div>
            <button onClick={() => {logout(), router.push('/')}} className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Logout</button>
        </div>
    );
}
