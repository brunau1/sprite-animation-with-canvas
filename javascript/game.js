const canvas = createCanvas(1200, 720);

let personas = []

personas[0] = createCharacter(864, 280, 8, 2, 0, 8, 0,"images/persona.png", 20, 0, 0, 0, 0)

render(canvas.context, personas[0])