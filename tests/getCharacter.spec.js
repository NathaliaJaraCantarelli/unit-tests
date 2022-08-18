/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const getCharacter = require('../src/getCharacter');

/*
A função getCharacter recebe uma string que representa o nome de um personagem e retorna um objeto contendo seu nome, sua classe e suas frases.

O retorno será de acordo com a seguinte relação:

 Parâmetro  |      Nome       |    Classe   |              Frases
----------------------------------------------------------------------------------
   Arya     |   Arya Stark    |    Rogue    | 'Not today', 'A girl has no name.'
  Brienne   |  Brienne Tarth  |    Knight   | 'Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'
Melissandre |   Melissandre   | Necromancer | 'Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'

- Se o parâmetro não estiver na tabela, a função retorna `undefined`.
- Se o parâmetro estiver, a função retorna um objeto no formato abaixo:

  {
    name: 'Nome do Personagem',
    class: 'Classe do Personagem' ,
    phrases: ['frase1', 'frase2']
  }

- OBS.: O parâmetro não é CASE SENSITIVE, portanto Arya, ArYa e ARYA tem o mesmo resultado.

Escreva pelo menos seis testes para essa função garantindo que a implementação de getCharacter está correta.

Parâmetros:
  - Uma string.

Comportamento: 
  - getCharacter('Arya');

Retorno:
{
  name: 'Arya Stark',
  class: 'Rogue',
  phrases: [ 'Not today', 'A girl has no name.' ]
}
*/

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  // it('Verifica se a função `getCharacter` retorna o objeto do personagem corretamente.', () => {
  //   fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    it('Verifica se retorna undefined quando não recebe parâmetro', () => {
      expect(getCharacter()).toBe(undefined);
    });
    // Teste se a função retorna o objeto correto para o parâmetro 'Arya',
    it('Verifica se retorna o objeto correto quando recebe Arya', () => {
      const aryaTest = getCharacter('Arya');
      expect(typeof (aryaTest)).toBe('object');
      expect(aryaTest.name).toBe('Arya Stark');
      expect(aryaTest.class).toBe('Rogue');
      expect(aryaTest.phrases[0]).toBe('Not today');
      expect(aryaTest.phrases[1]).toBe('A girl has no name.');
    });
    // Teste se a função retorna o objeto correto para o parâmetro 'Brienne',
    it('Verifica se retorna o objeto correto quando recebe Brienne', () => {
      const brienneTest = getCharacter('Brienne');
      expect(typeof (brienneTest)).toBe('object');
      expect(brienneTest.name).toBe('Brienne Tarth');
      expect(brienneTest.class).toBe('Knight');
      expect(brienneTest.phrases[0]).toBe('Im No Lady, Your Grace.');
      expect(brienneTest.phrases[1]).toBe('I, Brienne Of Tarth, Sentence You To Die.');
    });
    // Teste se a função retorna o objeto correto para o parâmetro 'Melissandre',
    it('Verifica se retorna o objeto correto quando recebe Melissandre', () => {
      const melissadreTest = getCharacter('Melissandre');
      expect(typeof (melissadreTest)).toBe('object');
      expect(melissadreTest.name).toBe('Melissandre');
      expect(melissadreTest.class).toBe('Necromancer');
      expect(melissadreTest.phrases[0]).toBe('Death By Fire Is The Purest Death.');
      expect(melissadreTest.phrases[1]).toBe('For The Night Is Dark And Full Of Terrors.');
    });
    // Teste se o parâmetro não é Case Sensitive, ou seja, independente de conter letras maiúsculas ou minúsculas retorna o mesmo objeto relativo a ele.
    it('Verifica se o parâmetro é case sensitive', () => {
      const aryaTestSensitive = getCharacter('Arya');
      const aryaTestNoSensitive = getCharacter('arya');
      let teste = '';
      if (aryaTestNoSensitive === aryaTestSensitive) {teste = 'true'}
      else {teste = 'false'};
      expect(teste).toBe('true')
    });
    // Teste se ao passar um nome que não está na tabela, a função retorna undefined.
    it('Verifica se retorna undefined se o nome for diferente da tabela', () => {
      expect(getCharacter('nathalia')).toBe(undefined);
    });
  // });
});
