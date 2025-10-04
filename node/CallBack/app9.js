/*
Crea una función verificarConexion(url, callback) 
que simule, mediante setTimeout, una verificación 
de conexión a una URL. Si la conexión es “exitosa”, 
el callback devuelve un mensaje afirmativo; si falla, d
evuelve un error.

url: localhost/3603
*/


function verificarConexion(url, callback){
    let comprobar = '';

    if(url == 'localhost/3603'){
        comprobar = 'Afirmativo';
    } else {
        comprobar = 'Denegado';
    }

    callback(comprobar);
}

verificarConexion('localhost/3603', (test)=>{
    console.log('Estado: ', test);
})



