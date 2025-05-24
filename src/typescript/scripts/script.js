var menuButton = document.getElementById('menu-mobile-button');
if (menuButton) {
    menuButton.addEventListener('click', function () {
        var mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu) {
            mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
        }
    });
}
