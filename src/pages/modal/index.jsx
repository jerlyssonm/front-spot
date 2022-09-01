import { MouseEvent, ReactNode } from "react";
import './index.css'

export function Modal ({children}){
    const closeModal = (e) => {
        const modal = document.querySelector("#modal")
        modal.classList.add("hide")
    }
    return (
        <div id="modal" className="hide">
            <div className="fade" onClick={closeModal}></div>
            <div className="modal">
                <h2>Text Modal</h2>
                {children}
            </div>
        </div>
    )
}