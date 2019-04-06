const canvas = createCanvas(1200, 600);

const personas = []

personas[0] = createCharacter()
                .withImageDimensions(864, 280)
                .withSpriteDimensions(864, 280, 2, 8)
                .withMoveState(0)
                .withFrame(8, 0)
                .withImageRun("images/personaRun.png")
                .withSpeed(20)
                .withCoordinates(0, 0, 0, 0)


loop(canvas.context, personas[0])


/**
 *  Game structure
 */

initializeGameComponents()

setTimeout( () => {
    loopGame()
}, 100 )

function initializeGameComponents(){
    
}

function loopGame(){

}