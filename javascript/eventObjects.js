function getInput(persona) {
	if (persona.id == 1) {
		document.addEventListener('keydown', function(event){
			let keyPress = String.fromCharCode(event.keyCode)

			if (keyPress == "D") {
				persona.moveState = 1
			}

			if (keyPress == "A") {
				persona.moveState = -1
			}
		})
		document.addEventListener('keyup', function(event){
			let keyPress = String.fromCharCode(event.keyCode)

			persona.moveState = 0
		})
		return true
	}

	if (persona.id == 2) {
		document.addEventListener('keydown', function(event){
			let keyPress = event.keyCode

			if (keyPress == "39") {
				persona.moveState = 1
			}

			if (keyPress == "37") {
				persona.moveState = -1
			}
		})
		document.addEventListener('keyup', function(event){
			let keyPress = String.fromCharCode(event.keyCode)

			persona.moveState = 0
		})
		return true
	}
}