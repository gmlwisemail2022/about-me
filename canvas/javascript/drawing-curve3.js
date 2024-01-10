/**********************************************
 * Drawing Ellipse Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 ***********************************************/
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect

class DrawingCurve3 extends PaintFunction {
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

    if (this.origX * 1.5 > canvasDraft.width) {
        var cp1x = this.origX / 1.5;
        var cp1y = this.origY * 1.1;
        var cp2x = this.origX / 1.3;
        var cp2y = this.origX / 1.1;
    } else {
        var cp1x = this.origX * 1.5;
        var cp1y = this.origY /1.1;  
        var cp2x = this.origX * 1.3;
        var cp2y = this.origX * 1.1;
    }
         
    this.contextDraft.strokeStyle = hexB.value;
    this.contextDraft.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, coord[0], coord[1]);
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
    
    // create points from the drawn line
    if (this.origX * 1.5 > canvasDraft.width) {
        var cp1x = this.origX / 1.5;
        var cp1y = this.origY * 1.1;

        var cp2x = this.origX / 1.3;
        var cp2y = this.origX / 1.1;
    } else {
        var cp1x = this.origX * 1.5;
        var cp1y = this.origY /1.1;
        var cp2x = this.origX * 1.3;
        var cp2y = this.origX * 1.1;
}
        
    this.contextReal.strokeStyle = hexB.value;
    this.contextReal.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, coord[0], coord[1]);
    this.contextReal.stroke();
    // Save the drawing into the array for future modification //
    SaveNewImage();
   }

    onMouseLeave() {}
    onMouseEnter() {}
}
  