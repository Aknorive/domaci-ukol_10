const menuButton = document.querySelector('#menu-tlacitko');
const menuItems = document.querySelector('#menu-polozky');

menuButton.addEventListener('click', () => {
  menuItems.classList.toggle('show');
  document.querySelector('i').classList.toggle('fa-bars');
  document.querySelector('i').classList.toggle('fa-xmark');
});
