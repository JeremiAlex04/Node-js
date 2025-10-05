/*
Crea tres funciones que devuelvan promesas:
- sumar(a, b) → devuelve la suma
- multiplicar(n) → multiplica el número por 2
- mostrar(resultado) → imprime el resultado
Encadena las tres funciones usando .then() y .catch().
*/

function suma(a,b) {
    return new Promise((resolve, reject)=>{
        resolve(a+b);
        reject("Error Suma")
    })
}

function multiplicar(n) {
    return new Promise((resolve, reject)=>{
        let mult = n * 2;

        resolve(mult)
        reject("Error - Multiplicacion")
    })
}

function resultado(r) {
    return new Promise((resolve)=>{
        resolve(r)
    })
}

suma(2,0)
.then((mtp)=>{
    console.log("La suma es: ", mtp)
    multiplicar(mtp)
    .then((rel)=>{
        console.log("La multiplicacion es: ", rel)
        resultado(rel)
        .then((mostrar)=>{
            console.log("El resultado es:", mostrar)
        })
    })
})
.catch((error)=>{
    console.log("Error de la operacion")
})


