/**********************************************
 * Drawing Ellipse Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 ***********************************************/
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect

class DrawingCurve2 extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
    }
  
    onMouseDown(coord, event) {
      this.origX = coord[0];
      this.origY = coord[1];
    }
  
    onDragging(coord, event) {
      // Manipulating the context draft

      // Allows you to actually draw out your squares
      this.contextDraft.clearRect(
        0,
        0,
        canvasDraft.width,
        canvasDraft.height
      );
/*
    // calculate the circle radius based on starting vs current mouse position
        var cradius = Math.abs(coord[0] - this.origX) ;

   // draw a new circle from the start position 
   // to the current mouse position
        this.contextDraft.beginPath();
        this.contextDraft.lineWidth = width.value;
        this.contextDraft.lineJoin = this.contextDraft.lineCap = 'round';
        this.contextDraft.setLineDash([0, 0]);
        this.contextDraft.globalAlpha = 1.0;

        this.contextDraft.strokeStyle = hexB.value;
        this.contextDraft.ellipse(this.origX, this.origY, cradius, cradius * 1.5, Math.PI / 4, 0, 2 * Math.PI);
        //this.contextDraft.arc(this.origX, this.origY, cradius, 0, 2 * Math.PI, false);

        this.contextDraft.fillStyle = hex.value;
        this.contextDraft.fill();
        this.contextDraft.stroke();

   // draw an arc from the start position 
   this.contextDraft.beginPath();
   this.contextDraft.lineWidth = width.value;
   this.contextDraft.lineJoin = this.contextDraft.lineCap = 'round';
   this.contextDraft.strokeStyle = hexB.value;
*/
    this.contextDraft.beginPath();
    this.contextDraft.lineWidth = width.value;
    this.contextDraft.lineJoin = this.contextDraft.lineCap = 'round';
   // this.contextDraft.moveTo(coord[0], coord[1]);
    
    // create points from the drawn line

    diffX = coord[0] - this.origX;
    diffY = coord[1] - this.origY;

    var points = [{x:this.origX + (diffX/6),y:this.origY + (diffY/6)},
                  {x:coord[0]/2,y:coord[1]/2},
                  {x:this.origX - (diffX/1.5),y:this.origY - (diffY/1.5)},
                  {x:coord[0],y:coord[1]}]

    for (var i = 0; i < points.length - 1; i++) {

            var p0 = (i > 0) ? points[i - 1] : points[0];
            var p1 = points[i];
            var p2 = points[i + 1];
            var p3 = (i != points.length - 2) ? points[i + 2] : p2;
    
            var cp1x = p1.x + (p2.x - p0.x) / 6 * 0.7;
            var cp1y = p1.y + (p2.y - p0.y) / 6* 0.7;
    
            var cp2x = p2.x - (p3.x - p1.x) / 6* 0.7;
            var cp2y = p2.y - (p3.y - p1.y) / 6* 0.7;
        this.contextDraft.strokeStyle = hexB.value;
        this.contextDraft.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y);
    }

        this.contextDraft.stroke();
    }


    onMouseMove() {}

    // Committing the element to the canvas

    onMouseUp(coord) {
      // Clearing the rectangle first
      this.contextDraft.clearRect(
        0,
        0,
        canvasDraft.width,
        canvasDraft.height
      );
      
      // if creating new shapes after undo, need to save old canvas first because old canvas already popped out! 
      SaveOldImage();

       // Commit that drawing to context real
       // Without this commit, it won't actually draw
       // draw a new rect from the start position to the current mouse position
        this.contextReal.beginPath();
        this.contextReal.lineWidth = width.value;
        this.contextReal.lineJoin = this.contextDraft.lineCap = 'round';


//this.contextReal.moveTo(coord[0], coord[1]);
    
// create points from the drawn line
var points = [{x:this.origX + (diffX/6),y:this.origY + (diffY/6)},
              {x:coord[0]/2,y:coord[1]/2},
              {x:this.origX - (diffX/1.5),y:this.origY - (diffY/1.5)},
              {x:coord[0],y:coord[1]}]

for (var i = 0; i < points.length - 1; i++) {

        var p0 = (i > 0) ? points[i - 1] : points[0];
        var p1 = points[i];
        var p2 = points[i + 1];
        var p3 = (i != points.length - 2) ? points[i + 2] : p2;

        var cp1x = p1.x + (p2.x - p0.x) / 6;
        var cp1y = p1.y + (p2.y - p0.y) / 6;

        var cp2x = p2.x - (p3.x - p1.x) / 6;
        var cp2y = p2.y - (p3.y - p1.y) / 6;
    this.contextReal.strokeStyle = hexB.value;
    this.contextReal.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y);
    }
    this.contextReal.stroke();

      // Save the drawing into the array for future modification //
      SaveNewImage();
   }

    onMouseLeave() {}
    onMouseEnter() {}
}
  

/* different tries:
1. note curve style:
    var points = [{x:this.origX,y:this.origY},{x:(coord[0] - this.origX)/6,y:(coord[1] - this.origY)/6},{x:coord[0]/3,y:coord[1]/3},
              {x:coord[1]/1.5,y:coord[1]/1.5},{x:coord[0],y:coord[1]}];
2. did not work
    var points = [{x:this.origX,y:this.origY},
                  {x:(this.origX + (diffX/6)),y:(this.origY + (diffY/6))},
             //     {x:(this.origX + (diffX/3)),y:(this.origY + (diffY/3))},
                  {x:(this.origX + (diffX/1.5)),y:(this.origY + (diffY/1.5))},
                  {x:coord[0],y:coord[1]}];
3. 3D flip random curve line
    var points = [{x:this.origX + (diffX/6),y:this.origY + (diffY/6)},
                  {x:coord[0]/2,y:coord[1]/2},
                  {x:this.origX - (diffX/1.5),y:this.origY - (diffY/1.5)},
                  {x:coord[0],y:coord[1]}]
                  */