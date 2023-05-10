import './styles.scss';

interface ModalProps {
  children: JSX.Element[]
  modalXl : boolean
}

function Modal({ children, modalXl } : ModalProps) {
  return (
    <div className="modal-backdrop ">
      <div className={`modal ${modalXl ? 'modal-xl' : ''}`}>
        <button className="modal__button-close" type="button" aria-label="close">X</button>
        {/* children : all the nested elements */}
        {children}
      </div>
    </div>
  );
}

export default Modal;
