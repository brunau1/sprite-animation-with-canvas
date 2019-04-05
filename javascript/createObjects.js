function createCanvas(canvasWidth, canvasHeight){

	const canvas = document.getElementById('canvas');

	canvas.width = canvasWidth;
	canvas.height = canvasHeight;

	const context = canvas.getContext("2d");

	return {canvas, context}
}

function createCharacter(width, height, cols, rows, state, frames, currentFrame, imgSrc, speed, x, y, srcX, srcY){
	
	//cria a imagem que será o objeto do sprite
	const character = new Image(); 
	character.src = imgSrc;

	//tamanho total da imagem do sprite
	const imgWidth = width
	const imgHeight = height

	//quantidade de linhas e colunas do sprite
	const spriteRows = cols; 
	const spriteCols = rows; 

	const moveState = state //trackLeft = 1 ou trackRight = 0

	//para pegar o tamanho de um unico sprite basta dividir a largura (width) total 
	//pela quantidade de colunas (cols) e a altura (height) pela quantidade de linhas (rows)
	const spriteWidth = imgWidth/cols  
	const spriteHeight = imgHeight/rows 

	//quantidade de frames que o sprite possui
	const frameCount = frames
	
	//posição onde o sprite será renderizado
	//var x=0;
	//var y=0; 
	//posição do canvas para um unico sprite
	//var srcX=0; 
	//var srcY=0; 

	//objeto character
	return {
		character,
		imgWidth, 
		imgHeight, 
		spriteRows, 
		spriteCols,
		moveState, 
		spriteWidth,
		spriteHeight,
		currentFrame,
		frameCount,
		speed,
		x,y,srcX,srcY
	}
}