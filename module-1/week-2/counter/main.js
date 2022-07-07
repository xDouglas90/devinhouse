// Get paragragraph value and convert to a Number type
const el = document.querySelector('.number').innerText;
let elConverted = parseInt(el);

// =========== Decrement functionality =============
// Get decrement button
const decrementBtn = document.querySelector('.decrement');
// Handle decrement button click
decrementBtn.addEventListener('click', () => {
  elConverted--;
  document.querySelector('.number').textContent = elConverted;
});

//  =========== Increment functionality =============
// Get decrement button
const incrementBtn = document.querySelector('.increment');
// Handle decrement button click
incrementBtn.addEventListener('click', () => {
  elConverted++;
  document.querySelector('.number').textContent = elConverted;
});
