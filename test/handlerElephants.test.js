const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Não passando argumentos a função deve retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Se o parâmetro passado para função não é uma string retornar uma frase de erro', () => {
    const result = 'Parâmetro inválido, é necessário uma string';

    expect(handlerElephants(1)).toBe(result);
    expect(handlerElephants(true)).toBe(result);
    expect(handlerElephants(['names'])).toBe(result);
  });

  it('Se o parâmetro passado para função for uma chave do objeto de "elephants", deve retornar o valor da chave', () => {
    const availability = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];

    expect(handlerElephants('popularity')).toBe(5);
    expect(handlerElephants('location')).toBe('NW');
    expect(handlerElephants('availability')).toEqual(availability);
  });

  it('Deve retornar o valor correto conforme o parâmetro passado', () => {
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names')).toContain('Jefferson');
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

  it('Se o parâmetro passado for uma string, mas não estiver entre as informações que podem ser obtidas, retornar null', () => {
    expect(handlerElephants('stringQualquer')).toBeNull();
  });
});
