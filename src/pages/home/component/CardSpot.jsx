import { useState } from 'react';
import Modal from 'react-modal';
import './CardSpot.css'

Modal.setAppElement("#root")


export function Card ({children}) {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal =() => {
        setIsOpen(true);
    }
    const closeModal=() =>{
        setIsOpen(false);
    }

    return ( 
        <div className='spot'>
            <h3>{children.name}</h3>
            <p>{children.city} - {children.state}</p>
            <button onClick={openModal}>Ver  detalhes</button>

            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            overlayClassName="modal-overlay"
            className="modal-content"
            >
                <h2>{children.name}</h2>
                <hr />
                <p>{children.description}</p>
                <p>{children.city}-{children.state}</p>
                <button onClick={closeModal}>Voltar!</button>
            </Modal>
        </div>
        )
}