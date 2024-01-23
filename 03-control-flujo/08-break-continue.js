let i = 0;
while (i<6) {
    i++;
    if (i===2){
        continue;//no imprime el dos
    }
    if (i===4) {
        break; // termina el ciclo
    }
    console.log(i);
}