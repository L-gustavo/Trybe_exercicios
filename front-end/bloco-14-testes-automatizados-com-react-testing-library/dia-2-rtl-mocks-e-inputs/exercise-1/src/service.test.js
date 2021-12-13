const service = require("./service");

it("testa se a função é chamada", () => {
  service.numberAltr = jest.fn().mockReturnValue(10);

  expect(service.numberAltr()).toBe(10);
  expect(service.numberAltr).toHaveBeenCalled();
  expect(service.numberAltr).toHaveBeenCalledTimes(1);
});

it("utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo", () => {
  service.numberAltr = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(service.numberAltr(10, 2)).toBe(5);
  expect(service.numberAltr).toHaveBeenCalled();
  expect(service.numberAltr).toHaveBeenCalledTimes(1);
  expect(service.numberAltr).toHaveBeenCalledWith(10, 2);
})

describe("testes de implementações", () => {
  it("Utilize o mock e desenvolva uma nova implementação que receba três parâmetros", () => {
    service.numberAltr = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);
  
    expect(service.numberAltr(1, 2, 3)).toBe(6);
    expect(service.numberAltr).toHaveBeenCalled();
    expect(service.numberAltr).toHaveBeenCalledTimes(1);
    expect(service.numberAltr).toHaveBeenCalledWith(1, 2, 3);
    
  })
})
