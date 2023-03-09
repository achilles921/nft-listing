import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

Modal.setAppElement('#root');

function NFTModal({ nft, isOpen, closeModal }) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      maxWidth: '480px',
      width: '80%'
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className="modal-details">
        <img src  ={nft.media[0].thumbnail} alt={nft.title} />
        <h2>{nft.title}</h2>
        <p>{nft.description}</p>
      </div>
    </Modal>
  );
}

NFTModal.propTypes = {
  nft: PropTypes.object.isRequired,
};

export default NFTModal;
