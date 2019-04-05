canvasWidth = 650;
canvasHeight = 350;

const canvas = createCanvas(canvasWidth, canvasHeight);

let personas = []

personas[0] = createCharacter(864, 280, 8, 2, 0, 8, 0,"images/persona.png", true, false, 15, 0, 0, 0, 0)

render(canvas.context, personas[0])