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

    // calculate the triangle width/height based on starting vs current mouse position
        var twidth = Math.abs(coord[0] - this.origX) ;
        var theight = Math.abs(coord[1] - this.origY) ;

   // draw a new rect from the start position to the current mouse position
        this.contextDraft.beginPath();
        this.contextDraft.lineWidth = 3;
        this.contextDraft.lineJoin = this.contextDraft.lineCap = 'round';
        this.contextDraft.setLineDash([0, 0]);
        this.contextDraft.globalAlpha = 1.0; 

        /*console.log("thisorigx, thisorigy", this.origX, this.origX);
        console.log("coord[0], coord[1]", coord[0], coord[1]);*/ 
        if ( coord[0] >= this.origX) {
            this.contextDraft.moveTo(this.origX, this.origY );
            this.contextDraft.lineTo(coord[0], coord[1]);
            this.contextDraft.moveTo(coord[0]-(2*twidth), coord[1] );
            this.contextDraft.lineTo(coord[0], coord[1]);
            this.contextDraft.moveTo(this.origX, this.origY );
            this.contextDraft.lineTo(coord[0]-(2*twidth), coord[1] );
        } else {
            this.contextDraft.moveTo(this.origX, this.origY  );
            this.contextDraft.lineTo(coord[0], coord[1]);
            this.contextDraft.moveTo(coord[0]+(2*twidth), coord[1] );
            this.contextDraft.lineTo(coord[0], coord[1]);
            this.contextDraft.moveTo(this.origX, this.origY  );
            this.contextDraft.lineTo(coord[0]+(2*twidth), coord[1] );
        };

        this.contextDraft.closePath();
        this.contextDraft.strokeStyle = 'red';
        this.contextDraft.stroke();
        this.contextDraft.fillStyle = 'rgba(25,50,75,0.5)';
        this.contextDraft.fill();
    }



/* 

      // Pass in the original x and y coordinates, followed by the new coordinates that we get for position x and y
      this.contextDraft.fillRect(
        this.origX,
        this.origY,
        coord[0] - this.origX,
        coord[1] - this.origY
      );
    }
  
    */

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

       this.contextReal.beginPath();
       this.contextReal.lineWidth = 3;
       this.contextReal.lineJoin = this.contextReal.lineCap = 'round';
       this.contextReal.setLineDash([0, 0]);
       this.contextReal.globalAlpha = 1.0; 

       console.log("thisorigx, thisorigy", this.origX, this.origX);
       console.log("coord[0], coord[1]", coord[0], coord[1]);

       if ( coord[0] >= this.origX) {
           this.contextReal.moveTo(this.origX, this.origY );
           this.contextReal.lineTo(coord[0], coord[1]);
           this.contextReal.moveTo(coord[0]-(2*twidth), coord[1] );
           this.contextReal.lineTo(coord[0], coord[1]);
           this.contextReal.moveTo(this.origX, this.origY );
           this.contextReal.lineTo(coord[0]-(2*twidth), coord[1] );
       } else {
           this.contextReal.moveTo(this.origX, this.origY  );
           this.contextReal.lineTo(coord[0], coord[1]);
           this.contextReal.moveTo(coord[0]+(2*twidth), coord[1] );
           this.contextReal.lineTo(coord[0], coord[1]);
           this.contextReal.moveTo(this.origX, this.origY  );
           this.contextReal.lineTo(coord[0]+(2*twidth), coord[1] );
       };

       this.contextReal.closePath();
       this.contextReal.strokeStyle = 'red';
       this.contextReal.stroke();
       this.contextReal.fillStyle = 'rgba(25,50,75,0.5)';
       this.contextReal.fill();

      // Save the drawing into the array for future modification //
      SaveNewImage();
   }



    onMouseLeave() {}
    onMouseEnter() {}
}
  