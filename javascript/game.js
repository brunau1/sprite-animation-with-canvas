const canvas = createCanvas(1200, 600);
//const background = createBackground().withImg("images/background/background.png")

const personas = []

personas[0] = createCharacter()
                .withImageDimensions(864, 280)
                .withSpriteDimensions(864, 280, 2, 8)
                .withMoveState(0)
                .withFrame(8, 0)
                .withImageRun("images/personas/personaRun.png")
                .withSpeed(20)
                .withCoordinates(0, 450, 0, 0)


loop(canvas.context, personas[0] /*background*/)


/**
 *  Game structure
 */

initializeGameComponents(canvas, personas)

function initializeGameComponents(canvas, personas){
    
}

function loopGame(){

}