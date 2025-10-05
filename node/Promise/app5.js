/*
Crea una función verificarEdad(edad) que retorne una promesa.
Si la edad es mayor o igual a 18, la promesa se resuelve con 
el mensaje "Eres mayor de edad". Si no, se rechaza con el mensaje 
"Eres menor de edad".
*/

function validaredad(edad) {
    return new Promise((resolve, reject) => {
        if (edad >= 18) {
            resolve("Eres mayor de edad");
        } else {
            reject("Eres menor de edad");
        }
    })
}


validaredad(22)
.then((mensaje)=>{
    console.log(mensaje);
})
.catch((error)=>{
    console.log(error);
})



