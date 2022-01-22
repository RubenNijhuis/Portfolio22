import React from "react";
import ReactDOM from "react-dom";

// Animation
import { motion } from "framer-motion";

// Styling
import "./style.scss";

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;

  const className = "modal";

  // Using createportal to set the modal outside of the container
  return ReactDOM.createPortal(
    <div className={className} onClick={onClose}>
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <button className="button" onClick={onClose}>
          <span className="line" />
          <span className="line" />
        </button>
        {children}
      </motion.div>
    </div>,
    document.querySelector("body")
  );
};

export default Modal;
