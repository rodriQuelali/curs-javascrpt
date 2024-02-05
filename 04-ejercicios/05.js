/**
 * crear algoritmo que devuelva numero
 * menor y mayor de un array.
 */

let array = [2,5,7,15,-5,-100,55];

function getMenorMayor(arr) {
    let men = arr[0]
    let may = arr[0];

    for (iterator of arr) {
        men = men < iterator ? men : iterator;
        may = may > iterator ? may : iterator; 
    }
    return [men, may];
}

let numeros = getMenorMayor(array);
console.log(numeros);