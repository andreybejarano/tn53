const fs = require("fs");
// Microdesafio 1
const peliculasFavoritas = require("./peliculas");

for (let i = 0; i < peliculasFavoritas.length; i++) {
    console.log("");
    console.log("Pelicula en la posición " + i + ":")
    console.log(peliculasFavoritas[i]);
    console.log("");
}

// Microdesafio 2
const rutaArchivo = "./mensaje.txt";
const textoArchivo = fs.readFileSync(rutaArchivo,"utf-8");

console.log(textoArchivo)