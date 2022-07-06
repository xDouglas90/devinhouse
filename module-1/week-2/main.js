// Menu mobile
const toggleBtn = document.querySelector('.topbar__navbar-button'),
  navbar = document.querySelector('.topbar__navbar-list');

const handleToggle = () => {
  toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('topbar__navbar-list--open');
  });
};

// Slider
window.addEventListener('load', function () {
  new Glider(document.querySelector('.glider'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    dots: '#resp-dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next',
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 'auto',
          itemWidth: 150,
          duration: 0.25,
        },
      },
      {
        // screens greater than >= 992px
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 'auto',
          itemWidth: 350,
          duration: 0.25,
        },
      },
    ],
  });
});
