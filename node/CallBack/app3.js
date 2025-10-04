function multiplicacion(a,b, hola) {
    const resultado = a * b;
    hola(resultado);
}


multiplicacion(2,3, (multi)=> {
    console.log('La multiplicacion es: ',multi);
})

