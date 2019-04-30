require("dotenv").config();

const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);
const ticketMaster = new TicketMaster(keys.ticketMaster);
const omdb = new OMDB(keys.omdb);

function Spotify(keysObject) {
  this.id = keysObject.id;
  this.secret = keysObject.secret;
}

function TicketMaster(keysObject) {
  this.id = keysObject.id;
  this.secret = keysObject.secret;
}

function OMDB(keysObject) {
  this.id = keysObject.id;
}

console.log(spotify);
console.log(ticketMaster);
console.log(omdb);