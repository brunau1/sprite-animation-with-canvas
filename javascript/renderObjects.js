function run(context, persona){
	if (persona.moveState == 1) {//right
		console.log("Frame: ",persona.currentFrame)
		persona.currentFrame = ++persona.currentFrame % persona.frameCount;
		persona.srcX = persona.currentFrame * persona.spriteWidth; 
		persona.srcY = persona.spriteHeight * 0
	}
	else if (persona.moveState == -1){//left
		console.log("Frame: ",persona.currentFrame)
		if (persona.currentFrame >= 1) {
			persona.currentFrame = --persona.currentFrame
		}
		else{
			persona.currentFrame = 7
		}
		persona.srcX = persona.currentFrame * persona.spriteWidth
		persona.srcY = persona.spriteHeight * 1
	}
	else if(persona.moveState == 0){
		persona.currentFrame = 0
		persona.srcX = persona.currentFrame * persona.spriteWidth
	}
	context.clearRect(persona.x, persona.y, persona.spriteWidth, persona.spriteHeight)
}

function draw(context, persona){
	getInput(persona)
	run(context, persona)
	context.drawImage(persona.character, persona.srcX, persona.srcY, persona.spriteWidth, 
		persona.spriteHeight, persona.x, persona.y, persona.spriteWidth, persona.spriteHeight);
}

function render(context, persona){
	setInterval(function(){
		draw(context, persona)
	}, 100)
}