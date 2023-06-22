/*
 * Escribe un programa que sea capaz de generar contraseñas de forma aleatoria.
 * Podrás configurar generar contraseñas con los siguientes parámetros:
 * - Longitud: Entre 8 y 16.
 * - Con o sin letras mayúsculas.
 * - Con o sin números.
 * - Con o sin símbolos.
 * (Pudiendo combinar todos estos parámetros entre ellos)
 */

function passwordGenerator(caracteres, letra, numero, simbolos) {
	caracteres < 8 ? caracteres = 8 : caracteres
	caracteres > 16 ? caracteres = 16 : caracteres
	let password = ''
	for (let i = 0; i < caracteres; i++) {
		let random = Math.floor(Math.random() * 3)
		if (random == 0 && letra) {
			password += String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1) + 65))
		} else if (random == 1 && numero) {
			password += Math.floor(Math.random() * 10)
		} else if (random == 2 && simbolos) {
			password += String.fromCharCode(Math.floor(Math.random() * (47 - 33 + 1) + 33))
		} else {
			i--
		}
	}
	return password
}

passwordGenerator(1, true, false, true)