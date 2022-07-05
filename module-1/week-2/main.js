const toggleBtn = document.querySelector('.topbar__navbar-button'),
  navbar = document.querySelector('.topbar__navbar-list');

const handleToggle = () => {
  toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('topbar__navbar-list--open');
  });
};
