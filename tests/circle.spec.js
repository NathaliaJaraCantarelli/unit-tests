/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

/*
  A função `circle` recebe o raio de um círculo e retorna um objeto contendo suas informações: Raio, Área e Circunferência.
  Se não for especificado um raio, a função retorna `undefined`.
  Escreva pelo menos seis testes para essa função para garantir que a implementação de `circle` está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no console do navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Outra dica: que tal pesquisar se existe um matcher que compara valores próximos?
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!
*/

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  // it('Verifica se ao receber um raio, a função `circle` retorna um objeto contendo os valores esperados', () => {
  //   fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se circle retorna undefined, caso o parâmetro passado não seja um número.
    it('Verifica se retorna undefined caso parâmentro não seja um número', () => {
      expect(circle('teste')).toBe(undefined);
     });
    // Teste se circle retorna um objeto.
    it('Verifica se retorna um objeto', () => {
      const teste1 = circle(1);
      expect(typeof (teste1)).toBe('object');
     });
    // Teste se o objeto retornado possui 3 propriedades.
    it('Verifica se o objeto possui 3 propriedades', () => {
      const teste2 = circle(1);
      expect(Object.keys(teste2).length).toBe(3);
     });
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    it('Verifica se retorna undefined caso não seja passado um parâmentro', () => {
      expect(circle()).toBe(undefined);
     });
    // Teste se dentro do objeto retornado, a função retorna uma `key` com `value` igual à circunferência correta para um círculo de raio 2.
    it('Verifica se o objeto possui uma propriedades com valor igual a circunferencia para um circulo de raio 2', () => {
      const teste3 = circle(2);
      const raioCorreto = 2 * 3.14 * 2;
      expect(Object.values(teste3)[2]).toBe(raioCorreto);
     });
    // Teste se dentro do objeto retornado, a função retorna uma `key` com `value` igual à área correta para um círculo de raio 3.
    it('Verifica se o objeto possui uma propriedades com valor igual a area para um circulo de raio 3', () => {
      const teste4 = circle(3);
      const areaCorreto = 3 * 3.14 * 3;
      expect(Object.values(teste4)[1]).toBe(areaCorreto);
     });
    // Teste se a função retorna, em um objeto, os dados corretos de um círculo de raio 3.
    it('Verifica se o objeto possui os dados corretos para um circulo de raio 3', () => {
      const teste5 = circle(3);
      const areaCorreto = 3 * 3.14 * 3;
      expect(Object.values(teste5)[1]).toBe(areaCorreto);
      const raioCorreto = 2 * 3.14 * 3;
      expect(Object.values(teste5)[2]).toBe(raioCorreto);
     });
  // });
});
