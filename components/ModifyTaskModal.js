import { React, useState } from 'react';
import Modal from 'react-modal';
import DeleteTaskModal from './DeleteTaskModal'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: 'grey'
    },
    overlay: {zIndex: 10},

};

Modal.setAppElement('body');

export default function ModifyTaskModal({ modifyModal, closeModifyModal, updateTaskHandler, removeTaskHandler, activeTask }) {
    const [deleteModal, showDeleteModal] = useState(false)

    const openDeleteModal = () => {
        showDeleteModal(true)
    }
    const closeDeleteModal = () => {
        showDeleteModal(false)
    }

    return (
        activeTask ?
            <div>
                <Modal
                    isOpen={modifyModal}
                    onRequestClose={closeModifyModal}
                    style={customStyles}
                    contentLabel="Modify Task Modal">
                    <button onClick={closeModifyModal}>X</button>
                    <div>Modify {activeTask.title}</div>
                    <form onSubmit={updateTaskHandler}>
                        <label id='title'>Task Title</label>
                        <input name='title' id='title' placeholder='Task Title' defaultValue={activeTask.title} required />

                        <label id='details'>Task Description</label>
                        <textarea name='details' id='details' placeholder='details' defaultValue={activeTask.details} required />

                        <label id='date'>Task Date and Time</label>
                        <input name='date' id='date' type='datetime-local' required defaultValue={activeTask.date.slice(0, 16)} />

                        <input name='complete' id='complete' type='checkbox' defaultChecked={activeTask.complete} />
                        <label id='complete'> Complete </label>

                        <button>Update Task</button>


                    </form>
                    <button onClick={() => { openDeleteModal() }}>Delete Task</button>
                    <button onClick={() => { closeModifyModal() }}>Cancel</button>
                </Modal>
                <div>
                    <DeleteTaskModal deleteModal={deleteModal} openDeleteModal={openDeleteModal} removeTaskHandler={removeTaskHandler} closeDeleteModal={closeDeleteModal} activeTask={activeTask} />
                </div>
            </div> : <></>
    );
}
