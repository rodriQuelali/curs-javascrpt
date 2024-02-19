/**
 * Crear array de longitud N, y que sus elementos sean
 * numeros de 1 hasta N
 */

let longitud = 7;
function crearArray(n) {
    if (n <= 0) {
        return [];
    }
    let arrayResolt = [];
    for (let index = 0; index < n; index++) {
        arrayResolt[index] = index +1;
        
    }
    return arrayResolt;
}

let resultado = crearArray(longitud);

console.log(resultado);