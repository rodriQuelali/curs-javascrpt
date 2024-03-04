//atajos de construcctores.

let obj = {};
let obj2 = new Object();

/**
 * new Array(); []
 * new String(); "" '' ``
 * new number(); 12
 * new Boolean(); true false
 */

function Usuario() {
    this.name = "Alan brito";
}

let user = new Usuario();
console.log(user.construvtor);

const s1 = "1+1";
const s2 = new String("1+1");
console.log(s2.valueOf());