// menu hamburger
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active-menu');
}

btnMobile.addEventListener('click', toggleMenu);