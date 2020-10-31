// Get elements
const menuTriggerEl = document.getElementById('menu-trigger');
const menu = document.getElementById('menu');
const loader = document.getElementById('loader-wrapper');

if(menuTriggerEl) {
  menuTriggerEl.addEventListener('click', (e) => {
    e.preventDefault();
    menuTriggerEl.classList.toggle('active');
    if(menu) {
      document.body.classList.toggle('opened');
    }
  });
}

window.addEventListener('load', () => {
  if(loader) {
    setTimeout(() => {
      loader.remove();
    }, 300);
  }
});