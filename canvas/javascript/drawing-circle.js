/**********************************************
 * Drawing Circle Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 ***********************************************/
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect

class DrawingCircle extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
    }
  
    onMouseDown(coord, event) {
      this.contextReal.fillStyle = "#f44";
      this.origX = coord[0];
      this.origY = coord[1];
    }
  
    onDragging(coord, event) {
      // Manipulating the context draft
      this.contextDraft.fillStyle = "#f44";
      // Allows you to actually draw out your squares
      this.contextDraft.clearRect(
        0,
        0,
        canvasDraft.width,
        canvasDraft.height
      );

    // calculate the circle radius based on starting vs current mouse position
        var cradius = Math.abs(coord[0] - this.origX) ;

   // draw a new rect from the start position 
   // to the current mouse position
        this.contextDraft.beginPath();
        this.contextDraft.lineWidth = 3;
        this.contextDraft.lineJoin = this.contextDraft.lineCap = 'round';
        this.contextDraft.setLineDash([0, 0]);
        this.contextDraft.globalAlpha = 1.0;

        this.contextDraft.strokeStyle = 'red';
        this.contextDraft.arc(this.origX, this.origY, cradius, 0, 2 * Math.PI, false);

        this.contextDraft.fillStyle = 'rgba(25,50,75,0.5)';
        this.contextDraft.fill();
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
       var cradius = Math.abs(coord[0] - this.origX) ;

       this.contextReal.beginPath();
       this.contextReal.lineWidth = 3;
       this.contextReal.lineJoin = this.contextReal.lineCap = 'round';
       this.contextReal.setLineDash([0, 0]);
       this.contextReal.globalAlpha = 1.0;

       this.contextReal.strokeStyle = 'red';
       this.contextReal.arc(this.origX, this.origY, cradius, 0, 2 * Math.PI, false);

       this.contextReal.fillStyle = 'rgba(25,50,75,0.5)';  /*change later dpending on user input fill color */
       this.contextReal.fill();
       this.contextReal.stroke();

      // Save the drawing into the array for future modification //
      SaveNewImage();
   }



    onMouseLeave() {}
    onMouseEnter() {}
}
  