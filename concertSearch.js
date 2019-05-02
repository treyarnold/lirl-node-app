require("dotenv").config();
const keys = require("./keys.js");
const axios = require("axios");
const inquirer = require("inquirer");
const ticketMaster = new TicketMaster(keys.ticketMaster);

function TicketMaster(keysObject) {
  this.id = keysObject.id;
  this.secret = keysObject.secret;
}

function formatDate(date) {
  let dateNumbers = date.split('-');
  let newDate = `${dateNumbers[1]}/${dateNumbers[2]}/${dateNumbers[0]}`
  return newDate
}

function displayConcert(concert) {
  console.log(`\n${concert._embedded.events[0].name}`);
  console.log(`Venue: ${concert._embedded.events[0]._embedded.venues[0].name}`);
  console.log(`Date: ${formatDate(concert._embedded.events[0].dates.start.localDate)}`);
}

module.exports = function () {
  console.log("in concert");
  inquirer.prompt([{
    type: "input",
    message: "What artist would you like to see in concert?",
    name: "artist"
  }]).then(concert => {
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${ticketMaster.id}&keyword=${concert.artist}`).then(
      response => {
        displayConcert(response.data);
      }
    );
  })
}