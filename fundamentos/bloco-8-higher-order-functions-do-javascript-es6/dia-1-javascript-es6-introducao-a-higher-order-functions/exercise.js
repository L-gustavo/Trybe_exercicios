// 1 questao
const contratado = (nomeCompleto) => {
  let nome = nomeCompleto.toLowerCase().split(' ');
  return { nome: nomeCompleto, email: `${nome.join('_')}@trybe.com`}
  }
  // console.log(contratado('Mariana Saraiva Cirino de Moura'));
  
  const newEmployees = (func) => {
  const employees = {
  id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
  id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
  id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
  };
  
  console.log(newEmployees(contratado)); 

//  2 questão 
const sorteio = (numeroEscolhido) => {
  let numeroSorteado = Math.round(Math.random() * 5) + 1;
  console.log(numeroSorteado);
  const resultado = confereNumero(numeroEscolhido, numeroSorteado);
  return resultado
  }
  
  const confereNumero = (numeroEscolhido, numero) => (numero === numeroEscolhido) ? "Parabéns você ganhou" : "Tente novamente";
  
  console.log(sorteio(5)); 

// 3 questão 

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const resultado = (RIGHT_ANSWERS, STUDENT_ANSWERS, verificarRespostas) => {
let contar = verificarRespostas(RIGHT_ANSWERS, STUDENT_ANSWERS);
return contar;
};

const verificarRespostas = (RIGHT_ANSWERS, STUDENT_ANSWERS)=> {
let contador = 0;
for (let index = 0; index <= RIGHT_ANSWERS.length; index += 1) {
if(RIGHT_ANSWERS[index] === STUDENT_ANSWERS[index]) {
contador += 1;
} else if (RIGHT_ANSWERS[index] === 'N.A'){
contador += 0;
} else {
contador += -0.5;
} 
}
return `Resultado final: ${contador} corretas`;
}

console.log(resultado(RIGHT_ANSWERS, STUDENT_ANSWERS, verificarRespostas)); 