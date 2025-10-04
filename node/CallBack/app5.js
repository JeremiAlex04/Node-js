/*
Crea una función llamada filtrarPares que reciba un arreglo de números 
y un callback. El callback debe recibir el nuevo arreglo solo con los 
números pares.
*/


function filtrarPares(nros, callback) {
   const resultado = nros.filter(numeros => numeros % 2 == 0);
    callback(resultado);
}

const numeros = [1,2,3,4,5];

filtrarPares(numeros, (respuesta)=> {
    console.log("Los pares son: ", respuesta)
})


