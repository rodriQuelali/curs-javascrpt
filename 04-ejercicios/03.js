/**
 * indice validar que no sea mayor a cero y que el elemento exista
 * en el array
 * indice y no el valor
 */

function getbyIdx(arr, idx) {
    if(idx < 0 || arr.length <= idx){
        return 'elemento no exite';
    }
    return arr[idx];
}

let resul = getbyIdx([1, 2], 2);
console.log(resul);