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