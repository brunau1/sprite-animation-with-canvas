const UpdateFrequency = 70 //seconds

function updateRun(context, persona){
	context.clearRect(persona.x, persona.y, persona.spriteWidth, persona.spriteHeight)

	if (persona.moveState == 1) {//right
		persona.currentFrame = ++persona.currentFrame % persona.frameCount;
		persona.x += persona.speed
		persona.srcX = persona.currentFrame * persona.spriteWidth; 
		persona.srcY = persona.spriteHeight * 0
	}
	else if (persona.moveState == -1){//left
		if (persona.currentFrame >= 1) {
			persona.currentFrame = --persona.currentFrame
		}
		else{
			persona.currentFrame = 7
		}
		persona.x -= persona.speed
		persona.srcX = persona.currentFrame * persona.spriteWidth
		persona.srcY = persona.spriteHeight * 1
	}
	else if(persona.moveState == 0){//stopped
		//persona.currentFrame = 0
		persona.srcX = persona.currentFrame * persona.spriteWidth
	}
}

function render(context, persona){
	console.log("render")
	updateRun(context, persona)
	context.drawImage(persona.characterRun, persona.srcX, persona.srcY, persona.spriteWidth, 
		persona.spriteHeight, persona.x, persona.y, persona.spriteWidth, persona.spriteHeight);
}

function loop(context, persona){
	setInterval(function(){
		getInput(persona)
		render(context, persona)
	}, UpdateFrequency)
}