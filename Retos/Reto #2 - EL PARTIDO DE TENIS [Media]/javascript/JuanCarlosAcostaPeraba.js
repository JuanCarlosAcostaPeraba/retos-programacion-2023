/*
 * Escribe un programa que muestre cómo transcurre un juego de tenis y quién lo ha ganado.
 * El programa recibirá una secuencia formada por "P1" (Player 1) o "P2" (Player 2), según quien
 * gane cada punto del juego.
 * 
 * - Las puntuaciones de un juego son "Love" (cero), 15, 30, 40, "Deuce" (empate), ventaja.
 * - Ante la secuencia [P1, P1, P2, P2, P1, P2, P1, P1], el programa mostraría lo siguiente:
 *   15 - Love
 *   30 - Love
 *   30 - 15
 *   30 - 30
 *   40 - 30
 *   Deuce
 *   Ventaja P1
 *   Ha ganado el P1
 * - Si quieres, puedes controlar errores en la entrada de datos.   
 * - Consulta las reglas del juego si tienes dudas sobre el sistema de puntos.   
 */

function tenis(secuencia) {
	const puntos = {
		0: 'Love',
		1: '15',
		2: '30',
		3: '40',
		4: 'Ventaja'
	}

	let marcadorP1 = 0
	let marcadorP2 = 0

	for (i in secuencia) {
		if (secuencia[i] === 'P1') marcadorP1++
		else marcadorP2++

		const diferencia = marcadorP1 - marcadorP2

		if (marcadorP1 >= 3 && diferencia === 2) {
			console.log('Ha ganado el P1')
			break
		} else if (marcadorP2 >= 3 && diferencia === -2) {
			console.log('Ha ganado el P2')
			break
		} else if (marcadorP1 == 3 && marcadorP2 == 3) console.log('Deuce')
		else console.log(`${puntos[marcadorP1]} - ${puntos[marcadorP2]}`)
	}
}

tenis(['P1', 'P1', 'P2', 'P2', 'P1', 'P2', 'P1', 'P1'])