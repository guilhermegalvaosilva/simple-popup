import React from "react";
import "./Popup.css";

export default function Popup({ isOpen, onClose, children }) {
  if (!isOpen) return null; // se não estiver aberto, não renderiza nada

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
