/*
Crea una función registrarUsuario(nombre, callback) que simule guardar 
el nombre de un usuario en una base de datos con un setTimeout.
El callback debe recibir un mensaje confirmando el registro.
*/

function registrarUsuario(nombre, callback) {
    console.log('Resgistrando usuario...');
    setTimeout(() => {
        callback(nombre)
    }, 2000);
}

registrarUsuario("Jeremi", (msj)=>{console.log('Bienvenido ', msj)});
