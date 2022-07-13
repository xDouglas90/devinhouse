var listaConvidados = [
  { nome: 'José', sobrenome: 'Carlos' },
  { nome: 'Alessandro', sobrenome: 'Viana' },
  { nome: 'Paula', sobrenome: 'Souza' },
  { nome: 'Cristian', sobrenome: 'Schimit' },
  { nome: 'Beatriz', sobrenome: 'Viana' },
  { nome: 'Fernanda', sobrenome: 'Silveira' },
  { nome: 'Cláudia', sobrenome: 'Torres' },
  { nome: 'Augusto', sobrenome: 'Cesar' },
  { nome: 'Noemi', sobrenome: 'Nakamura' },
  { nome: 'Pedro', sobrenome: 'Lobo' },
];

// Function to create an list element
function elementCreator(content) {
  let el = document.createElement('li');
  el.textContent = content;
  el.classList.add('list__item');

  return el;
}

// Function to Populate list
function populateList() {
  let list = document.querySelector('.list');
  let listItems = listaConvidados.map((guest) =>
    elementCreator(`${guest.nome} ${guest.sobrenome}`)
  );

  list.append(...listItems);
}

// Function to add list on load page
window.addEventListener('load', () => populateList());
