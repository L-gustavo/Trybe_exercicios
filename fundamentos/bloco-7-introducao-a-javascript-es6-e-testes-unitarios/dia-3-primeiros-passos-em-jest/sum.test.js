const {sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate} = require('./sum');

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

describe('Functions encode e decode', () => {
  it('Teste se encode é função', () => {
    expect(typeof encode).toEqual('function')
  })
  it('Teste se decode é função', () => {
    expect(typeof decode).toEqual('function');
  })
  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  })
  it('Para a função decode teste se as vogais 1, 2, 3, 4 e 5 são convertidas em a, e, i, o, u, respectivamente', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  })
  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('b, c, d, f')).toBe('b, c, d, f');
  })
  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(decode('b, c, d, f')).toBe('b, c, d, f');
  })
  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('gustavo').length).toBe(7);
  })
});

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});