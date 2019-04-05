function getInput(persona) {
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
}