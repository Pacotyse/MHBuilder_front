import './styles.scss';

interface ModalProps {
  children: JSX.Element | JSX.Element[]
  modalXl: boolean
  shown: boolean
}

function Modal({ children, modalXl, shown } : ModalProps) {
  return shown ? (
    <div className="modal-backdrop ">
      <div className={`modal ${modalXl ? 'modal-xl' : ''}`}>
        <button className="modal__button-close" type="button" aria-label="close">X</button>
        {/* children : all the nested elements */}
        {children}
      </div>
    </div>
  ) : null;
}

export default Modal;
