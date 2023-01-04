// Solucion del micro desafio 2 con objetos y arrays

const precioIngredientes = {
    jamon: 30, 
    queso: 25, 
    salsa: 5, 
    mayonesa: 5, 
    mostaza: 5, 
    tomate: 15, 
    lechuga: 10, 
    cebolla: 10
};

const precioTipos = {
    "Carne a la parrilla": 1800,
    "Pollo": 1500,
    "Vegetariana": 1200
};

/**
 * 
 * @param {string} tipo 
 * @param {[string]} ingredientes
 * @returns {number} Total a pagar
 */
function totalAPagar(tipo, ingredientes = []) {
    let total = 0;
    if (precioTipos[tipo]) {
        total += precioTipos[tipo];
    }
    ingredientes.forEach(ingrediente => {
        if (precioIngredientes[ingrediente]) {
            total += precioIngredientes[ingrediente];
        }
    });
    return total;
}

console.log(totalAPagar('Carne a la parrilla', ['jamon', 'queso']));