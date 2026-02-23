// Comportamento do menu mobile
const menuIcon = document.querySelector('.j_menu_icon');
const menuOverlay = document.querySelector('.j_close');
const menu = document.querySelector('.j_menu');
const menuItems = [document.querySelector(".j_logo"), ...menu.querySelectorAll('.j_menu_item')];

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});

menuOverlay.addEventListener('click', ({ target }) => {
    if (menu.classList.contains('menu-open') && target.classList.contains('j_close')) {
        menu.classList.remove('menu-open');
    }
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('menu-open');
    });
});

// --------------------------------------------------------------------------------------

// Comportamento do botão flutuante do WhatsApp
const whatsappBtn = document.querySelector('.th-whatsapp-float');
const header = document.querySelector('.j_header');
let scrollTimeout;
let isMouseOver = false; // Flag para rastrear o mouse

// Função para esconder o botão com segurança
function hideButton() {
    if (!isMouseOver && window.scrollY > 300) {
        whatsappBtn.classList.remove('show');
    }
}

// 1. Lógica de Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        whatsappBtn.classList.add('show');

        // Reinicia o timer toda vez que rola
        clearTimeout(scrollTimeout);

        // Só agenda o sumiço se o mouse NÃO estiver em cima
        if (!isMouseOver) {
            scrollTimeout = setTimeout(hideButton, 3000);
        }
    } else {
        whatsappBtn.classList.remove('show');
    }

    // Comportamento do header ao rolar a página
    if (window.scrollY > 50) {
        header.classList.add('scrolling');
    } else {
        header.classList.remove('scrolling');
    }
});

// 2. Interação de Mouse: Manter visível no Hover
whatsappBtn.addEventListener('mouseenter', () => {
    isMouseOver = true;
    clearTimeout(scrollTimeout); // Cancela qualquer agendamento de sumiço
    whatsappBtn.classList.add('show');
});

// 3. Interação de Mouse: Voltar a contar tempo ao sair
whatsappBtn.addEventListener('mouseleave', () => {
    isMouseOver = false;
    // Quando o mouse sai, damos mais 2 segundos antes de esconder
    scrollTimeout = setTimeout(hideButton, 2000);
});

// 4. Bônus: Reaparecer se o mouse chegar perto (Proximidade)
document.addEventListener('mousemove', (e) => {
    const threshold = 150; // Distância em pixels para ativar
    const rect = whatsappBtn.getBoundingClientRect();

    // Calcula distância do mouse até o centro do botão
    const buttonX = rect.left + rect.width / 2;
    const buttonY = rect.top + rect.height / 2;
    const distance = Math.hypot(e.clientX - buttonX, e.clientY - buttonY);

    if (distance < threshold && window.scrollY > 300) {
        whatsappBtn.classList.add('show');
        clearTimeout(scrollTimeout);
    }
});