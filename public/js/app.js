// loads every 30 FPS
const FPS = 30; //frames per second
const SHIP_SIZE = 30; //ship height set in pixels

// @type {HTMLCanvasElement}
var canv = document.getElementById('gameCanvas');
var ctx = canv.getContext('2d');

// setting the ship dimentions according to the canvas size
var ship = {
  x: canv.width / 2, //canvas width divided by two
  y: canv.height /2, //canvas height divided by two
  r: SHIP_SIZE /2, //radius- ship size divided by two
  a: 90 / 180 * Math.PI // angle-convert to radians
}

// set up the game loop
setInterval(update, 1000 / FPS);

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
      ship.x + ship.r * Math.cos(ship.a), //x coordinant- center of ship- ship radius x cos(horizontal) of ship angle
      ship.y - ship.r * Math.sin(ship.a) //y axis negitive - (up) ship radius times the sin(vertical)
   );
   ctx.lineTo( //rear left draw a line with context stroke(ctx)
      ship.x - ship.r * (Math.cos(ship.a) + Math.sin(ship.a)),
      ship.y + ship.r * (Math.sin(ship.a) - Math.cos(ship.a))
   );
   ctx.lineTo( //rear right draw a line with context stroke(ctx)
      ship.x - ship.r * (Math.cos(ship.a) - Math.sin(ship.a)),
      ship.y + ship.r * (Math.sin(ship.a) + Math.cos(ship.a))
   );
   ctx.closePath()
   ctx.stroke();
     //rotate ship

   //move the ship
 }
