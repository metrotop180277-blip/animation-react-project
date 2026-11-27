import React from "react";
import c1 from './ytrewq.jpg'

function Modal({ isOpen, onClose, image, title, price }) {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999
    }}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{
        backgroundImage: `url(${c1})`,
        gap: "20px",
        padding: '10px',
        borderRadius: '12px',
        display: 'flex',
        maxWidth: '600px',
        width: '80%',
        animation: "cyberpop 0.5s ease",
        margin: "15% auto",
        position: "relative",
        display: "flex"
      }}>
        <img src={image} alt={title} style={{ width: '312px', height: "267px" }} />
        <div className="modal-description" style={{ marginLeft: '20px' }}>
          <h3>{title}</h3>
          <p style={{ color: '#FF9F0D' }}>{price}</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam veritatis accusantium eveniet totam libero velit asperiores culpa, enim debitis at facilis ut! Vitae aut commodi dicta omnis quo aperiam at.</p>
        </div>
          <span className="close" onClick={onClose} style={{ cursor: 'pointer', float: "right"}}>❌</span>
      </div>
    </div>
  );
}

export default Modal;