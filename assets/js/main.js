document.getElementById('burger-menu').addEventListener('click', function () {
  this.classList.toggle('active');
  document.getElementById('burger-menu-area').classList.toggle('active');
});

document.getElementById('lang-switcher-head').addEventListener('click', function () {
  document.getElementById('lang-switcher-list').classList.toggle('active');
});
