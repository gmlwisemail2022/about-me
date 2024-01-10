/**********************************************
 * Drawing Rectangle Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 ***********************************************/
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect

class DrawingRectangle extends PaintFunction {
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
  
    //this.contextDraft.strokeStyle = hexB.value;
    // Pass in the original x and y coordinates, followed by the new coordinates that we get for position x and y
    this.contextDraft.beginPath();
    this.contextDraft.lineWidth = width.value;
    this.contextDraft.strokeStyle = hexB.value;

    this.contextDraft.rect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[1] - this.origY
    );

    this.contextDraft.stroke();
    this.contextDraft.fillStyle = hex.value;
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
    
    /* if creating new shapes after undo, need to save old canvas first because old canvas already popped out! */
    SaveOldImage();

    // Commit that drawing to context real
    // Without this commit, it won't actually draw
    this.contextReal.beginPath();
    this.contextReal.lineWidth = width.value;

    this.contextReal.strokeStyle = hexB.value;

    this.contextReal.rect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[1] - this.origY
    );
    this.contextReal.fillStyle = hex.value;
    this.contextReal.stroke();
    this.contextReal.fill();

        // temp: Save the drawing into the array for gravity effects //
       startX = this.origX;
       startY = this.origY;
       endX = coord[0];
       endY = coord[1];
       var rectangleWidth = coord[0] - this.origX;
       var rectangleHeight = coord[1] - this.origY;
       drawnObject = { 
        shape: "rectangle",
        pos: [startX, startY],
        endPos: [endX, endY],
        width: rectangleWidth,
        height: rectangleHeight,
        fillStyle: hex.value,
        strokeStyle: hexB.value,
        lineWidth: width.value
      };
      savedCoord.push(drawnObject);


    // Save the drawing into the array for future modification //
    SaveNewImage();

  }
  onMouseLeave() {}
  onMouseEnter() {}
}
