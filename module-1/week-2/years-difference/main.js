window.onload = function () {
  const year = prompt('Digite um ano');
  const year2 = new Date().getFullYear();

  const yearsDifference = year2 - year;

  alert(`${year2} - ${year} = ${yearsDifference}`);

  const yearTd = document.querySelector('.user-year');
  yearTd.textContent = `${year}`;

  const resultTd = document.querySelector('.result');
  resultTd.textContent = `${yearsDifference} anos de diferença`;
};

const refresh = () => {
  location.reload();
};
