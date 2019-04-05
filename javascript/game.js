const canvas = createCanvas(1200, 600);

let personas = []

personas[0] = createCharacter(864, 280, 8, 2, 0, 8, 0,"images/personaRun.png", 20, 0, 0, 0, 0)

loop(canvas.context, personas[0])