/**********************************************
 * Drawing Save Functionality
 * ==================================
 * This function saves the canvas into a jpeg file.
 * Auto-save feature activated when user uses undo button.
 ***********************************************/

function SaveCanvas() {

    var image = canvasReal.toDataURL("image/png").replace("image/png", "image/octet-stream");
    window.location.href=image; 

};

