// Navbar
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
  const navbarMenu = document.getElementById('navbar-default');

  if (toggleButton && navbarMenu) {
    toggleButton.addEventListener('click', () => {
      navbarMenu.classList.toggle('hidden');

      const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
      toggleButton.setAttribute('aria-expanded', !isExpanded);
    });
  }
});

