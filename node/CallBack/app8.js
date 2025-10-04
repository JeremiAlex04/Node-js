/*
Crea tres funciones:
- sumar(a, b, callback)
- multiplicar(n, callback)
- mostrarResultado(resultado)
Usa callbacks para que, una vez sumados los números, 
el resultado se multiplique por 2 y finalmente se muestre.
*/

function sumar(a,b,callback) {
    const suma = a + b;
    callback(suma);
}

function multiplicar(n, callback) {
    const mult = n * 2;
    callback(mult)
}

function mostrarResultado() {
    sumar(2,3, (sum)=>{
        multiplicar(sum, (multi)=>{
            console.log('El resultado es: ',multi);
        })
    })
}

mostrarResultado();



