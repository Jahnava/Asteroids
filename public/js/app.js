const FPS = 30; //frames per second

// @type {HTMLCanvasElement}
var canv = document.getElementById('gameCanvas');
var ctx = canv.getContext('2d');

// set up the game loop
setInterval(update, 1000 / FPS);

 function update() {
   //draw space
   ctx.fillStyle = "black";
   ctx.fillRect(0, 0, canv.width, canv.height);
   //draw ship

   //rotate ship

   //move the ship
 }
