//Width and height for our canvas

var createCanvas = (canvasWidth, canvasHeight) => {

	const canvas = document.getElementById('canvas');

	canvas.width = canvasWidth;
	canvas.height = canvasHeight;

	const ctx = canvas.getContext("2d");
}

var createCharacter = (width, heigth, cols, rows, state, frames, imgSrc, right, left, speed, x, y, srcX, srcY) => {

	//cria a imagem que será o objeto do sprite
	const character = new Image(); 
	character.src = imgSrc;

	//tamanho total da imagem do sprite
	const imgWidth = width
	const imgHeight = height

 	//quantidade de linhas e colunas do sprite
 	const spriteRows = cols; 
 	const spriteCols = rows; 

 	const moveState = state //trackLeft = 1 ou trakRight = 0
 	const moveDirection = []
 	moveDirection['right'] = right
 	moveDirection['left'] = left

 	//para pegar o tamanho de um unico sprite basta dividir a largura (width) total 
 	//pela quantidade de colunas (cols) e a altura (height) pela quantidade de linhas (rows)
 	const spriteWidth = imgWidth/cols  
 	const spriteHeight = imgHeight/rows 

 	//quantidade de frames que o sprite possui
 	const currentFrame = 0 //primeiro frame
 	const frameCount = frames
 	
 	//posição onde o sprite será renderizado
 	//var x=0;
 	//var y=0; 
 	//posição do canvas para um unico sprite
 	//var srcX=0; 
 	//var srcY=0; 

 	//objeto character
 	return {
 		spriteImgWidth, 
 		spriteImgHeight, 
 		spriteRows, 
 		spriteCols,
 		moveState, 
 		moveDirection,
 		spriteWidth,
 		spriteHeight,
 		currentFrame,
 		frameCount,
 		speed,
 		x,y,srcX,srcY
 	}
 }