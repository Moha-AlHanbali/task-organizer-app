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
                <div className="flex-col w-full md:flex md:flex-row md:min-h-screen">
                    <div className="flex flex-col flex-shrink-0 w-full text-gray-700 bg-white border-r-2 border-gray-100 md:w-64 ">
                        <div className="flex flex-row items-center justify-between flex-shrink-0 px-8 py-4">
                            <button onClick={() => { router.push('/') }} className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg focus:outline-none focus:shadow-outline">Task Organizer</button>
                        </div>
                        <nav className="flex-grow px-4 pb-4 md:block md:pb-0 md:overflow-y-auto">
                            <button className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" onClick={() => router.push('/')}>Dashboard</button>
                            <button className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" onClick={() => router.push('/profile')}>Profile</button>
                            <button className="block px-4 py-2 mt-2 bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" ><Logout /></button>
                        </nav >
                    </div >
                </div >
                : <p>Loading</p>
            }
        </>
    );
}
