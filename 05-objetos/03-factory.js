// let user = {
//     id: 1,
//     email: 'rodri@rodrigo.io',
//     name: 'Rdorigo',
//     activo: true,
//     recuperarClave: function () {
//         console.log('resuperando clave.....');
//     },
// }

// let user1 = {
//     id: 1,
//     email: 'alan@rodrigo.io',
//     name: 'Alan',
//     activo: false,
//     recuperarClave: function () {
//         console.log('resuperando clave.....');
//     },
// }

function crearUsuario(name, email, ) {
    return {
        id: 1,
        email: email,
        name,
        activo: false,
        recuperarClave: function () {
            console.log('resuperando clave.....');
        },
    }
}

let user1 = crearUsuario('rodrigo', 'rodri@gggr.com');
console.log(user1);