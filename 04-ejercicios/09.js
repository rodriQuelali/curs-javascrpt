/**
 * crear algoritmo que devuelva un 
 * array de obketos en base a pares
 */

let array = [{
    id:1,
    name: 'Nicolas'
    },{
        id:2,
        name: 'Felipe'
    },{
        id:3,
        name: 'Chanchito'
    }];

let pairs = [
    [1, {name: "Nocolas"}],
    [2, {name: "Felipe"}],
    [3, {name: "Chanchito"}],
];

function toCollection(arr) {
    let collection = [];
    for (idx in arr) {
        let elemento = arr[idx];
        console.log(elemento);
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
    }

    return collection;
}

let resultado = toCollection(pairs);
console.log(resultado);