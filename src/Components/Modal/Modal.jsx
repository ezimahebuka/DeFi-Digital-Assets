import "./Modal.css";
import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";

const Modal = ({
  isOpen,
  onClose,
  type = "success",
  title,
  message,
  onConfirm,
  confirmText = "OK",
  showCancel = false,
}) => {
  if (!isOpen) return null;

  const getIcon = () => {
    switch (type) {
      case "success":
        return <FaCheckCircle className="modal-icon success" />;
      case "error":
        return <FaExclamationCircle className="modal-icon error" />;
      case "warning":
        return <FaExclamationCircle className="modal-icon warning" />;
      default:
        return <FaCheckCircle className="modal-icon success" />;
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="modal-content">
          <div className="modal-icon-wrapper">{getIcon()}</div>

          <h2 className="modal-title">{title}</h2>

          {message && <p className="modal-message">{message}</p>}
        </div>

        <div className="modal-actions">
          {showCancel && (
            <button className="modal-button secondary" onClick={onClose}>
              Cancel
            </button>
          )}
          <button
            className={`modal-button ${type}`}
            onClick={onConfirm || onClose}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
