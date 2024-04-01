const punto = {
    x: 10,
    y:15,
    dibujar(){
        console.log('dibujar');
    }
}

//delete punto.dibujar;
if('dibujar' in punto){
    punto.dibujar();
}

//console.log(Object.keys(punto));
for(let llave of Object.keys(punto)){
    console.log(llave, punto[llave]);
}

//lista por array ---- entries
for(let entry of Object.entries(punto)){
    console.log(entry);
}

//codigo actual para acceder a sus propiedades
for (const llave in punto ) {
    console.log(llave, punto[llave]);    
}
