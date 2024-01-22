let user ={
    id: 1,
    name: "Rodrigo Hack",
    age: 25
}

for(let propiedad in user){
    console.log(propiedad, user[propiedad]);
}

//utilizar for in en objetos y no for of, solo es para array.