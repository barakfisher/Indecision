import React from 'react';
import Modal from 'react-modal';

const OptionModal  = (props) => (
    <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    closeTimeoutMS ={200} // will set time out before closing the modal - > works with before-close class
    onRequestClose = {props.handleClearSelectedOption} // will close the modal if user hit escape || outside the modal
    className = 'modal'
    >
        <h3 className='modal__title'> Selected Option </h3>
        {props.selectedOption && <p className='modal__body'> {props.selectedOption}</p>}
        <button className='button' onClick={props.handleClearSelectedOption}> Okey </button>
    </Modal>
);
export default OptionModal;