/*
Crea una función ordenarNombres(nombres, callback) 
que reciba un arreglo de nombres desordenados. La función 
debe ordenar alfabéticamente el arreglo y luego pasar el 
resultado al callback.

.sort() ==> Ordernar de forma alfabetica
*/

function ordenarNombres(nombres, callback) {
    let orden = nombres.sort();
    callback(orden)
}

let players = ['Messi', 'Polo', 'Alvarez', 'Ronaldo'];

console.log('Orden alfabetico')

console.log('Antes: ',players);

ordenarNombres(players, (resultdo)=> {
    console.log('Despues: ',resultdo);
});



