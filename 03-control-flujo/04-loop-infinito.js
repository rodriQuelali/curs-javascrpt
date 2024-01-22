//cuando el ciclo es infinito, el incremento no se da en i++
let i = 0;
while (i < 10) {
        console.log(i);
    //i++;
}

let j = 2;
while (j < 2) {
    if(j % 2 === 0){
        console.log(j);
    }   
    j++;
}

do {
    if(j % 2 === 0){
        console.log(j);
    }   
    j++;
}while(j<10);