/**********************************************
 * The Canvas
 * ==================================
 ***********************************************/

let canvasReal = document.getElementById("canvas-real");
let contextReal = canvasReal.getContext("2d");
let canvasDraft = document.getElementById("canvas-draft");
let contextDraft = canvasDraft.getContext("2d");
let currentFunction;
let dragging = false;
var undoDrawing = false;
var savedImages = [];
var removedImages = [];
let drawingsArray = [];  /*this array stores all shapes created in contextReal */

$("#canvas-draft").mousedown(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseDown([mouseX, mouseY], e);
  dragging = true;
});

$("#canvas-draft").mousemove(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  if (dragging) {
    currentFunction.onDragging([mouseX, mouseY], e);
  }
  currentFunction.onMouseMove([mouseX, mouseY], e);
});

$("#canvas-draft").mouseup(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseUp([mouseX, mouseY], e);
});

$("#canvas-draft").mouseleave(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseLeave([mouseX, mouseY], e);
});

$("#canvas-draft").mouseenter(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseEnter([mouseX, mouseY], e);
});

/** # Class (all classes will have these methods) #
/*  ====================== */
class PaintFunction {
  constructor() {}
  onMouseDown() {}
  onDragging() {}
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}
}

/* RemoveImage and SaveImage is for the undo/redo function only */
function RemoveImage () {
  var imgSrc = canvasReal.toDataURL("image/png");
  removedImages.push(imgSrc);
};

function SaveNewImage() {
    // Save the drawing into the array for future modification 
    var imgSrc = canvasReal.toDataURL("image/png");
    savedImages.push(imgSrc);
    undoDrawing = false; 
    console.log("saved images length",savedImages.length);
};

function SaveOldImage() {
    // if creating new shapes after undo, need to save old canvas first because old canvas already popped out! 
    if (undoDrawing == true) {
      var imgSrc = canvasReal.toDataURL("image/png");
      savedImages.push(imgSrc);
    }
};
