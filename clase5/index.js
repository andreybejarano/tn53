/**
 * 
 * @param {number} numero1 
 * @param {number} numero2 
 * @returns {number} returorna la suma de numero1 y numero2
 */
function sumar(numero1, numero2) {
    if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
        return 'Los parametros deben ser números';
    }
    return numero1 + numero2;
}

/**
 * 
 * @param {string} nombre En caso que no se pase el nombre el valor por defecto va a ser Pepito.
 * @param {string} apellido En caso que no se pase el apellido el valor por defecto va a ser Perez.
 * @returns {string} Retorna el saludo a la persona.
 */
function saludar(nombre = "Pepito", apellido="Perez") {
    return "Hola " + nombre + " " + apellido;
}

const resultadoSumar = sumar(1, 2);
const resultadoSaludar = saludar("Juan", "Alvarez");

console.log(resultadoSumar);
console.log(resultadoSaludar)
