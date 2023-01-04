Algoritmo calcular_edad
		Definir edad, diasActual, mesActual, anioActual Como Entero
		Definir diaNacimiento, mesNacimiento, anioNacimiento Como Entero
		Escribir Sin Saltar "INGRESA EL DIA ACTUAL : "
		Leer diasActual
		Escribir Sin Saltar "INGRESA EL MES ACTUAL : "
		Leer mesActual
		Escribir Sin Saltar "INGRESA EL AÑO ACTUAL : "
		Leer anioActual
		Escribir ""
		Escribir Sin Saltar "DIA NACIMIENTO : "
		Leer diaNacimiento
		Escribir Sin Saltar "MES NACIMIENTO : "
		Leer mesNacimiento
		Escribir Sin Saltar "AÑO NACIMIENTO : "
		Leer anioNacimiento
		edad = anioActual - anioNacimiento
		Si (mesNacimiento > mesActual) Entonces
			edad = edad - 1
		SiNo
			Si (mesNacimiento == mesActual) Entonces
				Si (diaNacimiento > diasActual) Entonces
					edad = edad - 1
				FinSi
				Si (diaNacimiento == diasActual) Entonces
					Escribir Felicidades estas cumpliendo años 
				FinSi
			FinSi
		FinSi
		Escribir ""
		Escribir "Tu edad actual es:  «edad»  años"
FinAlgoritmo
