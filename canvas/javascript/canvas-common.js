/**********************************************
 * The Canvas
 * ==================================
 ***********************************************/

let canvasReal = document.getElementById("canvas-real");
let contextReal = canvasReal.getContext("2d");
let canvasDraft = document.getElementById("canvas-draft");
let contextDraft = canvasDraft.getContext("2d");
let currentFunction;
//canvas values:
var BB = canvasDraft.getBoundingClientRect();
var offsetX = BB.left;
var offsetY = BB.top;
//var WIDTH = canvas.width;
//var HEIGHT = canvas.height;
//switches
let dragging = false;
var undoDrawing = false; // undo button toggle
var redoDrawing = false; // redo button toggle
var redoEmpty = true;
var moveImage = false;  //drag button toggle
// arrays
var savedImages = [];
var removedImages = [];
let drawingsArray = [];  /*this array stores all shapes created in contextReal */
// temp gravity
var savedCoord = [];
var startX = 0;
var startY = 0;
var endX = 0;
var endY = 0;
// initial variables
var hit = -1;    // switch to check if object was hit on click
var diffX = 0;
var diffY = 0;
var newStartX = 0;
var newStartY = 0;
var drawnObject = { 
  shape: "rectangle",
  pos: [startX, startY],
  endPos: {endX, endY}
};


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

// RemoveImage and SaveImage is for the undo/redo function only 
function RemoveImage () {
  var imgSrc = canvasReal.toDataURL("image/png");
  removedImages.push(imgSrc);
};

function SaveImage () {
  var imgSrc = canvasReal.toDataURL("image/png");
  savedImages.push(imgSrc);
};


// saveNewImage and saveldImage is function to control undo/redo and create object toggle

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
