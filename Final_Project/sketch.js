// REFERENCE : https://editor.p5js.org/ml5/sketches/PoseNet_webcam

let video;
let poseNet;
let poses = [];
let skeletons = [];

let keypoints = [];
let prevkeypoints = [];
let osc, reverb;

let serial;
let data;
let serialData = [255, ""];

let notes = [];
let notes1 = [60, 62, 64, 65, 67, 69, 71];
let notes2 = [72, 74, 76, 77, 79, 81, 83];
let notes3 = [48, 50, 52, 53, 55, 57, 59];
let playing = [false, false, false, false, false, false, false];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  notes = notes1;
  //get video
  video = createCapture(VIDEO);
  video.size(width, height);

  //initialize ml5.js and p5.js
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on("pose", gotPoses);
  video.hide();

  //serial setup and check
  if (!navigator.serial) {
    alert("WebSerial is not supported in this browser. Try Chrome or MS Edge.");
  }
  serial = new p5.SerialPort();
  serial.open("COM6");
  serial.on("data", getData);

  // audio setup
  osc = new p5.Oscillator("triangle");
  osc.start();
  osc.amp(0);
  reverb = new p5.Reverb();
  reverb.process(osc, 5, 0.5);
  reverb.amp(0.7);
  
  notes1.sort(() => random() - 0.5);
  notes2.sort(() => random() - 0.5);
  notes3.sort(() => random() - 0.5);
}

function getData() {
  data = trim(serial.readLine());
  if (!data) return;
  serialData = data.split(",");
  serialData[0] = int(map(serialData[0], 5, 150, 10, 360, true));
  // console.log(serialData[0]);
  if (serialData[1] == "sine") {
    notes = notes3;
    osc.setType("sine");
    reverb.drywet(0.7);
    text();
  }
  if (serialData[1] == "sawtooth") {
    notes = notes2;
    osc.setType("sawtooth");
    reverb.drywet(0.5);
  }
  if (serialData[1] == "square") {
    notes = notes31;
    osc.setType("square");
    reverb.drywet(0.6);
  }
  // console.log(osc.getType());
}

function modelReady() {
  console.log("Model Loaded");
}

function draw() {
  background(0, 0.1);
  // console.log(poses);
  textSize(12);
  fill(255);
  noStroke();
  text(
    "Press Button 1 to change oscillator to SINE \nButton 2 to change to SAWTOOTH \nBoth button to change to SQUARE. \nPress H key to see the background image",
    10,
    30
  );
  if (keyIsPressed && key == "h" || key == "H") {
    image(video, 0, 0, width, height);
  }
  drawGrid();
  if (poses[0]) {
    if (poses[0].pose.score > 0.4) {
      drawKeypoints();
      drawSkeleton();
    }
  }
}

function drawGrid() {
  strokeWeight(1);
  stroke(100, 10, 10, 0.5);

  for (let i = 0; i < height; i += 20) {
    line(0, i, width, i);
  }
  for (let i = 0; i < width; i += 20) {
    line(i, 0, i, height);
  }
}

function drawKeypoints() {
  if (poses.length == 0) {
    return;
  }

  prevkeypoints = keypoints;
  keypoints = poses[0].pose.keypoints;

  if (prevkeypoints.length == 0) {
    return;
  }

  let nose = poses[0].pose.keypoints[0];

  noFill();
  stroke(serialData[0], 80, 80);
  if (nose.score > 0.4) {
    ellipse(nose.position.x, nose.position.y, 150, 150);
  }

  for (let k = 5; k < keypoints.length; k++) {
    let k1 = prevkeypoints[k];
    let k2 = keypoints[k];

    if (k2.score > 0.4) {
      noStroke();
      fill(serialData[0] - 30, 80, 90);
      ellipse(k2.position.x, k2.position.y, 25, 25);

      let n = floor(map(k2.position.y, 0, height, 0, notes.length));
      // let l = floor(map(k2.position.x, 0, width / 2, 0, 200,true));
      // console.log(l);

      if (!playing[n]) {
        playNote(n, 200);
      }
    }
  }
}

function drawSkeleton() {
  for (let i = 0; i < poses.length; i++) {
    for (let j = 0; j < poses[i].skeleton.length; j++) {
      let partA = poses[i].skeleton[j][0];
      let partB = poses[i].skeleton[j][1];
      strokeWeight(5);
      stroke(serialData[0], 80, 80);
      line(
        partA.position.x,
        partA.position.y,
        partB.position.x,
        partB.position.y
      );
    }
  }
}

function playNote(n, duration) {
  getAudioContext().resume();
  var note = notes[n];
  var r = random();
  if (r < 0.25) {
    note += 12;
  } else if (r < 0.4) {
    note -= 12;
  }
  osc.freq(midiToFreq(note));
  playing[n] = true;
  osc.fade(0.5, 0.2);
  if (duration) {
    setTimeout(function () {
      osc.fade(0, 0.2);
      playing[n] = false;
    }, duration - 50);
  }
}

function gotPoses(results) {
  poses = results;
}

