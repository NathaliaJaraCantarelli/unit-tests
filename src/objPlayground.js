/*
  Implemente a função calculator que recebe dois números inteiros como parâmetro e retorna um objeto com as seguintes chaves:
    - sum;
    - mult;
    - div;
    - sub.
  Para cada chave atribua como valor a operação correspondente à sua chave:
    - sum: retorna o resultado da soma dos dois números;
    - mult: retorna o resultado da multiplicação dos dois números;
    - div: retorna o resultado da divisão dos dois números;
    - sub: retorna o resultado da subtração dos dois números.

  Os resultados das divisões devem sempre ser arredondados para baixo.

  Parâmetros:
  - Dois números inteiros.

  Comportamento:
  calculator(1, 2); // { sum: 3, mult: 2, div: 0, sub: -1 }

  Depois de ter implementado a função calculator, desenvolva uma função que converta objetos em arrays, de chaves, valores ou ambos.
  A sua função deve receber dois parâmetros:

    * o primeiro parâmetro deve ser uma string que indica o tipo de conversão;
    * o segundo parâmetro deve ser um objeto semelhante ao que é retornado pela função calculator que você acabou de desenvolver.

  Parâmetros:
  - Uma string que indica o tipo de conversão;
  - Um objeto no formato { sum: 3, mult: 2, div: 0, sub: -1 };

  Comportamento:
  arrayGenerator('keys', { sum: 3, mult: 2, div: 0, sub: -1 }) // [ 'sum', 'mult', 'div', 'sub' ]
  arrayGenerator('values', { sum: 3, mult: 2, div: 0, sub: -1 }) // [ 3, 2, 0, -1 ]
  arrayGenerator('entries', { sum: 3, mult: 2, div: 0, sub: -1 }) // [ [ 'sum', 3 ], [ 'mult', 2 ], [ 'div', 0 ], [ 'sub', -1 ] ]
*/

const calculator = (number1, number2) => {
  const operacoes = {
    sum: Math.trunc(number1 + number2),
    mult: Math.trunc(number1 * number2),
    div: Math.trunc(number1 / number2),
    sub: Math.trunc(number1 - number2),
  };
  return operacoes;
};

const chaves = (objeto) => {
  const arrayObjeto = [];
  for (let keys in objeto) {
    if (objeto !== null) {
      arrayObjeto.push(keys);
    }
  }
  return arrayObjeto;
};

const valores = (objeto) => {
  const arrayValores = [];
  for (let keys in objeto) {
    if (objeto !== null) {
      let valor = objeto[keys];
      arrayValores.push(valor);
    }
  }
  return arrayValores;
};

const tudo = (objeto) => {
  let arrayTudo = [];
  let chavesTudo = chaves(objeto);
  let valoresTudo = valores(objeto);
  let contador = 0;
  for (let keys in objeto) {
    if (objeto !== null) {
      let parte = [];
      parte.push(chavesTudo[contador]);
      parte.push(valoresTudo[contador]);
      contador += 1;
      arrayTudo.push(parte);
    }
  }
  return arrayTudo;
};

const arrayGenerator = (type, object) => {
  let arrayCriado = [];
  if (type === 'keys') {
    arrayCriado = chaves(object);
  } else if (type === 'values') {
    arrayCriado = valores(object);
  } else if (type === 'entries') {
    arrayCriado = tudo(object);
  } 
  return arrayCriado;
};

module.exports = { calculator, arrayGenerator };
