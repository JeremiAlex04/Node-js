/*
Crea una función asíncrona que haga una petición GET a 
una API pública (por ejemplo, https://jsonplaceholder.typicode.com/users) 
y devuelva el nombre del primer usuario. Usa node-fetch o axios.
*/


const fetch = require('node-fetch');

async function obtenerPrimerUsuario() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const usuarios = await res.json;
        return usuarios[0].name;
    } catch (error) {
        console.log('Error al obtener usuaios: ', error.message);
    }
}

obtenerPrimerUsuario().then(console.log);
