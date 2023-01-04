const porcentajeIva = 21; 
let nombre = 'Andres';
let apellido = 'Alzate';
let edad = 30;
let numeroTelefono = '+54 1112-2222';
let socio = true;
let fechaPartido = '23/11/2022';
let horaPartido = '11:00:00';
let numeroSilla = 'a10';
let precioBoleto = 9000.50;
let preciototal = (precioBoleto * (porcentajeIva / 100 + 1));

// El valor del boleto es: $9000.50, mas el 21% del iva, el total a pagar es {{preciototal}}
console.log('Bienvenido: ' + nombre + ' ' + apellido);
console.log('El valor del boleto es: $' + precioBoleto + ', mas el ' + porcentajeIva + '% del iva, el total a pagar es $' + preciototal);






