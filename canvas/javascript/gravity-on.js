function GravityOn() {   
    console.log('gravity on button clicked!');
    console.log (savedCoord,typeof(savedCoord));
/* temp data
    for (var i=0;i<savedImages.length;i++) {
        GravityOn();
      }
*/

for (var i=0;i<savedImages.length;i++) {
     requestAnimationFrame(mainLoop);

    const gravity = {x: 0, y: 0.1};
    const ground = canvasReal.height;  // ground at bottom of canvas.
    const bounce = 0.6; // very bouncy - 1 not bouncy - 0
    var object = {
        pos: {x: savedCoord[i].pos[0] / 2, y: savedCoord[i].pos[1]}, // position halfway on canvas
        vel: {x: 0, y: 0}, // velocity
        size: {w: savedCoord[i].endPos[0] - savedCoord[i].pos[0], h: savedCoord[i].endPos[1] - savedCoord[i].pos[1]},
        update() {
            this.vel.x += gravity.x;
            this.vel.y += gravity.y;
            this.pos.x += this.vel.x;
            this.pos.y += this.vel.y;
            const g = ground - this.size.h; // adjust for size
            if(this.pos.y >= g) {
                this.pos.y = g - (this.pos.y - g); // 
                this.vel.y = -Math.abs(this.vel.y) * bounce;  
                if (this.vel.y >= -gravity.y) {  // check for rest.
                    this.vel.y = 0;
                    this.pos.y = g - gravity.y;
                    // cancelAnimationFrame(mainLoop);
                }
            }
        },
        draw() { contextReal.fillRect(this.pos.x, this.pos.y, this.size.w, this.size.h) },
        //reset() { this.pos.y = this.vel.y = this.vel.x = 0 },
    }
    requestAnimationFrame(mainLoop);
    function mainLoop() {
        contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
        object.update(); // move object
        object.draw();
        requestAnimationFrame(mainLoop);
    }
}
}
    // canvasReal.addEventListener("click", object.reset.bind(object));
