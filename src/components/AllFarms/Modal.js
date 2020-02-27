import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Modal = ({
  title,
  closeModal,
  children
}) => {

  const showNotification = useSelector(state => state.farm.showNotification);
  const dispatch = useDispatch();
  return (
  <div className="modal" style={{display: 'block'}}>
    <div className="modal-background"></div>
    <div className="modal-card">
      <header className="modal-card-head">
      {showNotification
          ? (<div className="notification basic-notification is-danger is-size-5">
              <button 
                  className="delete"
                  onClick={() => dispatch({type: 'SUCCESS'})}>
              </button>
            {`An error occurred`}
            </div>
          )
          : null
      }
        <p className="modal-card-title">{ title }</p>
        <button className="delete" aria-label="close" onClick={closeModal}></button>
      </header>
      <section className="modal-card-body">
      { children }
      </section>
      <footer className="modal-card-foot">
        <button className="button" onClick={closeModal}>Close</button>
      </footer>
    </div>
  </div>
  )
}

export default Modal;
