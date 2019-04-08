function initializeGameComponents(personas){
	personas[0] = createCharacter()
	.withImageDimensions(864, 280)
	.withSpriteDimensions(864, 280, 2, 8)
	.withMoveState(0)
	.withFrame(8, 0)
	.withImageRun("images/personas/personaRun1.png")
	.withSpeed(20)
	.withCoordinates(0, 450, 0, 0)
	.withId(1)

	personas[1] = createCharacter()
	.withImageDimensions(864, 280)
	.withSpriteDimensions(864, 280, 2, 8)
	.withMoveState(0)
	.withFrame(8, 0)
	.withImageRun("images/personas/personaRun2.png")
	.withSpeed(20)
	.withCoordinates(1000, 450, 0, 0)
	.withId(2)
}

function loopGame(context, persona1, persona2){
	loop(context, persona1, persona2)
}

const canvas = createCanvas(1200, 600);

let personas = []

initializeGameComponents(personas)

loopGame(canvas.context, personas[0], personas[1])