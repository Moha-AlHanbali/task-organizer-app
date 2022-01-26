import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: 'cyan'
    },
};

export default function AddTaskModal({ modal, openModal, closeModal, addTaskHandler }) {

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={modal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <button onClick={closeModal}>X</button>
                <div>Add a new task</div>
                <form onSubmit={addTaskHandler}>
                    <label id='title'>Task Title</label>
                    <input name='title' id='title' placeholder='Task Title' required />

                    <label id='details'>Task Description</label>
                    <textarea name='details' id='details' placeholder='details' required />

                    <label id='date'>Task Date and Time</label>
                    <input name='date' id='date' type='datetime-local' required />

                    <input name='complete' id='complete' type='checkbox' required />
                    <label id='complete'> Complete </label>

                    <button>Add Task</button>
                    <button onClick={closeModal}>Cancel</button>

                </form>
            </Modal>
        </div>
    );
}
