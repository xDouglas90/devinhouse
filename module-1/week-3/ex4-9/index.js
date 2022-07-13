// Factory function to create guests objects
const createGuest = (name, lastName, sector, age) => {
  return {
    nome: name,
    sobrenome: lastName,
    setor: sector,
    idade: age,
  };
};

// Create guests objects
const guestOne = createGuest('Douglas', 'Oliveira', 'Camarote', 32);
const guestTwo = createGuest('Ana', 'Freire', 'Camarote', 25);
const guestThree = createGuest('Júlia', 'Santos', 'Arquibancada', 10);
const guestFour = createGuest('Monique', 'Oliveira', 'Pista', 25);
const guestFive = createGuest('Monise', 'Oliveira', 'Pista', 22);
const guestSix = createGuest('Miquéias', 'Souza', 'Arquibancada', 11);

// Create guest list
const guestsList = [
  guestOne,
  guestTwo,
  guestThree,
  guestFour,
  guestFive,
  guestSix,
];

// Function to check if a guest is older than 18 years old and add to new list
const isOlder = (list, processedList) => {
  guestsList.map((guest) => {
    if (guest.idade >= 18) {
      processedList.push({ ...guest, openBar: true });
    } else {
      processedList.push({ ...guest, openBar: false });
    }
  });
};

// Function to return processed list
const releaseDrinks = (list) => {
  const processedList = [];

  isOlder(list, processedList);

  return processedList;
};

const processedDrinksList = releaseDrinks(guestsList);

// Function to separate guests by sector
const separateBySector = (list, sector) => {
  return list.filter((guest) => guest.setor === sector);
};

// Lists by sector
const vipArea = separateBySector(processedDrinksList, 'Camarote');
const partyFloor = separateBySector(processedDrinksList, 'Pista');
const grandstand = separateBySector(processedDrinksList, 'Arquibancada');

// Function to create li element
const createItemElement = (content) => {
  const li = document.createElement('li');
  li.textContent = content;

  return li;
};

// Add lists to DOM
const addToDOM = (list, parent) => {
  list.forEach((guest) => {
    if (guest.openBar) {
      const guestWithOpenBar = createItemElement(
        `${guest.nome} ${guest.sobrenome} 🍹`
      );
      parent.appendChild(guestWithOpenBar);
    } else {
      const guestWithoutOpenBar = createItemElement(
        `${guest.nome} ${guest.sobrenome} 🚫`
      );
      parent.appendChild(guestWithoutOpenBar);
    }
  });
};

// Render lists
window.onload = () => {
  const vipList = document.getElementById('listaCamarote');
  const partyFloorList = document.getElementById('listaPista');
  const grandstandList = document.getElementById('listaArquibancada');

  addToDOM(vipArea, vipList);
  addToDOM(partyFloor, partyFloorList);
  addToDOM(grandstand, grandstandList);
};
