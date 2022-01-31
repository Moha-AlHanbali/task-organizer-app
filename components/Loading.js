import { React } from 'react';
import { Transition } from '@headlessui/react';

export default function Loading() {

    return (
        <div>
            <Transition
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className='flex h-screen'>
                    <div className='mb-6 md:flex md:items-center'>
                        <h2 className='text-xl text-gray-700'>Loading...</h2>
                    </div>
                </div>
            </Transition>
        </div>
    );
}
