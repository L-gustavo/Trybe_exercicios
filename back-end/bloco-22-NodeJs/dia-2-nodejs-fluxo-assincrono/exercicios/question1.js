const fs = require('fs').promises;

function numbers(num1, num2, num3) {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number')
    reject('Informe apenas números');

    const resultado = (num1 + num2) * num3;

    if(resultado < 50) {
      return reject('Valor muito baixo');
    }

    resolve(resultado);
  })
}

// numbers(4,7,"b")
//   .then(resolve => console.log(resolve))
//   .catch(error => console.error(error));



const randomNumber = () => Math.floor(Math.random() * 100 + 1);

const number1 = randomNumber();
const number2 = randomNumber();
const number3 = randomNumber();

// numbers(number1, number2, number3)
//   .then(resolve => console.log(resolve))
//   .catch(error => console.error(error.message));
async function getRandomNumbers() {
  try {
    const result = await numbers(number1, number2, number3)
      console.log(resolve)
    } catch (error) {
      console.error(error);
  }
}