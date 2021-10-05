// 1 questão
// const testingScope = (escopo) => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
// }

// testingScope(true);

// 2 questão 
// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sorteOddsAndEvens = () => {
//   oddsAndEvens[0] = 2
//   oddsAndEvens[1] = 3
//   oddsAndEvens[2] = 4
//   oddsAndEvens[3] = 7
//   oddsAndEvens[4] = 10
//   oddsAndEvens[5] = 13

//   return oddsAndEvens;
// }

//   const pegaOrds = sorteOddsAndEvens();

// console.log(`Os numeros ${pegaOrds} se encontram ordenados de forma crescente!`); 

//  Parte 2 do dia 7.1 

// 1 questão

const fatorial = (num) => (num<2)? 1:fac(num-1)*num;

console.log(fatorial(num));