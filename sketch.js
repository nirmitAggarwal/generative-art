function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); // Stops draw loop so it only renders once
  background(240);
}

function draw() {
  let cols = 10;
  let rows = 10;
  let w = width / cols;
  let h = height / rows;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * w;
      let y = j * h;
      drawRandomShape(x, y, w, h);
    }
  }
}

function drawRandomShape(x, y, w, h) {
  noStroke();
  fill(random(255), random(255), random(255), random(100, 200));
  let shapeType = int(random(3));

  if (shapeType === 0) {
    ellipse(x + w / 2, y + h / 2, w, h);
  } else if (shapeType === 1) {
    rect(x, y, w, h);
  } else {
    triangle(
      x + random(w),
      y + random(h),
      x + random(w),
      y + random(h),
      x + random(w),
      y + random(h)
    );
  }
}
