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

// Custom Toast
const Toast = {
  init() {
    this.hideTimeout = null;

    this.el = document.createElement('div');
    this.el.classList.add('toast__alert');

    const toastContainer = document.querySelector('.toast');

    toastContainer.appendChild(this.el);
  },
  show(message, state) {
    clearTimeout(this.hideTimeout);

    this.el.innerHTML = message;
    this.el.classList.add('toast__alert--visible');

    if (state) {
      this.el.classList.remove('toast__alert--error');
      this.el.classList.add('toast__alert--success');
    }

    if (!state) {
      this.el.classList.add('toast__alert--error');
    }

    this.hideTimeout = setTimeout(() => {
      this.el.classList.remove('toast__alert--visible');
    }, 3000);
  },
};

document.addEventListener('DOMContentLoaded', () => Toast.init());

const toastContent = {
  success: `
  <i class="fa-solid fa-circle-check"></i>
  <p class="toast__text">
      Mensagem enviada com
      sucesso!
  </p>
  `,
  error: `<i class="fa-solid fa-circle-exclamation"></i>
  <p class="toast__text">
      Ops! <br> parece que você esqueceu de preencher algum campo!
  </p>
  `,
};

// Form
const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Handle form data
  const formData = new FormData(form);
  const data = {};

  formData.forEach((value, key) => {
    data[key] = value;
  });

  let response = `
  Formulário de contato => Nome: ${data.name} - E-mail: ${data.email} - Descriçao: ${data.description}
  `;
  console.log(response);

  if (data.name && data.email && data.description) {
    Toast.show(toastContent.success, true);
  }

  if (!data.name || !data.email || !data.description) {
    Toast.show(toastContent.error, false);
  }
});
