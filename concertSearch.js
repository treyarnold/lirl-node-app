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
  console.log("in concert");
  inquirer.prompt([{
    type: "input",
    message: "What artist would you like to see in concert?",
    name: "artist"
  }]).then(concert => {
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${ticketMaster.id}?keyword=${concert.artist}`).then(
      response => {
        console.log(response.data);
      }
    );
  })
}