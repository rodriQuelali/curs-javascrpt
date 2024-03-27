function Punto(x, y) {
    this.x = x;
    this.y=y;
    this.dibujar = function (params) {
        console.log('dibujar ......');
    }
}

//para poder extender objetos.
let punto = {z: 7};
//apply-- pasa array.
Punto.apply(punto, [1, 5]);
//Punto.call(punto, 1, 3);

console.log(punto);

//otra forma de crear funcion, no se necesita.
// const Point = Function('x', 'y', `
// this.x = x;
// this.y=y;
// this.dibujar = function (params) {
//     console.log('dibujar ......');
// }`);

// const p = new Point(1,2);
// console.log(p);