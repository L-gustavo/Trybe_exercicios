// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function indiceMenor(numeros){
  let indiceMenor = 0;
  for(let indice in numeros){
  if(numeros[indiceMenor] > numeros[indice]){
    indiceMenor = indice;
    }
  }
  return indiceMenor;
}
console.log(indiceMenor([5, 4, 2, 0]));