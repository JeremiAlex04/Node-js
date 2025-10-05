const fs = require("node:fs");
const { start } = require("node:repl");

const stats = fs.statSync("./mensaje.txt")

console.log(
    "\n ¿Es un archivo?:",
    stats.isFile(), //Si es archivo
    "\n ¿Es un directorio?",
    stats.isDirectory(), //Si es directorio
    "\n ¿Es un enlace simbolico?",
    stats.isSymbolicLink(), //Si es un enlace simbolico
    "\n Su tamaño es:",
    stats.size /1024 /1024 //tamaño en bytes (MB)  
);










