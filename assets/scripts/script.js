import { MobileMenu } from './mobile-menu.js';
import { ShowOrHideWhatsAppButton, ShowOnApproachWhatsAppButton, FloatingWhatsAppButton } from './floating-button.js';
import { UpdateCopyrightYear } from './copyright-year.js';
import { LegalModal } from './legal.js';
import { Carousel } from './carousel.js';
import { Header } from './header.js';

// Header
Header();

// Menu Mobile
MobileMenu();

// --------------------------------------------------------------------------------------

// Botão flutuante do WhatsApp
FloatingWhatsAppButton();

// --------------------------------------------------------------------------------------

// Atualiza o ano no rodapé automaticamente
UpdateCopyrightYear();


// --------------------------------------------------------------------------------------

// Modal de termos legais
LegalModal();

// --------------------------------------------------------------------------------------

// CARROSEL
Carousel();

// --------------------------------------------------------------------------------------

// Funções ativadas por eventos do document / window
window.addEventListener('scroll', () => {
    ShowOrHideWhatsAppButton();
    Header();
});

document.addEventListener('mousemove', (e) => {
    ShowOnApproachWhatsAppButton(e.clientX, e.clientY);
});