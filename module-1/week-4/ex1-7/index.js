const accounts = [
  {
    id: 1,
    name: 'Douglas Oliveira',
    balance: 3550,
  },
  {
    id: 2,
    name: 'Ana Cristina',
    balance: 2100,
  },
  {
    id: 3,
    name: 'Júlia Maria',
    balance: 1000,
  },
];

// Function to create option element
const createOption = (value, text) => {
  const option = document.createElement('option');
  option.value = value;
  option.innerText = text;

  return option;
};

// Function to populate select element with options
const populateSelect = (list) => {
  const select = document.querySelector('.op-account');
  list.forEach((list) => {
    select.appendChild(createOption(list.id, list.name));
  });
};

// Populate select element on page load
window.onload = populateSelect(accounts);
