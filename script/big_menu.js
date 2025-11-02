    document.addEventListener('DOMContentLoaded', () => {
      const burger = document.getElementById('openMenu');            // mobile burger
      const menuLabelBtn = document.getElementById('openMenuMobileBtn'); // the MENU button
      const closeBtn = document.getElementById('closeMenuBtn');
      const panel = document.getElementById('menuPanel');
      const overlay = document.getElementById('menuOverlay');

      // Ensure all required elements exist
      if (!panel || !overlay) {
        console.error('menuPanel or menuOverlay is missing — check IDs.');
        return;
      }

      const openPanel = () => {
        panel.classList.remove('translate-x-full');
        panel.classList.add('translate-x-0');
        overlay.classList.remove('hidden');
        document.documentElement.style.overflow = 'hidden';
      };

      const closePanel = () => {
        panel.classList.remove('translate-x-0');
        panel.classList.add('translate-x-full');
        overlay.classList.add('hidden');
        document.documentElement.style.overflow = '';
      };

      // attach listeners if buttons exist
      burger && burger.addEventListener('click', openPanel);
      menuLabelBtn && menuLabelBtn.addEventListener('click', openPanel);
      closeBtn && closeBtn.addEventListener('click', closePanel);
      overlay.addEventListener('click', closePanel);

      // allow Esc to close
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !overlay.classList.contains('hidden')) closePanel();
      });
    });
