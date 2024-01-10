/**********************************************
 * Drawing Undo Functionality
 * ==================================
 * This function features undo functionality
 * Auto-save feature activated when user uses undo button.
 * Undo button not functional when there is no drawing to undo.
 ***********************************************/

function UndoCanvas() {   
    console.log('Undo CANVAS button clicked!');
    //save the current canvas in redo array
    this.RemoveImage();

    //clear the canvas
    contextReal.clearRect(
        0,
        0,
        canvasReal.width,
        canvasReal.height
      );  


    canvasDraft.width = canvasDraft.width;
    canvasDraft.lineWidth = 3;

    // initial pop for the first undo click since we don't need to get the current canvas 
    if  (undoDrawing == false){
        savedImages.pop();
        //imageObj.src = savedImages.pop();
        undoDrawing = true;
    };
    
    //create an image object and paint 
    var imageObj = new Image();
    imageObj.onload = function() {
        contextReal.drawImage(imageObj, 0, 0);
    };

    // remove the last saved instance from the array
    imageObj.src = savedImages.pop();
};