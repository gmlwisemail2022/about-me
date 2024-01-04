/**********************************************
 * Drawing Triangle Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 ***********************************************/
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect

class DrawingTriangle extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
    }
  
    onMouseDown(coord, event) {
      this.contextDraft.fillStyle = hex.value;
      this.origX = coord[0];
      this.origY = coord[1];
    }
  
    onDragging(coord, event) {
      // Manipulating the context draft
      this.contextDraft.fillStyle = hex.value;
      // Allows you to actually draw out your squares
      this.contextDraft.clearRect(
        0,
        0,
        canvasDraft.width,
        canvasDraft.height
      );

    // calculate the triangle width/height based on starting vs current mouse position
        var twidth = Math.abs(coord[0] - this.origX) ;
        var theight = Math.abs(coord[1] - this.origY) ;

   // draw a new rect from the start position to the current mouse position

        this.contextDraft.lineWidth = width.value;
        this.contextDraft.strokeStyle = hexB.value;
        this.contextDraft.fillStyle = hex.value;

        if ( coord[0] >= this.origX) {
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX, this.origY );
            this.contextDraft.lineTo(coord[0], coord[1]);
            //this.contextDraft.moveTo(coord[0]-(2*twidth), coord[1] );
            this.contextDraft.lineTo(coord[0], coord[1]);
            //this.contextDraft.moveTo(this.origX, this.origY );
            this.contextDraft.lineTo(coord[0]-(2*twidth), coord[1] );
            this.contextDraft.closePath();
        } else {
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX, this.origY  );
            this.contextDraft.lineTo(coord[0], coord[1]);
            //this.contextDraft.moveTo(coord[0]+(2*twidth), coord[1] );
            this.contextDraft.lineTo(coord[0], coord[1]);
            //this.contextDraft.moveTo(this.origX, this.origY  );
            this.contextDraft.lineTo(coord[0]+(2*twidth), coord[1] );
            this.contextDraft.closePath();
        };
        this.contextDraft.stroke();

        this.contextDraft.fill();
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
   
        var twidth = Math.abs(coord[0] - this.origX) ;
        var theight = Math.abs(coord[1] - this.origY) ;

       this.contextReal.lineWidth = width.value;
       this.contextReal.strokeStyle = hexB.value;
       this.contextReal.fillStyle = hex.value;

        if ( coord[0] >= this.origX) {
          this.contextReal.beginPath();
          this.contextReal.moveTo(this.origX, this.origY );
          this.contextReal.lineTo(coord[0], coord[1]);
          //this.contextReal.moveTo(coord[0]-(2*twidth), coord[1] );   commented all moveTo to enable autofill
          this.contextReal.lineTo(coord[0], coord[1]);
         // this.contextReal.moveTo(this.origX, this.origY );
          this.contextReal.lineTo(coord[0]-(2*twidth), coord[1] );
          this.contextReal.closePath();
        } else {
          this.contextReal.beginPath();
          this.contextReal.moveTo(this.origX, this.origY  );
          this.contextReal.lineTo(coord[0], coord[1]);
          //this.contextReal.moveTo(coord[0]+(2*twidth), coord[1] );
          this.contextReal.lineTo(coord[0], coord[1]);
          //this.contextReal.moveTo(this.origX, this.origY  );
          this.contextReal.lineTo(coord[0]+(2*twidth), coord[1] );
          this.contextReal.closePath();
        };

       this.contextReal.stroke();
       this.contextReal.fill();

      // Save the drawing into the array for future modification //
      SaveNewImage();
   }

    onMouseLeave() {}
    onMouseEnter() {}
}
  