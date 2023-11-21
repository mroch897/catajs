//Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {

    const sum=param.reduce((total, currentNumber) => total + currentNumber,0);
    const averageValue=sum/param.length;
    return averageValue;

}

const resultado = average(numbers);
console.log(resultado);