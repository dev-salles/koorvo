const contactBox = document.querySelector('.th-contact__box');

contactBox.addEventListener('mousemove', (e) => {
    const rect = contactBox.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    contactBox.style.setProperty('--x', `${x}px`);
    contactBox.style.setProperty('--y', `${y}px`);
});