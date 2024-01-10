
/**********************************************
 * Drawing Drag/Move Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 ***********************************************/
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect

class DrawingDrag extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
    }
  
    onMouseDown(coord, event) {
        // on mouse down save the mouse position
        //var currX  = thisX;
        //var currY = coord[1]; 
        // on mouse down get the passed coordinates  
        //this.origX = coord[0];
        //this.origY = coord[1];  
        this.origX = parseInt(coord[0] - offsetX);
        this.origY = parseInt(coord[1] - offsetY);

        // on mouse down check if it hits a previously created image
        for (var i=0; i < savedCoord.length; i++) {
            var savedObject = savedCoord[i];

            if (this.origX > savedObject.pos[0] && this.origX < savedObject.endPos[0] &&
                this.origY > savedObject.pos[1] && this.origY < savedObject.endPos[1] ) {
                    hit = i;
                    console.log ("object was hit")
                    // set dragging to true
    
                    // save new start X
                    newStartX=this.origX;
                    newStartY=this.origY;
    
                    //var dx = this.origY - circle.x;
                    //var dy = lastY - circle.y;
                    //        if (dx*dx + dy*dy < circle.radius * circle.radius) 
             };
        };
    }

    onDragging(coord, event) {

        // Allows you to actually draw out your squares
        this.contextDraft.clearRect(
          0,
          0,
          canvasDraft.width,
          canvasDraft.height
        );

        //this.contextDraft.strokeStyle = hexB.value;
        // Pass in the original x and y coordinates, followed by the new coordinates that we get for position x and y

        // get the values of the hit object to redraw the shape as you drag the mouse
        // nothing happens if no object was hit during mouse down
        if (hit >= 0) {

            // remove object from real canvas if an object was hit
            //save the current canvas in redo array
            //RemoveImage();
        /*
            //clear the canvas
            contextReal.clearRect(
                0,
                0,
                canvasReal.width,
                canvasReal.height
              );  
        */
        
            //canvasDraft.width = canvasDraft.width;
            //canvasDraft.lineWidth = 3;
        /*
            //create an image object and paint 
            var imageObj = new Image();
            imageObj.onload = function() {
                contextReal.drawImage(imageObj, 0, 0);
            };
        
            // remove the last saved instance from the array
            imageObj.src = savedImages.pop();

            //undo step ends here
            */
        // get the current mouse position
        this.origX = parseInt(coord[0] - offsetX);
        this.origY = parseInt(coord[1] - offsetY);

        // calculate the distance the mouse has moved
        // since the last mousemove
        diffX = this.origX - newStartX;
        diffY = this.origY - newStartY;
            // calculate the changes
 
           // diffX = this.origX - coord[0];
           // diffY = this.origY - coord[1];

        // move each rect that isDragging 
        // by the distance the mouse has moved
        // since the last mousemove


            var draggingObject = savedCoord[hit];
            this.contextDraft.beginPath();
            this.contextDraft.lineWidth = draggingObject.lineWidth.value;
            this.contextDraft.strokeStyle = draggingObject.strokeStyle.value;
            this.contextDraft.fillStyle = draggingObject.fillStyle.value;


            // no need to update this while moving
            draggingObject.pos[0] += diffX ;
            draggingObject.pos[1] += diffY;
            //draggingObject.endPos[0] += diffX;
            //draggingObject.endPos[1] += diffY;


            this.contextDraft.rect(
                draggingObject.pos[0],
                draggingObject.pos[1],
                //coord[0] - this.origX,
                //coord[1] - this.origY,
                draggingObject.width,
                draggingObject.height
              );

            this.contextDraft.stroke();
            this.contextDraft.fill();

        // reset the starting mouse position for the next mousemove
        newStartX = this.origX;
        newStartY = this.origY;

        }
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
  
      // Commit that drawing to context real if object was hit and has moved
      // Without this commit, it won't actually draw

      if (hit >= 0) {
        var savingObject = savedCoord[hit];
        this.contextReal.beginPath();
        this.contextReal.lineWidth = savingObject.lineWidth.value;
        this.contextReal.strokeStyle = savingObject.strokeStyle.value;
        this.contextReal.fillStyle = savingObject.fillStyle.value;
  

        this.contextReal.rect(
            savingObject.pos[0] + diffX,
            savingObject.pos[1] + diffY,
            savingObject.width, //length
            savingObject.height // height
          );

        this.contextReal.stroke();
        this.contextReal.fill();
    }

          // temp: Save the drawing into the array for gravity effects //

    
         startX = savingObject.pos[0] + diffX;
         startY = savingObject.pos[1] + diffY;
         endX = savingObject.endPos[0] + diffX;
         endY = savingObject.endPos[1] + diffY;
         drawnObject = { 
          shape: "rectangle",
          pos: [startX, startY],
          endPos: [endX, endY],
          fillStyle: hex.value,
          strokeStyle: hexB.value,
          lineWidth: width.value
        };
        // update savedCoord object
        savedCoord[hit] = drawnObject;
  
  
      // Save the drawing into the array for future modification //
      SaveNewImage();
  
    }
    onMouseLeave() {}
    onMouseEnter() {}
}
  