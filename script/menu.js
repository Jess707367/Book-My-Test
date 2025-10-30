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



  // Get references to elements
  const scrollContainer = document.getElementById('scrollContainer');
  const moveLeft = document.getElementById('moveLeft');
  const moveRight = document.getElementById('moveRight');

  // Amount to scroll per click (adjust as needed)
  const scrollAmount = 300; // pixels

  // Scroll left
  moveLeft.addEventListener('click', () => {
    scrollContainer.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  // Scroll right
  moveRight.addEventListener('click', () => {
    scrollContainer.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });


  //nav bar
  if (window.scrollY > 50) {
  navbar.classList.add("bg-white", "shadow-md", "scrolled");
} else {
  navbar.classList.remove("bg-white", "shadow-md", "scrolled");
}