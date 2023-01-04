//calcular el nuevo sueldo a un trabajador
let nombre = "Victor";
let apellido = "Fuentes";
let sueldoActual = 170000;
let porcentajeAumento = 25;
let calculoAumento = (sueldoActual * porcentajeAumento)/100;
let nuevoSueldo = sueldoActual + calculoAumento;
console.log('Hola, estimad@ ' + nombre + ' '+ apellido);
console.log('En base a su sueldo actual: ' + '$'+sueldoActual)
console.log('Ha recibido un aumento del ' + porcentajeAumento + '%'); 
console.log('y su nuevo sueldo es de: ' + '$'+nuevoSueldo);
