let numberOne = prompt('Digite um número: ');
let numberTwo = prompt('Digite outro número: ');
let operationResult = 0;

let chooseOperation = prompt(`Escolha uma operação: 
    1 - Soma
    2 - Subtração
    3 - Multiplicação
    4 - Divisão`);

switch (chooseOperation) {
  case '1':
    chooseOperation = '+';
    operationResult = parseInt(numberOne) + parseInt(numberTwo);
    console.log(
      `A soma dos números é: ${parseInt(numberOne) + parseInt(numberTwo)}`
    );
    break;
  case '2':
    chooseOperation = '-';
    operationResult = parseInt(numberOne) - parseInt(numberTwo);
    console.log(
      `A subtração dos números é: ${parseInt(numberOne) - parseInt(numberTwo)}`
    );
    break;
  case '3':
    chooseOperation = '*';
    operationResult = parseInt(numberOne) * parseInt(numberTwo);
    console.log(
      `A multiplicação dos números é: ${
        parseInt(numberOne) * parseInt(numberTwo)
      }`
    );
    break;
  case '4':
    chooseOperation = '/';
    operationResult = parseInt(numberOne) / parseInt(numberTwo);
    console.log(
      `A divisão dos números é: ${parseInt(numberOne) / parseInt(numberTwo)}`
    );
    break;
  default:
    alert('Operação inválida');
    window.location.reload();
    break;
}

// Function to add operation result in the result section
function addResult() {
  let resultSection = document.querySelector('.result');

  resultSection.innerHTML = `
        <p>O resultado da operação <strong>${chooseOperation}</p></strong> é
        <p>${numberOne} ${chooseOperation} ${numberTwo} = <strong>${operationResult}</strong></p>`;
}

window.addEventListener('load', addResult);

