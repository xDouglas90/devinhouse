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
const lista = [guestOne, guestTwo, guestThree, guestFour, guestFive, guestSix];

// Function to check if a guest is older than 18 years old and add to new list
const isOlder = (list, processedList) => {
  list.map((guest) => {
    if (guest.idade >= 18) {
      processedList.push({ ...guest, openBar: true });
    } else {
      processedList.push({ ...guest, openBar: false });
    }
  });
};

// Function to return processed list
const liberarBebidas = (lista) => {
  const listaProcessada = [];

  isOlder(lista, listaProcessada);

  return listaProcessada;
};

const listaComBebidasProcessadas = liberarBebidas(lista);
console.log(listaComBebidasProcessadas);
