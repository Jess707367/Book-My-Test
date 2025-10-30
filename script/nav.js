

    
    // Navbar scroll effect
    window.addEventListener("scroll", function() {
        const navbar = document.getElementById("navbar");
        if (window.scrollY > 20) {
            navbar.style.backgroundColor = "white";
            navbar.classList.add("shadow-lg");
        } else {
            navbar.style.backgroundColor = "transparent";
            navbar.classList.remove("shadow-lg");
        }
    });

    // Mobile menu functionality
    const openMenu = document.getElementById("openMenu");
    const closeMenu = document.getElementById("closeMenu");
    const mobileMenu = document.getElementById("mobileMenu");
    const menuOverlay = document.getElementById("menuOverlay");

    openMenu.addEventListener("click", function() {
        mobileMenu.classList.remove("-translate-x-full");
        menuOverlay.classList.remove("hidden");
    });

    closeMenu.addEventListener("click", function() {
        mobileMenu.classList.add("-translate-x-full");
        menuOverlay.classList.add("hidden");
    });

    menuOverlay.addEventListener("click", function() {
        mobileMenu.classList.add("-translate-x-full");
        menuOverlay.classList.add("hidden");
    });