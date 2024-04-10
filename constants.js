
const xsize = 541;
const ysize = 1001;

const xBallStart = xsize / 2 - 2; // centre vertical for tree

const cupXCoords = [37, 98, 159, 220, 281, 342, 403, 464, 525];

const radius = 16;
const ball_sprite_radius = 22;
const collision_radius = 16;


const collisionDiameterSquared = 16 * 16;
const cos45 = 0.707;

const startY = -10;

const wallXSize = 2;

const randomsDirectionsPerBall = 10;

const fontStyle = new PIXI.TextStyle({
    fontFamily: 'Arial',
    align: "center",
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#000000'], 
});
