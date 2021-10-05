// 1 questão
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  
  return a + b;
}
// 2 questão

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
// 3 questao
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// 4 questão
function encode(vogaisEmNumeros) {
  vogaisEmNumeros = vogaisEmNumeros.replace(/a/g, '1');
  vogaisEmNumeros = vogaisEmNumeros.replace(/e/g, '2');
  vogaisEmNumeros = vogaisEmNumeros.replace(/i/g, '3');
  vogaisEmNumeros = vogaisEmNumeros.replace(/o/g, '4');
  vogaisEmNumeros = vogaisEmNumeros.replace(/u/g, '5');
  return vogaisEmNumeros;
  }
  
  function decode(numeroEmVogais) {
  numeroEmVogais = numeroEmVogais.replace(/1/g, 'a');
  numeroEmVogais = numeroEmVogais.replace(/2/g, 'e');
  numeroEmVogais = numeroEmVogais.replace(/3/g, 'i');
  numeroEmVogais = numeroEmVogais.replace(/4/g, 'o');
  numeroEmVogais = numeroEmVogais.replace(/5/g, 'u');
  return numeroEmVogais; 
  }

  function techList(array, nome) {
    // seu código aqui
    array.sort();
    let techs = [];
    if (array.length === 0) {
      return "Vazio!";
    }
    // for pra fazer entra em todo array
    for (let value of array) {
      techs.push({tech: value, name: nome});
    }
    return techs;
  }

  function hydrate(phrase) {
    // forma de encontrar numeros em uma string - pesquisa: YoutubeJavaScript Problem: Extracting Numbers from a String.
    let reg = /\d+/g;
    let result = phrase.match(reg);
    // percorrer o array formado para transformar em number
    for (let index in result) {
    result[index] = parseInt(result[index], 10);
    }
    // fazer a soma dos numeros do array criado
    let sum = 0;
    for (let index = 0; index < result.length; index += 1) {
    sum += result[index];
    }
    // condição para verricar quantos copos de água terão.
    if (sum > 1) {
    let string1 = ' copos de água';
    return sum + string1;
    }
    let string2 = ' copo de água';
    return sum + string2;
  };

module.exports = {sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate};
