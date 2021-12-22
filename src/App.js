import Landingpage from "./components/Landingpage";
import Modal from "./components/Modal";
import { useState } from "react";
function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <Landingpage></Landingpage>
      <div className="btn-wrapper">
        <button className="btn" onClick={() => setOpenModal(!openModal)}>
          Join Us
        </button>
      </div>
      {openModal ? (
        <Modal setOpenModal={setOpenModal} openModal={openModal}></Modal>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
