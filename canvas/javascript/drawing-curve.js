/**********************************************
 * Drawing Curve Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 ***********************************************/
class DrawingCurve extends PaintFunction {
    // This class extends the PaintFunction class
    // You are only passing one instance here
  
    constructor(contextReal) {
      super();
      this.context = contextReal;
    }
  
    // On mouse down, ensure that the pen has these features
    onMouseDown(coord, event) {
        this.origX = coord[0];
        this.origY = coord[1];
      // if creating new shapes after undo, need to save old canvas first because old canvas already popped out!
      SaveOldImage();
      // Stroke color
      this.context.strokeStyle = hex.value;
      // Kind of line
      this.context.lineJoin = "round";
      // Width of line
      this.context.lineWidth = width.value;
      // Drawing the line here
      this.context.beginPath();
      this.context.moveTo(coord[0], coord[1]);
    }

    // Clicking and removing your mouse
    onDragging(coord, event) {

      this.context.beginPath();
      this.context.moveTo(coord[0], coord[1]);


      var points = [{x:this.origX,y:this.origY},{x:coord[0]/6,y:coord[1]/6},{x:coord[0]/3,y:coord[1]/3},
      {x:coord[1]/1.5,y:coord[1]/1.5},{x:coord[0],y:coord[1]}];

      for (var i = 0; i < points.length - 1; i++) {

      var p0 = (i > 0) ? points[i - 1] : points[0];
      var p1 = points[i];
      var p2 = points[i + 1];
      var p3 = (i != points.length - 2) ? points[i + 2] : p2;

      var cp1x = p1.x + (p2.x - p0.x) / 6;
      var cp1y = p1.y + (p2.y - p0.y) / 6;

      var cp2x = p2.x - (p3.x - p1.x) / 6;
      var cp2y = p2.y - (p3.y - p1.y) / 6;
      this.context.strokeStyle = hexB.value;
      this.context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y);
      }
      this.context.fillStyle = hex.value; 
      this.context.fill();
      this.context.stroke();
  }
  
    onMouseMove() {}
    onMouseUp() {
      // Save the drawing into the array for future modification //
      SaveNewImage();
  
    }
    onMouseLeave() {}
    onMouseEnter() {}
  }
  