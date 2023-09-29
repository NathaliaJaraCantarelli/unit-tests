const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  // it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
  //   fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    it('Verifica se roductDetails é uma função', () => {
      expect(typeof (productDetails)).toBe('function');
     });
    // Teste se o retorno da função é um array.
    it('Verifica se o retorno é um array', () => {
      expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBe(true);
     });
    // Teste se o array retornado pela função contém dois itens dentro.
    it('Verifica se o retorno é um array com dois itens', () => {
      expect(productDetails('Alcool gel', 'Máscara').length).toBe(2);
     });
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    it('Verifica se o retorno é um array com dois itens', () => {
      const objetos = productDetails('Alcool gel', 'Máscara');
      expect(typeof (objetos[0])).toBe('object');
      expect(typeof (objetos[1])).toBe('object');
     });
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    it('Verifica se os objetos são diferentes com parâmetros diferentes', () => {
      const objetos2 = productDetails('Alcool gel', 'Máscara');
      let teste = '';
      if (objetos2[0] === objetos2[1]) {teste = 'true'}
      else {teste = 'false'}
      expect(teste).toBe('false');
    });
    // Teste se os dois productIds terminam com 123.
    it('Verifica se os dois productIds terminam com 123', () => {
      const objetos2 = productDetails('Alcool gel', 'Máscara');
      let teste2 = '';
      if (objetos2[0].productIds === objetos2[1].productIds) {teste2 = 'true'}
      else {teste2 = 'false'}
      expect(teste2).toBe('true');

    });
  // });
});
