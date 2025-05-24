const menuButton = document.getElementById('menu-mobile-button') as HTMLAnchorElement;
if (menuButton) {
    menuButton.addEventListener('click', () => {
        const mobileMenu = document.querySelector('.mobile-menu') as HTMLElement;
        if (mobileMenu) {
            mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
        }
    });
}