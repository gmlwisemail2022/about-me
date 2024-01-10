/**********************************************
 * Drawing Clear Functionality
 * ==================================
 * This function features clear functionality
 * Auto-save feature activated when user uses clear button.
 * Undo button functionl to restore cleared drawing.
 ***********************************************/

function ClearCanvas() {   
    console.log('Drawing Clear button clicked!');

    // if clicked after undo, need to save old canvas first because old canvas already popped out! 
      SaveOldImage();

    //clear the canvas
    contextReal.clearRect(
        0,
        0,
        canvasReal.width,
        canvasReal.height
      );  

      // Save the drawing into the array for future modification //
      SaveNewImage();
};