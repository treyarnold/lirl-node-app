require("dotenv").config();
const keys = require("./keys.js");
const axios = require("axios");
const inquirer = require("inquirer");
const omdb = new OMDB(keys.omdb);

function OMDB(keysObject) {
  this.id = keysObject.id;
}

module.exports = function () {
  console.log("in movie Search");
}