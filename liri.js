require("dotenv").config();

const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);

function Spotify(keysObject) {
  this.id = keysObject.id;
  this.secret = keysObject.secret;
}

console.log(spotify);