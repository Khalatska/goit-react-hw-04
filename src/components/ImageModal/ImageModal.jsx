import Modal from "react-modal";
const ImageModal = ({
  closeModal,
  modalIsOpen,
  customStyles,
  clickedImage,
}) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {clickedImage && (
          <img
            src={clickedImage.urls.regular}
            alt={clickedImage.alt_description}
          />
        )}
      </Modal>
    </div>
  );
};

export default ImageModal;