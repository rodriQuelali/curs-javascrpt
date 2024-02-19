//no podemos cambiar el user.
const user ={ id: 1};

user.name = 'Rodri';
user.guardar = function () {
    console.log('Guando', user.name);
};

//podemos eliminar las atributs en el objeto
//delete user.name;

user.guardar();

//que no se puede modificar las propiedades del objeto.
const user1 = Object.freeze({id: 1});
//se puede modifcar las propiedades existentes
const user2 = Object.seal({id: 1});