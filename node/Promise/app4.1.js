const fs = require("node:fs")

const text = fs.readFileSync("./mensaje.txt", "uft-8")

console.log(text);