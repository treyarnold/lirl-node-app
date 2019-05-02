require("dotenv").config();
const keys = require("./keys.js");
const axios = require("axios");
const inquirer = require("inquirer");
const spotify = new Spotify(keys.spotify);

function Spotify(keysObject) {
  this.id = keysObject.id;
  this.secret = keysObject.secret;
}

module.exports = function () {
  console.log("in music Search");
}