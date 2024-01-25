/**
 * realizar  un algoritmopara calcular los numeros impares del 1 al 10
 */

function calImpar() {
    for (let index = 1; index <= 10; index++){
        console.log( index % 2 !== 0? "impar" + index: "");
    }
}
calImpar();