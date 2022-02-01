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
        background: 'white'
    },
    overlay: { zIndex: 10 },

};

Modal.setAppElement('body');

export default function DeleteTaskModal({ deleteModal, closeDeleteModal, removeTaskHandler, activeTask }) {

    return (
        activeTask ?
            <div>
                <Modal
                    isOpen={deleteModal}
                    onRequestClose={closeDeleteModal}
                    style={customStyles}
                    contentLabel="Modify Task Modal"
                    className={'w-1/4 p-10 border-2 border-slate-500/20 rounded-md'}>
                    <button onClick={closeDeleteModal} className='block text-lg font-normal text-gray-700'>X</button>
                    <div className='py-5'><h2 className='text-lg font-semibold text-gray-900'>Delete <span className='italic'>{activeTask.title} </span></h2></div>
                    <div className='py-5'>
                    <h4 className='block text-lg font-normal text-gray-700'>Are you sure you want to delete <span className='italic'>{activeTask.title}</span>?</h4>
                    </div>
                    <div className='flex w-full py-4'>
                        <button type='button' onClick={() => { closeDeleteModal(), removeTaskHandler() }} className='w-2/6 px-4 py-2 font-bold text-white bg-blue-500 rounded shadow hover:bg-blue-400 focus:shadow-outline active:bg-blue-700 focus:outline-none'>Yes</button>
                        <div className='w-2/6'></div>
                        <button type='button' onClick={() => { closeDeleteModal() }} className='w-2/6 px-4 py-2 font-bold text-white bg-orange-500 rounded shadow hover:bg-orange-400 focus:shadow-outline active:bg-orange-700 focus:outline-none'>No</button>
                    </div>
                </Modal>

            </div> : <></>
    );
}

