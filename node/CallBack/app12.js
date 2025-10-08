/*
Crea una función contarPalabras(frase, callback) 
que cuente cuántas palabras tiene una cadena de texto.
El callback debe recibir el número total de palabras encontradas.
*/

function contarPalabras(frase, callback) {
    const palabras = frase.trim().split(/\s+/); //Divide por espacios multiples
    const cantidad = palabras.length;
    callback(cantidad)
}

const txt = 'Hola Mundo';

contarPalabras(txt, (contar)=>{
    console.log('Nro de la palabras: '+contar);
})



