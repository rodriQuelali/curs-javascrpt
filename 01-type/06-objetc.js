//objetos, tiene propiedades.

let nombre = "Rodrigo";
let anime = "Demon salyer";
let edad = 16;

let personaje = {
    nombre:"Rdorigo",
    anime: "Demon Slayer",
    edad: 16,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

//cambiar el valor.
personaje.edad = 13;
let llave = 'anime';
personaje[llave] = 16;

delete personaje.anime;
console.log(personaje);