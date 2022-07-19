// ============================== ACCOUNTS ==================================
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

// ============================== OPERATIONS ==================================
//Result section elements
const successMsg = document.querySelector('.op-result__success-msg'),
  successContainer = document.querySelector('.op-result__success'),
  failContainer = document.querySelector('.op-result__fail'),
  failMsg = document.querySelector('.op-result__fail-msg'),
  accField = document.querySelector('.op-result__account'),
  typeField = document.querySelector('.op-result__type'),
  amtField = document.querySelector('.op-result__amount'),
  balanceField = document.querySelector('.op-result__balance');

// Function to withdraw money
const withdraw = (account, amount) => {
  if (account.balance <= 0) {
    failContainer.classList.remove('d-none');
    failMsg.textContent = 'Valor inválido. Por favor, tente novamente.';
    return;
  }

  if (amount > account.balance) {
    failContainer.classList.remove('d-none');
    failMsg.textContent = `Saldo insuficiente. Seu saldo atual é de R$ ${account.balance},00.`;
    return;
  }

  successContainer.classList.remove('d-none');
  successMsg.textContent = `Saque realizado com sucesso.`;
  return (account.balance -= amount);
};

const deposit = (account, amount) => {
  if (amount <= 0) {
    failContainer.classList.remove('d-none');
    failMsg.textContent = 'Valor inválido. Por favor, tente novamente.';
    return;
  }

  successContainer.classList.remove('d-none');
  successMsg.textContent = `Depósito realizado com sucesso.`;
  return (account.balance += amount);
};

// Function to perform operation
const operation = (type, account, amount) => {
  if (type === 1) {
    return deposit(account, amount);
  }

  if (type === 2) {
    return withdraw(account, amount);
  }

  return 'Operação inválida. Por favor, selecione um tipo de operação.';
};

// Get operation form
const operationForm = document.querySelector('.op-form');

// Operation form submit event
operationForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get input/select values
  const accountSelected = document.querySelector('.op-account').value;
  const informedAmount = document.querySelector('.op-amount').value;
  const operationType = document.querySelector('.op-type');

  // Get account by id
  const account = accounts.find(
    (account) => account.id === Number(accountSelected)
  );
  // Convert informed values to number
  const type = Number(operationType.value);
  const amount = Number(informedAmount);

  // Perform operation
  operation(type, account, amount);

  // Display result section
  const resultSection = document.querySelector('.op-result');
  resultSection.classList.remove('d-none');

  // Populate result section fields
  accField.textContent = account.name;
  typeField.textContent = operationType.options[type].textContent;
  amtField.textContent = amount;
  balanceField.textContent = account.balance;

  // Clear input fields
  operationForm.reset();
});

console.log(accounts);
