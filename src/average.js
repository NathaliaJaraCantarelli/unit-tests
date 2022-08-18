/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

function verifica(tamanhoArray, resultado, media) {
  if (tamanhoArray === 0) {
    resultado = undefined;
  } else if (resultado === '') {
    resultado = Math.round(media / tamanhoArray);
  }
  return resultado;
}

const average = (arrayInput) => {
  let retorno = '';
  let media = 0;
  for (let index = 0; index < arrayInput.length; index += 1) {
    if (typeof (arrayInput[index]) !== 'number') {
      retorno = undefined;
      break;
    } else {
      media += arrayInput[index];
    }
  }
  const resultadoFinal = verifica(arrayInput.length, retorno, media);
  return resultadoFinal;
};

module.exports = average;
