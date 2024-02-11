/**
 * crear algoritmo que devuelva cantidad 
 * de numeros positivos de un array.
 */
let array = [2,5,7,15,-5,-100,55];

function cuantosPositivos(arr) {
    let dat=0;
    for (const object of arr) {
        if(object > 0){
            dat++;  
        }
    }
    return dat;
    
}

let resultados = cuantosPositivos(array);
console.log(resultados);