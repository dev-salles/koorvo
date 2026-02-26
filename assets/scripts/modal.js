import { toggleModalScroll } from "./modal-scroll-behavior.js";

const modal = document.getElementById('legal-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelectorAll('.close-modal');

/**
 * Função para abrir a modal com o conteúdo específico e controlar o scroll do body
 * @param {HTMLElement | string} content 
 */
export const Modal = (content) => {
    modalBody.innerHTML = content;
    modal.classList.add('is-open');
    toggleModalScroll(true);

    closeBtn.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            if (e.target.classList.contains('close-modal')) {
                modal.classList.remove('is-open');
                toggleModalScroll(false);
            }
        }, { once: true }); // Garante que o evento seja adicionado apenas uma vez
    });
}