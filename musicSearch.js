require("dotenv").config();
const keys = require("./keys.js");
const inquirer = require("inquirer");
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);
  
function displaySong(song) {
  console.log(`\nArtist: ${song.album.artists[0].name}`);
  console.log(`Song Name: ${song.name}`);
  console.log(`Review URL: ${song.preview_url}`);
  console.log(`Album: ${song.album.name}`);
}

module.exports = function () {
  inquirer.prompt([{
    type: "input",
    message: "What song title would you like to look for? ",
    name: "track"
  }]).then(music => {
    spotify.search({ type: 'track', query: music.track }, (err, data) => {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      displaySong(data.tracks.items[0]);
    });
  })
}