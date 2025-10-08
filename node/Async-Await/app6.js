/*
Crea una función asíncrona que espere 2 segundos 
antes de devolver un mensaje como "Tiempo completado".
Usa setTimeout dentro de una promesa.
*/

function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function retraso() {
  await esperar(2000);
  return "Tiempo completado";
}

// Uso
retraso().then(console.log);


/*
 -- Otra forma --
 const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Tiempo completado')
        reject(new Error('Operacion invalida'))
    }, 2000)
})

async function ejercutar() {
    const promise = await prom
        .then((mensaje) => {
            console.log(mensaje)
        })
        .catch((error) =>
            console.log(error)
        )
}

ejercutar();

*/
