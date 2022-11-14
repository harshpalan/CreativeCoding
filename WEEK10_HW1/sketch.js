let artist, song, button;
let data1, data2;
let defaultArtist = "NF";
let defaultSong = "Only";

function preload() {
  data1 = loadJSON(
    "https://api.musixmatch.com/ws/1.1/track.search?q_artist=" +
    defaultArtist +
    "&q_track=" +
    defaultSong +
    "&apikey=41ea63692fc0290c8f179fa97cf32389", getTrackId
  );
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  artist = createInput("NF");
  artist.position(windowWidth / 2 - artist.width, windowHeight - 25);

  song = createInput("Only");
  song.position(windowWidth / 2 + song.width / 2, windowHeight - 25);

  button = createButton("search");
  button.position(windowWidth / 2 + button.width / 4, windowHeight - 25);
  button.size(60, 25);
  button.style("border", "0px");
  button.style("border-radius", width / 20 + "px");
}

function draw() {
  background(0);
  noLoop();
}

function getTrackId() {
  console.log(data1.message.body);
  let trackId = data1.message.body.track_list[0].track.track_id;
  data2 = loadJSON(
    "https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=" + trackId +
    "&apikey=41ea63692fc0290c8f179fa97cf32389", getLyrics
  );
}

function getLyrics() {
  let lyrics = data2.message.body.lyrics.lyrics_body;
  console.log(lyrics);
  // let lyricsArray = lyrics.split
}


//https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=249728295&apikey=41ea63692fc0290c8f179fa97cf32389