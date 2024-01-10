/**********************************************
 * Drawing Redo Functionality
 * ==================================
 * This function features redo functionality
 * Auto-save feature activated when user uses redo button.
 * nothing happens if there is nothing to redo
 ***********************************************/

function RedoCanvas() {   
    console.log('Redo CANVAS button clicked!');

    if (removedImages.length == 0) {
        alert("Nothing to redo!")
    } else {
        //save the current canvas in undo array
        this.SaveImage();

        //clear the canvas
        contextReal.clearRect(
            0,
            0,
            canvasReal.width,
            canvasReal.height
        );  

        canvasDraft.width = canvasDraft.width;
        canvasDraft.lineWidth = 3;
      
        //create an image object and paint 
        var imageObj = new Image();
        imageObj.onload = function() {
            contextReal.drawImage(imageObj, 0, 0);
        };

        // remove the last removed instance from the array
        imageObj.src = removedImages.pop();
    };
};
// comment for now as we only need a simple successive redo function
/* Note: ( might fix undo/redo toggle bug - bug occurs when you undo some changes and then redo a few of those changes 
           and then go back to undo again and then redo again - this is implemented correctly in undo function)
    // initial pop for the first redo click since we don't need to get the current canvas 
    if  (redoDrawing == false){
        removedImages.pop();
        redoDrawing = true;  //add a flag or counter to limit or allow excess old "undo" occurences
    }; 
*/