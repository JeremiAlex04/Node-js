function sumaAsincrona(a,b, callback) {
    setTimeout(()=> {
        const resultado = a + b;
        callback(resultado);
    }, 2000);
}

sumaAsincrona(3,4, (result) => {
    console.log(`El resultado de la suma es: ${result}`);
});


