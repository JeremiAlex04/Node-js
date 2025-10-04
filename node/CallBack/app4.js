function agregar(numeros, nuevo, callback) {
    numeros.push(nuevo);
    callback(numeros);
}
const nro = [1,23,445,223,2]

agregar(nro, 19, (resultado) => {
    console.log('El arreglo es: ', resultado);
})




