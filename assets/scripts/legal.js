import { Modal } from "./modal.js";

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

export const LegalModal = () => {
    document.querySelectorAll('.legal-trigger').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const type = trigger.getAttribute('data-type');
            (Modal(legalContent[type]));
        });
    });
}