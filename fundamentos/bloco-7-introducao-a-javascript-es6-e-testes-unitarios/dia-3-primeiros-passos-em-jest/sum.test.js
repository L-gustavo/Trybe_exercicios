const { expect } = require('@jest/globals');
const {sum, myRemove, myFizzBuzz} = require('./sum');

describe('Function sum', () => {
  it('sums two values', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('sums two values', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => sum(4, "5")).toThrowError();
  });
  it('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => sum(4, "5")).toThrowError('parameters must be numbers');
  });

});

describe('Function myRemove', () => {
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  })
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  })
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
});

describe('function myFizzBuzz', () => {
  it('Faça uma chamada com um número divisível por 3, verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(3)).toBe("fizz")
  })
  it('Faça uma chamada com um número divisível por 5, verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(5)).toBe("buzz")
  })
  it('Faça uma chamada com um número divisível por 3 e 5, verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz")
  })
  it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(1)).toBe(1)
  })
  it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('2')).toBe(false)
  })
});