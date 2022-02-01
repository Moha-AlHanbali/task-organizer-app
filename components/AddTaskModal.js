import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
    },
    overlay: { zIndex: 10 },

};

Modal.setAppElement('body');

export default function AddTaskModal({ taskModal, closeTaskModal, addTaskHandler, activeDate }) {

    return (
        <div >
            <Modal
                isOpen={taskModal}
                onRequestClose={closeTaskModal}
                style={customStyles}
                contentLabel="Add Task Modal"
                className={'w-1/3 p-10 border-2 border-slate-500/20 rounded-md'}>
                <button onClick={closeTaskModal} className='block text-lg font-normal text-gray-700'>X</button>
                <div className='py-5'><h2 className='text-lg font-semibold text-gray-900'> Add new task</h2></div>
                <form onSubmit={addTaskHandler} className='w-full'>

                    <div className='py-2'>
                        <label htmlFor='title' className='block font-normal text-gray-700 text-md'>Task Title</label>
                        <input name='title' id='title' placeholder='Task Title' required className='w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none ' />
                    </div>

                    <div className='py-2'>
                        <label htmlFor='details' className='block font-normal text-gray-700 text-md'>Task Description</label>
                        <textarea name='details' id='details' placeholder='details' required className='w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none ' />

                    </div>

                    <div className='py-2'>
                        <label htmlFor='date' className='block font-normal text-gray-700 text-md'>Task Date and Time</label>
                        <input name='date' id='date' type='datetime-local' defaultValue={activeDate} required className='w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none ' />
                    </div>

                    <div className='py-4'>
                        <input name='complete' id='complete' type='checkbox' />
                        <label htmlFor='complete' className='font-normal text-gray-700 text-md'> Complete </label>
                    </div>

                    <div className='flex w-full py-4'>
                            <button type='submit' className='w-2/6 px-4 py-2 font-bold text-white bg-blue-500 rounded shadow hover:bg-blue-400 focus:shadow-outline active:bg-blue-700 focus:outline-none'>Add Task</button>
                        <div className='w-2/6'></div>
                            <button type='button' onClick={closeTaskModal} className='w-2/6 px-4 py-2 font-bold text-white bg-orange-500 rounded shadow hover:bg-orange-400 focus:shadow-outline active:bg-orange-700 focus:outline-none'>Cancel</button>
                    </div>

                </form>
            </Modal>
        </div>
    );
}
