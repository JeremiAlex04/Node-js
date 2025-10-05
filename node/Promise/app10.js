/*
Crea una función obtenerUsuario() que simule, con setTimeout, 
la consulta de datos de un usuario desde una base de datos 
(por ejemplo, nombre y edad).Usa async/await para esperar la 
respuesta y luego mostrarla en consola.
*/


function obtenerUsuario() {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve({nombre: "Jeremi", edad: 21});
        }, 2000);
    });
}

async function mostrarUsuario() {
    console.log("Consultado datos del usuario")
    const usuario = await obtenerUsuario();
    console.log("Datos obtenidos: ", usuario);
}

mostrarUsuario();





