// Dada uma matriz, transforme em um array

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, array) => acc.concat(array), []);
}


// const arrayNumber = arrays.reduce((acc, current) => {
//   return [`${acc} ${current}`];
// });

// console.log(arrayNumber);