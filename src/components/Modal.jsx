// import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { useZoom } from "../context/Context";

function Modal({ children }) {
  const { setZoomModal } = useZoom();

  return ReactDOM.createPortal(
    <div
      className={styles["modal-overlay"]}
      onClick={() => setZoomModal(false)}
    >
      <div
        className={styles["modal-content"]}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles["close-button"]}
          onClick={() => setZoomModal(false)}
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root") // Portal to "modal-root" in index.html
  );
}

export default Modal;
