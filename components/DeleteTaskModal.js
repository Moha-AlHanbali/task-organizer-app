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
    overlay: {zIndex: 10},

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
                    contentLabel="Modify Task Modal">
                    <button onClick={closeDeleteModal}>X</button>
                    <div>Modify task</div>
                    <h4>Are you sure you want to delete {activeTask.title}?</h4>
                    <button onClick={() => {closeDeleteModal(), removeTaskHandler()}}>Yes</button>
                    <button onClick={() => {closeDeleteModal()}}>No</button>
                </Modal>

            </div> : <></>
    );
}

