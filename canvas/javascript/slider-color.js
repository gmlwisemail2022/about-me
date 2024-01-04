/**********************************************
 * Slider Color Functionality
 * ==================================
 * This function controls the color logic
 ***********************************************/
// color logic for fill
var hexCode = document.querySelector('#hexCode'), 
    r = document.querySelector('#r'),
    g = document.querySelector('#g'),
    b = document.querySelector('#b'),
    r_out = document.querySelector('#r_out'),
    g_out = document.querySelector('#g_out'),
    b_out = document.querySelector('#b_out'),
    hex_out = document.querySelector('#hex');

function setColor(){
  var r_hex = parseInt(r.value, 10).toString(16),
      g_hex = parseInt(g.value, 10).toString(16),
      b_hex = parseInt(b.value, 10).toString(16),
      hex = "#" + pad(r_hex) + pad(g_hex) + pad(b_hex);
  hexCode.style.backgroundColor = hex; 
  hex_out.value = hex;
}

function pad(n){
  return (n.length<2) ? "0"+n : n;
}

r.addEventListener('change', function() {
  setColor();
  r_out.value = r.value;
}, false);

r.addEventListener('input', function() {
  setColor();
  r_out.value = r.value;
}, false);

g.addEventListener('change', function() {
  setColor();
  g_out.value = g.value;
}, false);

g.addEventListener('input', function() {
  setColor();
  g_out.value = g.value;
}, false);

b.addEventListener('change', function() {
  setColor();
  b_out.value = b.value;
}, false);

b.addEventListener('input', function() {
  setColor();
  b_out.value = b.value;
}, false);

// color logic for border
var hexCodeB = document.querySelector('#hexCodeB'), 
    rb = document.querySelector('#rb'),
    gb = document.querySelector('#gb'),
    bb = document.querySelector('#bb'),
    rb_out = document.querySelector('#rb_out'),
    gb_out = document.querySelector('#gb_out'),
    bb_out = document.querySelector('#bb_out'),
    hexB_out = document.querySelector('#hexB');

function setColorB(){
  var rb_hex = parseInt(rb.value, 10).toString(16),
      gb_hex = parseInt(gb.value, 10).toString(16),
      bb_hex = parseInt(bb.value, 10).toString(16),
      hexB = "#" + pad(rb_hex) + pad(gb_hex) + pad(bb_hex);
      hexCodeB.style.backgroundColor = hexB; 
      hexB_out.value = hexB;
}

rb.addEventListener('change', function() {
  setColorB();
  rb_out.value = rb.value;
}, false);

rb.addEventListener('input', function() {
  setColorB();
  rb_out.value = rb.value;
}, false);

gb.addEventListener('change', function() {
  setColorB();
  gb_out.value = gb.value;
}, false);

gb.addEventListener('input', function() {
  setColorB();
  gb_out.value = gb.value;
}, false);

bb.addEventListener('change', function() {
  setColorB();
  bb_out.value = bb.value;
}, false);

bb.addEventListener('input', function() {
  setColorB();
  bb_out.value = bb.value;
}, false);

// width logic for border
var width = document.querySelector('#width'),
    w_out = document.querySelector('#w_out');

width.addEventListener('input', function() {
  w_out.value = width.value;
}, false);
