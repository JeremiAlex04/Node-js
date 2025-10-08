/*
Crea una función descargarArchivo(nombre, callback) 
que simule, mediante setTimeout, la descarga de un 
archivo (por ejemplo, 3 segundos). El callback debe 
mostrar un mensaje confirmando que el archivo se 
descargó correctamente.
*/

function descargarArchivo(nombre, callback) {
    console.log('Descargando '+ nombre +'...')
    setTimeout(()=>{
        console.log(nombre +'\n Se descargo correctamente')
    }, 3000);
}

descargarArchivo('musica.mp3', (desc)=>{desc})





