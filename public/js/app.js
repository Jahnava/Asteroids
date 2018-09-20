// loads every 30 FPS
const FPS = 30; //frames per second
const FRICTION = 0.7;
const SHIP_SIZE = 30; //ship height set in pixels
const SHIP_THRUST = 5;
const TURN_SPEED = 360; //turn speed in degrees per second

// @type {HTMLCanvasElement}
var canv = document.getElementById('gameCanvas');
var ctx = canv.getContext('2d');

// setting the ship dimentions according to the canvas size
var ship = {
  x: canv.width / 2, //canvas width divided by two
  y: canv.height / 2, //canvas height divided by two
  r: SHIP_SIZE / 2, //radius- ship size divided by two
  a: 90 / 180 * Math.PI, // angle-convert to radians- if i change the number it changes the direction of the ship
  rot: 0, //rotation
  thrusting: false,
  thrust: {
    x: 0,
    y: 0
  }
}

//set up event handlers
document.addEventListener('keydown', keyDown); //event listener with the type keydown and the function called keyDown
document.addEventListener('keyup', keyUp); //event listener keyup with function keyUp

// set up the game loop
setInterval(update, 1000 / FPS);
//setting computer key codes
function keyDown(ev) {
  switch(ev.keyCode) {
    case 37: //left arrow (rotates ship left)
        ship.rot = TURN_SPEED / 180 * Math.PI / FPS; //rotation speed set to frames per second
      break;
    case 38: //up arrow (thrusts ship forward)
        ship.thrusting = true;
      break;
    case 39: //left arrow (rotates ship right)
        ship.rot = -TURN_SPEED / 180 * Math.PI / FPS; //rotation speed set FPS in the negitive
      break;
  }
}

  function keyUp(ev){
    switch(ev.keyCode) {
      case 37: //left arrow (stop ship left rotation)
          ship.rot =  0; //no rotation
        break;
      case 38: //up arrow (stop thrust)
          ship.thrusting = false;
        break;
      case 39: //left arrow (stops ship rotation right)
          ship.rot = -0; //rotation speed set FPS in the negitive
        break;
  }
}

 function update() {
   //canvas draw space
   ctx.fillStyle = 'black'; // canvas background filled in with black
   ctx.fillRect(0, 0, canv.width, canv.height); // set height and width to the canvas height and width
   //draw a triangular ship
   ctx.strokeStyle ='white', //ship color
   ctx.lineWidth = SHIP_SIZE / 20; //ship line width divided by 20
   //starting ship drawing
   ctx.beginPath();
   ctx.moveTo( //nose of the ship- where we start
      ship.x + 4 / 3 * ship.r * Math.cos(ship.a), //x coordinant- center of ship- ship radius x cos(horizontal) of ship angle
      ship.y - 4 / 3 * ship.r * Math.sin(ship.a) //y axis negitive - (up) ship radius times the sin(vertical)
   );
   ctx.lineTo( //rear left draw a line with context stroke(ctx)
      ship.x - ship.r * (2 / 3 * Math.cos(ship.a) + Math.sin(ship.a)),
      ship.y + ship.r * (2 / 3 * Math.sin(ship.a) - Math.cos(ship.a))
   );
   ctx.lineTo( //rear right draw a line with context stroke(ctx)
      ship.x - ship.r * (2/3 * Math.cos(ship.a) - Math.sin(ship.a)),
      ship.y + ship.r * (2/3 * Math.sin(ship.a) + Math.cos(ship.a))
   );
   ctx.closePath();
   ctx.stroke();
     //rotate ship
     ship.a += ship.rot;

   //move the ship

   //center dot in
   ctx.fillStyle = 'red'; //dot color
   ctx.fillRect(ship.x -1, ship.y -1,2, 2); //set location (ship) and demensions on x and y axis

 }
