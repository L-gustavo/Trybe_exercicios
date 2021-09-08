let numero = 5;
let simbolo = '*';
let espaço = '';
let coluna = numero;

for (let index = 0; index < numero; index += 1) {
  for(let i = 0; i <= numero; i += 1) {
    if (i < coluna) {
      espaço = espaço + ' ';
    } else {
      espaço = espaço + simbolo;
    }
  }

  console.log(espaço);
  espaço = '';
  coluna -= 1;

};
