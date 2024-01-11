//pasar argumentos
function suma(a, b) {
    //se llama parametros
    console.log(arguments);
    return a+b;
}

let resultado = suma(5, 6, 5,7,8);
console.log(resultado);

console.log(typeof suma);


//expressions-> expresiones.
/** evalua el valor en lineas de codigo.
 * devuelve valores
 */

//declaration->declaracion, de forma oral.
/**let, const y var no es de declracion
 * function*
 * async function*
 * class
 * export / import
*/
//statement->declaracion, de forma escrita.
/**
 * son como for, if, etc.
 */