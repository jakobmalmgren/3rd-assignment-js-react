function Modal(props) {
  let setOpenModal = props.setOpenModal;
  let openModal = props.openModal;
  return (
    <div className="modal-form-wrapper">
      <div className="modal-form">
        <h2>Join Us!</h2>
        <label for="name">Name</label>
        <input type="text" />
        <label for="email">Email</label>
        <input type="email" />
        <button className="btn-modal">Click Here!</button>
        <span className="modal-close" onClick={() => setOpenModal(!openModal)}>
          X
        </span>
      </div>
    </div>
  );
}

export default Modal;
