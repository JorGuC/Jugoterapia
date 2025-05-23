document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.hamburger-btn');
  const menu = document.querySelector('.user-dropdown');
  btn.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
  // Cierra al clicar fuera
  document.addEventListener('click', e => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('active');
    }
  });
});
