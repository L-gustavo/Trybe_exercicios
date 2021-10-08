// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
const sum = (...element) => element.reduce(((acc, number) => acc + number), 0);