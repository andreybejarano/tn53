Algoritmo sin_titulo
	Escribir 'Indique su nombre'
	Leer nombre
	Escribir 'Indique su apellido'
	Leer apellido
	Escribir 'Indique su sueldo actual'
	Leer sueldo
	Si sueldo<33000 Entonces
		porcentaje <- 20
	SiNo
		porcentaje <- 15
	FinSi
	nuevoSueldo <- (sueldo*porcentaje/100)+sueldo
	Escribir 'Estimad@ trabajador '
	Escribir nombre+' '+apellido
	Escribir 'En base a su sueldo actual'
	Escribir sueldo
	Escribir 'Se le ha otorgado un porcentaje de aumento del '
	Escribir porcentaje
	Escribir 'Su nuevo sueldo es de'
	Escribir nuevoSueldo
FinAlgoritmo
