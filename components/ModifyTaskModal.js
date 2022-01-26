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
        background: 'grey'
    },
};

Modal.setAppElement('body');

export default function ModifyTaskModal({ modifyModal, closeModifyModal, updateTaskHandler, removeTaskHandler, activeTask }) {



    return (
        activeTask ?
            <div>
                <Modal
                    isOpen={modifyModal}
                    onRequestClose={closeModifyModal}
                    style={customStyles}
                    contentLabel="Modify Task Modal">
                    <button onClick={closeModifyModal}>X</button>
                    <div>Modify task</div>
                    <form onSubmit={updateTaskHandler}>
                        <label id='title'>Task Title</label>
                        <input name='title' id='title' placeholder='Task Title' defaultValue={activeTask.title} required />

                        <label id='details'>Task Description</label>
                        <textarea name='details' id='details' placeholder='details' defaultValue={activeTask.details} required />

                        <label id='date'>Task Date and Time</label>
                        <input name='date' id='date' type='datetime-local' required defaultValue={activeTask.date.slice(0, 16)} />

                        <input name='complete' id='complete' type='checkbox' defaultValue={activeTask.complete} />
                        <label id='complete'> Complete </label>

                        <button>Update Task</button>


                    </form>
                    <button onClick={removeTaskHandler}>Delete Task</button>
                    <button onClick={closeModifyModal}>Cancel</button>
                </Modal>
            </div> : <></>
    );
}
