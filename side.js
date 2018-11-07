var y = 0;
function setup() {
  createCanvas(100,windowHeight);
  background(0);
	noFill();
	strokeWeight(2);
}

function draw() {
	background(0);
	var x = map(mouseX, 100, windowWidth, 0, 100);
	y = y + (mouseY - y) * 0.05;
	var h = rotate3d([0,50,0], y * 0.02,0,0);
	var h2 = rotate3d([0,50,0], y * 0.02 + PI/3,0,0);
	var h3 = rotate3d([0,50,0], y * 0.02 + PI*2/3,0,0);
	stroke(255, 100, 100);
	ellipse(x,y, 50, h[1]);
	stroke(0, 200, 255);
	ellipse(x,y, 50, h2[1]);
	stroke(0, 255, 100);
	ellipse(x,y, 50, h3[1]);
}

function rotate3d(points, u,v,w){
	var cu = cos(u), su = sin(u);
	var cv = cos(v), sv = sin(v);
	var cw = cos(w), sw = sin(w);
	var [x,y,z] = points;
	var newX = cv*cw*x - cv*sw*y + sv * z;
	var newY = (su*sv*cw+cu*sw)*x + (-su*sv*sw+cu*cw)*y + (-su*cv)*z;
	var newZ = (-cu*sv*cw+su*sw)*x + (cu*sv*sw+su*cu)*y + (cu*cv)*z;
	return [newX, newY, newZ];
}