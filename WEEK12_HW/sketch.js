const particles = [];
let pcount = 150;
let samp = 0;
let col = 0;
let serial;
let soundValue = 5;

// -----------------------

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);

  serial = new p5.SerialPort();
  serial.open("COM6");
  serial.on("data", getData);

  for (let i = 0; i < pcount; i++) {
    let ipos = createVector(random(width), random(height));
    let np = new particle(i, ipos);
    particles.push(np);
  }
  drawingContext.shadowColor = "rgba(1,1,1,0.81)";
  drawingContext.shadowBlur = 20;
  drawingContext.shadowOffsetX = -5;
  drawingContext.shadowOffsetY = -5;
  colorMode(HSB);
}

function draw() {
  samp = lerp(samp, soundValue, 0.2);
  // update and draw each particle
  // col = random(0, 2);

  let bright = map(soundValue, 0, 200, 50, 90);
  // if (col > 1) {
  //     fill(189,60, bright);
  //   }
  //   else{
  //     fill(228,90,bright);
  //   }
  for (let i = 0; i < particles.length; i++) {
    fill(col, 90, bright);

    let cp = particles[i];
    cp.drawParticle(samp);
  }
  col = (col + 1) % 360;
}

function getData() {
  soundValue = trim(serial.readLine());
  if (!soundValue) return;
}

function mousePressed() {
  clear();
  background(0);
}
