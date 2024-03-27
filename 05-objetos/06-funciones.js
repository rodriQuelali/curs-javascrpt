function Usuario(nombre) {
    this.nombre = nombre;
}

console.log(Usuario.name);

//las funciones en javascript tambien son consideradas 
//como abjetos

const U = Usuario;
const raul = new U('rodrigo');
console.log(raul);

//funciones con pasao de argumento de funcion
// es como asosiacion en poo
function of(Fn, arg){
    return new Fn(arg);
}

let usuario1 = of(Usuario, 'RODRIGO');
console.log(usuario1);

//funiones pueden ser retornadas
function returned() {
    return function(){
        console.log('hello word');
    }
}

let saludar = returned();
saludar();
