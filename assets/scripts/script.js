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