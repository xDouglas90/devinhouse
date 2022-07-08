window.onload = function () {
  // Get user year by a prompt
  const year = prompt('Digite um ano');
  // Get the current year
  const year2 = new Date().getFullYear();
  // Calculate the difference between the years
  const yearsDifference = year2 - year;
  // Show the difference in the alert
  alert(`${year2} - ${year} = ${yearsDifference}`);
  // Add user year in HTML table
  const yearTd = document.querySelector('.user-year');
  yearTd.textContent = `${year}`;
  // Add years difference in HTML table
  const resultTd = document.querySelector('.result');
  resultTd.textContent = `${yearsDifference} anos de diferença`;
};

// Function to refresh page 
const refresh = () => {
  location.reload();
};
