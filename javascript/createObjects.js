function createCanvas(canvasWidth, canvasHeight){

	const canvas = document.getElementById('canvas');

	canvas.width = canvasWidth;
	canvas.height = canvasHeight;

	const context = canvas.getContext("2d");

	return {canvas, context}
}

function createCharacter(width, height, cols, rows, state, frames, currentFrame, imgRunSrc, speed, x, y, srcX, srcY){
	
	//decorator implementation (doesn't work yet)
	withImageRun = function(imgSrc) {
		this.characterRun = new Image()
		this.characterRun.src = imgSrc
		return this
	}

	withImageDimensions = function(imgWidth, imgHeight) {
		this.imgWidth = imgWidth
		this.imgHeight = imgHeight
		return this
	}

	withSpriteDimensions = function(imgWidth, imgHeight, rows, cols){
		this.spriteWidth = imgWidth/cols
		this.spriteHeight = imgHeight/rows
		return this
	}

	withMoveState = function(moveState){
		this.moveState = moveState
		return this
	}

	withFrame = function(frameCount){
		this.frameCount = frameCount
		this.currentFrame = currentFrame
		return this
	}

	withCoordinates = function(x, y, srcX, srcY){
		this.x = x
		this.y = y
		this.srcX = srcX
		this.srcY = srcY
		return this
	}
	
	withSpeed = function(speed){
		this.speed = speed
	}

	const characterRun = new Image()
	characterRun.src = imgRunSrc

	const imgWidth = width
	const imgHeight = height

	const spriteWidth = imgWidth/cols
	const spriteHeight = imgHeight/rows

	const moveState = state

	const frameCount = frames

	return {
		characterRun,
		imgWidth, 
		imgHeight, 
		moveState, 
		spriteWidth,
		spriteHeight,
		currentFrame,
		frameCount,

		speed,
		x,y,srcX,srcY
	}
}