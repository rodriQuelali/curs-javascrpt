/**
 * tipo de datos
 * 
 * realizar una busqueda en la memoria
 * 
 * === triple igual hace la igualdad la direccion
 * 
 * 
 */

let a = 1;
let b = a;

b++;

console.log(a, b);

//ejemplo con objetos, no se modifican
let aa = {};
let bb = aa;

bb.prop = 1;
console.log(aa,bb);

//ejemplo con funciones

let aaa = 1;
function suma(n) {
    return n++;
}

suma(aaa)
console.log(aaa);

//ejemplo de funciones con objetos

let aaaa = {prop: 1};
function sumas(n) {
    return n.prop++;
}

sumas(aaaa)
console.log(aaaa);

// conclusiones 
/**
 * los tipos de datos promitivos se copian
 * 
 * los tipo de datos de referncias se referencian
 * objetos
 * array
 * funciones
 */
