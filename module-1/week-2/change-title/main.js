// Get Button element
const applyTitleBtn = document.querySelector('.apply-title-btn');

// Handle button click event
applyTitleBtn.addEventListener('click', () => {
  // Get input element
  const titleInput = document.querySelector('.title-input');
  // Get value from input element
  const title = titleInput.value;
  // Get title element
  const titleElement = document.querySelector('.title');
  // Set title
  titleElement.textContent = title;
});
