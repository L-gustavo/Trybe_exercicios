// exercicio feito com mari e luis
const cadastro = (name) => {
  let nome = name.toLowerCase().split(' ');
  return {nome: name, 
  email: `${nome.join('_')}@trybe.com`}
  }
  
  const newEmployees = (callback) => {
  const employees = {
  id1: callback('Pedro Guerra'),
  id2: callback('Luiza Drumond'), 
  id3: callback('Carla Paiva'), 
  }
  return employees;
  };
  console.log(newEmployees(cadastro)); 

