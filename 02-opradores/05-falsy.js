//short-circuit


//Falso
// false
// 0 
// ''
// null
// undefaned
// NaN

//--> todo se llama falsy

let nombre = 'Rodrigo Q';
let username = nombre || 'Anonimo';
console.log(username);

//operador &&
function fn1(){
    console.log('soy funcion 1');
    return false;
}

function fn2(){
    console.log('soy funcion 2');
    return true;
}
let x = fn1() && fn2();
console.log(x);