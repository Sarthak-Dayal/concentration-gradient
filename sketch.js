let points = [];
function setup() {
  
  
  
  createCanvas(400, 400);
  let x = width;
  let y = height / 2;
  for(let i = 0; i < 1000; i++) {
    points.push([x, y, 5]);
  }
}

function draw() {
  background(0);
  for(let p of points) {
    circle(p[0], p[1], p[2]);
    let ang = random(2 * PI);
    p[0] = p[0] + 2 * cos(ang);
    p[1] = p[1] + 2 * sin(ang);
  }
  
}