    const openMenu = document.getElementById('openMenu');
    const closeMenu = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');

    openMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('-translate-x-full');
        menuOverlay.classList.remove('hidden');
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-x-full');
        menuOverlay.classList.add('hidden');
    });

    menuOverlay.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-x-full');
        menuOverlay.classList.add('hidden');
    });

