// Função para controlar o scroll do body quando a modal estiver aberta
const toggleModalScroll = (isOpen) => {
    if (isOpen) {
        // 1. Calcula a largura da scrollbar para evitar saltos de layout
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        body.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);

        // 2. Trava o scroll
        body.classList.add('no-scroll');
    } else {
        // 3. Libera o scroll
        body.classList.remove('no-scroll');
        body.style.removeProperty('--scrollbar-width');
    }
}

// Comportamento do menu mobile
const menuIcon = document.querySelector('.j_menu_icon');
const menuOverlay = document.querySelector('.j_close');
const menu = document.querySelector('.j_menu');
const menuItems = [document.querySelector(".j_logo"), ...menu.querySelectorAll('.j_menu_item')];
const body = document.body;

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
    toggleModalScroll(menu.classList.contains('menu-open'));
});

menuOverlay.addEventListener('click', ({ target }) => {
    if (menu.classList.contains('menu-open') && target.classList.contains('j_close')) {
        menu.classList.remove('menu-open');
        toggleModalScroll(false);
    }
});

menuOverlay.addEventListener('touchmove', function (e) {
    // Se a modal não tiver scroll interno, bloqueia tudo
    if (this.scrollHeight <= this.clientHeight) {
        e.preventDefault();
    }
}, { passive: false });

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('menu-open');
        toggleModalScroll(false);
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

// --------------------------------------------------------------------------------------

// Atualiza o ano no rodapé automaticamente
const copyrightYear = document.querySelector('.j_copyright_year');

if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
}


// --------------------------------------------------------------------------------------

const modal = document.getElementById('legal-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelectorAll('.close-modal');

const legalContent = {
    privacy: `
    <h2 style="background: var(--gradient-koorvo); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 25px; font-family: 'Montserrat', sans-serif; font-weight: 800;">Política de Privacidade</h2>
    
    <div style="color: rgb(255, 255, 255); line-height: 1.8; font-family: 'Plus Jakarta Sans', sans-serif;">
        <p style="margin-bottom: 25px; font-size: 1.1rem; color: var(--color-white);">
            A <strong>Koorvo</strong>, em conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong>, reafirma seu compromisso com a transparência e a segurança no tratamento de informações.
        </p>

        <div style="margin-bottom: 20px;">
            <h3 style="color: var(--color-secondary); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;">01. Coleta de Dados</h3>
            <p>Coletamos apenas as informações estritamente necessárias para o provimento de orçamentos e comunicações estratégicas, limitando-se a: <strong>Nome, E-mail e Telefone</strong>.</p>
        </div>

        <div style="margin-bottom: 20px;">
            <h3 style="color: var(--color-secondary); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;">02. Finalidade</h3>
            <p>Os dados capturados são utilizados exclusivamente para personalizar o atendimento comercial e otimizar a experiência técnica do usuário em nossa plataforma.</p>
        </div>

        <div style="margin-bottom: 20px;">
            <h3 style="color: var(--color-secondary); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;">03. Segurança</h3>
            <p>Implementamos protocolos de criptografia e camadas de segurança de nível empresarial para prevenir acessos não autorizados, garantindo a integridade total das informações.</p>
        </div>

        <div style="margin-bottom: 20px;">
            <h3 style="color: var(--color-secondary); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;">04. Seus Direitos</h3>
            <p>Como titular, você possui o direito de solicitar a exclusão, correção ou acesso às suas informações a qualquer momento através dos nossos canais oficiais de suporte.</p>
        </div>
        
        <p style="margin-top: 40px; font-size: 0.8rem; color: rgba(160, 174, 192, 0.5); border-top: 1px solid rgba(255, 255, 255, 0.05); padding-top: 20px;">
            Este documento reflete nosso padrão de conformidade e ética digital. <br>
            Última atualização: Fevereiro de 2026.
        </p>
    </div>`,
    terms: `
    <h2 style="background: var(--gradient-koorvo); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 25px; font-family: 'Montserrat', sans-serif; font-weight: 800;">Termos de Uso</h2>
    
    <div style="color: rgb(255, 255, 255); line-height: 1.8; font-family: 'Plus Jakarta Sans', sans-serif;">
        <p style="margin-bottom: 25px; font-size: 1.1rem; color: var(--color-white);">
            Ao acessar a plataforma <strong>Koorvo</strong>, o usuário concorda com as diretrizes estabelecidas para o uso ético e legal de nossos recursos e propriedade intelectual.
        </p>

        <div style="margin-bottom: 20px;">
            <h3 style="color: var(--color-secondary); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;">01. Propriedade Intelectual</h3>
            <p>Todo o conteúdo, código-fonte e design presentes neste domínio são de propriedade exclusiva da <strong>Koorvo</strong>, sendo vedada a reprodução total ou parcial sem autorização prévia por escrito.</p>
        </div>

        <div style="margin-bottom: 20px;">
            <h3 style="color: var(--color-secondary); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;">02. Responsabilidade</h3>
            <p>A Koorvo empenha-se em manter a estabilidade e segurança da plataforma, entretanto, não se responsabiliza por interrupções decorrentes de falhas técnicas externas, fatores de força maior ou uso indevido dos recursos por parte do usuário.</p>
        </div>

        <div style="margin-bottom: 20px;">
            <h3 style="color: var(--color-secondary); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;">03. Atualizações</h3>
            <p>Estes termos podem ser revisados periodicamente para refletir melhorias técnicas ou mudanças legislativas, entrando em vigor imediatamente após sua publicação oficial neste canal.</p>
        </div>
        
        <p style="margin-top: 40px; font-size: 0.8rem; color: rgba(160, 174, 192, 0.5); border-top: 1px solid rgba(255, 255, 255, 0.05); padding-top: 20px;">
            Última atualização: Fevereiro de 2026.
        </p>
    </div>`
};

document.querySelectorAll('.legal-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const type = trigger.getAttribute('data-type');
        modalBody.innerHTML = legalContent[type];
        modal.classList.add('is-open');
        toggleModalScroll(true); // Trava o scroll do site
    });
});

closeBtn.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        if (e.target.classList.contains('close-modal')) {
            modal.classList.remove('is-open');
            toggleModalScroll(false); // Libera o scroll do site
        }
    });
});