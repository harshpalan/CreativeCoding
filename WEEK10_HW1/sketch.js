let artist, song, button;
let data1, data2;
let defaultArtist = "Avicii";
let defaultSong = "Wake me up";
let graphics;

let lyrics = "";
let lyricsArray = [];
let y = 200;

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);

  graphics = createGraphics(windowWidth, windowHeight * 2);

  artist = createInput(defaultArtist);
  artist.position(windowWidth / 4, windowHeight - 25);
  artist.style("text-align", "center");

  button = createButton("Get Lyrics");
  button.position(windowWidth / 2, windowHeight - 25);
  button.size(100, artist.height);
  button.style("border", "0px");
  button.style("border-radius", "10px");
  button.style("text-align", "center");
  button.mousePressed(searchSong);

  song = createInput(defaultSong);
  song.position(windowWidth / 1.5, windowHeight - 25);
  song.style("text-align", "center");

  fill(random(255), random(255), random(255));

  data1 = loadJSON(
    "https://api.musixmatch.com/ws/1.1/track.search?q_artist=" +
    defaultArtist +
    "&q_track=" +
    defaultSong +
    "&apikey=41ea63692fc0290c8f179fa97cf32389", getTrackId
  );
  frameRate(1);
}

function draw() {
  background(0);
  strokeWeight(0.5);
  stroke(255);

  push();
  textSize(20);
  translate(width/4 + random(-width/4,width/4), 50);
  for (let i = 0; i < lyricsArray.length; i++) {
    translate(10, 50);
    rotate(-2 * random(-5, 5));
    text(lyricsArray[i], -50, -20);
    y = y + 15;
  }
  pop();
  // noLoop();
}

function getTrackId(data1) {
  let trackId = data1.message.body.track_list[0].track.track_id;
  // console.log(trackId);
  data2 = loadJSON(
    "https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=" +
      trackId +
      "&apikey=41ea63692fc0290c8f179fa97cf32389",
    getLyrics
  );
}

function getLyrics(data2) {
  lyrics = data2.message.body.lyrics.lyrics_body;
  lyrics = lyrics.slice(0, lyrics.indexOf("..."));
  lyricsArray = lyrics.split("\n");
  // console.log(lyricsArray);
}

function searchSong() {
  lyrics = "";
  data1 = loadJSON(
    "https://api.musixmatch.com/ws/1.1/track.search?q_artist=" +
      artist.value() +
      "&q_track=" +
      song.value() +
      "&apikey=41ea63692fc0290c8f179fa97cf32389",
    getTrackId
  );
}
