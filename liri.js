const movieSearch = require("./movieSearch");
const concertSearch = require("./concertSearch");
const musicSearch = require("./musicSearch");
const inquirer = require("inquirer");

const typeOfSearchQuestion = [
  {
    type: "list",
    name: "typeOfSearch",
    message: "What would you like to search for?",
    choices: ["Concerts", "Movies", "Music"]
  }
]

inquirer.prompt(typeOfSearchQuestion).then(userInput => {
  console.log(userInput.typeOfSearch);
  switch (userInput.typeOfSearch) {
    case "Concerts": concertSearch(); break;
    case "Movies": movieSearch(); break;
    case "Music": musicSearch(); break;
  }
})
