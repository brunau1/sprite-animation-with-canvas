function updateFrame(context, persona){
	console.log(persona.currentFrame)
	persona.currentFrame = ++persona.currentFrame % persona.frameCount;
	console.log(persona.currentFrame) 
	persona.srcX = persona.currentFrame * persona.spriteWidth; 

	context.clearRect(persona.x, persona.y, persona.spriteWidth, persona.spriteHeight)
}

function draw(context, persona){

	updateFrame(context, persona);
	context.drawImage(persona.character, persona.srcX, persona.srcY, persona.spriteWidth, 
		persona.spriteHeight, persona.x, persona.y, persona.spriteWidth, persona.spriteHeight);
}

function render(context, persona){
	setInterval(function(){
		draw(context, persona)
	}, 100)
}