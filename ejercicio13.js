//Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(array, nombre) {
    const encontrado = array.includes(nombre);
    if (encontrado) {
      const posicion = array.indexOf(nombre);
      return { encontrado: true, posicion: posicion };
    } else {
      return { encontrado: false };
    }
  }

const resultado1 = finderName(nameFinder, 'Tony');
console.log(resultado1); 

const resultado2 = finderName(nameFinder, 'Thor');
console.log(resultado2); 