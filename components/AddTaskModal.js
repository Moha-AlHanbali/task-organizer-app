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
        backgroundColor: 'cyan',
    },
    overlay: {zIndex: 10},

};

Modal.setAppElement('body');

export default function AddTaskModal({ taskModal, openTaskModal, closeTaskModal, addTaskHandler, activeDate }) {

    return (
        <div >
            <button onClick={openTaskModal}>Open Modal</button>
            <Modal
                isOpen={taskModal}
                onRequestClose={closeTaskModal}
                style={customStyles}
                contentLabel="Add Task Modal">
                <button onClick={closeTaskModal}>X</button>
                <div>Add a new task</div>
                <form onSubmit={addTaskHandler}>
                    <label id='title'>Task Title</label>
                    <input name='title' id='title' placeholder='Task Title' required />

                    <label id='details'>Task Description</label>
                    <textarea name='details' id='details' placeholder='details' required />

                    <label id='date'>Task Date and Time</label>
                    <input name='date' id='date' type='datetime-local' defaultValue={activeDate} required />

                    <input name='complete' id='complete' type='checkbox' />
                    <label id='complete'> Complete </label>

                    <button>Add Task</button>

                </form>
                <button onClick={closeTaskModal}>Cancel</button>
            </Modal>
        </div>
    );
}
