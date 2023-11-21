// Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
// pista (typeof)


const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
  let sumNumeric = 0;
  let countStrings = 0;

  param.forEach((element) => {
    if (typeof element === 'number') {
      sumNumeric += element;
    } else if (typeof element === 'string') {
      countStrings += element.length;
    }
  });

  const average = countStrings > 0 ? sumNumeric / countStrings : 0;
  return average;
}

const resultado = averageWord(mixedElements);
console.log(resultado);