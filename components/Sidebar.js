import React from 'react';
import Profile from './Profile';
import Logout from '../components/Logout';
import { useRouter } from 'next/router'
import { useAuth } from '../contexts/auth'
import { Disclosure, Transition } from '@headlessui/react'

export default function Sidebar() {

    const router = useRouter();
    const { user } = useAuth();
    return (
        <>
            {user !== null ?
                <div className="flex flex-col flex-shrink-0 w-full text-gray-700 bg-white border-r-2 border-gray-100 md:w-64 ">
                    <div className="flex flex-row items-center justify-between flex-shrink-0 px-8 py-4">
                        <button onClick={() => { router.push('/') }} className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg focus:outline-none focus:shadow-outline">Task Organizer</button>
                    </div>
                    <nav className="flex-grow px-4 pb-4 md:block md:pb-0 md:overflow-y-auto">
                        <button className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" onClick={() => router.push('/')}>Dashboard</button>
                        <Disclosure>
                            <Disclosure.Button className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                                Profile Info
                            </Disclosure.Button>
                            <Transition
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0">
                                <Disclosure.Panel className="px-4 py-2 mt-2 font-semibold text-gray-500 text-md">
                                    <Profile />
                                </Disclosure.Panel>
                                </Transition>
                        </Disclosure>

                        <div  ><Logout /></div>
                    </nav >
                </div >
                : <p>Loading</p>
            }
        </>
    );
}
