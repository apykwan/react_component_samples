import ReactDOM from 'react-dom';
import { useEffect } from 'react';

function Modal({ onClose, actionBar, children }) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div className="fixed inset-0 bg-gray-300 opacity-80" onClick={onClose}></div>
      <div className="fixed inset-x-6 inset-y-48 md:inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">
            {actionBar}
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );

}

export default Modal;