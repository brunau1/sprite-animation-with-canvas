const UpdateFrequency = 65 //seconds
let endGame = false
const canvasWidth = 1200
const canvasHeight = 600

function updateRun(context, persona) {
	context.clearRect(persona.x, persona.y, persona.spriteWidth, persona.spriteHeight)

	if (persona.moveState == 1) {//right
		persona.currentFrame = ++persona.currentFrame % persona.frameCount;
		persona.x += persona.speed
		verifyCanvasRanges(persona)
		console.log("X: " + persona.x)
		persona.srcX = persona.currentFrame * persona.spriteWidth;
		persona.srcY = persona.spriteHeight * 0
	}
	else if (persona.moveState == -1) {//left
		if (persona.currentFrame >= 1) {
			persona.currentFrame = --persona.currentFrame
		}
		else {
			persona.currentFrame = 7
		}
		persona.x -= persona.speed
		verifyCanvasRanges(persona)
		console.log("X: " + persona.x)
		persona.srcX = persona.currentFrame * persona.spriteWidth
		persona.srcY = persona.spriteHeight * 1
	}
	else if (persona.moveState == 0) {//stopped
		//persona.currentFrame = 0
		persona.srcX = persona.currentFrame * persona.spriteWidth
	}
	context.drawImage(persona.characterRun, persona.srcX, persona.srcY, persona.spriteWidth,
		persona.spriteHeight, persona.x, persona.y, persona.spriteWidth, persona.spriteHeight);
}

/*function updateBackground(context, background) {
	context.drawImage(background.backImg, 0, 0)
}*/

function verifyCanvasRanges(persona) {
	if (persona.x >= canvasWidth - persona.spriteWidth) {
		persona.x = canvasWidth - persona.spriteWidth
		console.log("X: " + persona.x)
	}
	else if (persona.x <= 0) {
		persona.x = 0
		console.log("X: " + persona.x)
	}
	if (persona.y >= canvasHeight - persona.spriteHeight) {
		persona.y = canvasHeight - persona.spriteHeight
	}
	else if (persona.y <= 0) {
		persona.y = 0
	}
}

function render(context, persona, background) {
	console.log("render")
	updateRun(context, persona)
	//updateBackground(context, background)
}

function loop(context, persona, background) {
	if (endGame === false) {
		setInterval(function () {
			getInput(persona)
			render(context, persona, background)
		}, UpdateFrequency)
	}
	else {
		context.fillText("End Game", 50, 50);
	}
}