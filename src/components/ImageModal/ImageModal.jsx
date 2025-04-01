import Modal from "react-modal";

import style from "./ImageModal.module.css";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  content: {
    padding: 20,
    marginBottom: 20,
    marginTop: 20,
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function ImageModal({ img, onClose }) {
  return (
    <>
      <Modal isOpen={!!img} onRequestClose={onClose} style={customStyles}>
        <img
          src={img.urls.regular}
          alt={img.alt_description}
          className={style.image}
        />
      </Modal>
    </>
  );
}
