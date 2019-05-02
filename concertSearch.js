require("dotenv").config();
const keys = require("./keys.js");
const axios = require("axios");
const inquirer = require("inquirer");
const ticketMaster = new TicketMaster(keys.ticketMaster);

function TicketMaster(keysObject) {
  this.id = keysObject.id;
  this.secret = keysObject.secret;
}

module.exports = function () {
  console.log("in concert Search");
}