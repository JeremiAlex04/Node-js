/*

function filtrarPares(array, callback) {
    const pares = array.filter(numero => numero % 2 === 0);
    callback(pares);
}

const numeros = [1,2,3,4,5,6];

filtrarPares(numeros, (par)=> {
    console.log('Numeros pares: ', par);
})



*/



function filtraImpares(array, callback) {
    const impares = array.filter(nro => nro % 2 !== 0);
    callback(impares);
}

const nros = [1,2,3,4,5];
filtraImpares(nros, (par)=> {
    console.log('Los numeros impares son: ',par);
})



