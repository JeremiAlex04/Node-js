const fs = require("node:fs");

fs.readFile("./mensaje.txt", "utf8", (error, text) => {
    if (error) {
        console.error("Error leyendo primer archivo:", error.message);
        return;
    }
    console.log("Primer texto", text);
});

console.log("--> Hacer cosas mientras lee un archivo...");

console.log("Leyendo un segundo archivo");

fs.readFile("./archivo.txt", "utf8", (error, text) => {
    if (error) {
        console.error("Error leyendo segundo archivo:", error.message);
        return;
    }
    console.log("Segundo texto: ", text);
});