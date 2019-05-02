require("dotenv").config();
const keys = require("./keys.js");
const axios = require("axios");
const inquirer = require("inquirer");
const omdb = new OMDB(keys.omdb);

function OMDB(keysObject) {
  this.id = keysObject.id;
}

// Title of the movie.
//   * Year the movie came out.
//   * IMDB Rating of the movie.
//   * Rotten Tomatoes Rating of the movie.
//   * Country where the movie was produced.
//   * Language of the movie.
//   * Plot of the movie.
//   * Actors in the movie.

function displayMovie(movieData) {
  console.log(movieData.Title);
  console.log(`Year: ${movieData.Year}`);
  console.log(`Rotten Tomatoes: ${movieData.Ratings[1].Value}`);
  console.log(`Produced in ${movieData.Country}`);
  console.log(`Language: ${movieData.Language}`);
  console.log(`Plot: ${movieData.Plot}`);
  console.log(`Actors: ${movieData.Actors}`);
}

module.exports = function () {
  inquirer.prompt([{
    type: "input",
    message: "What movie would you like to search for?",
    name: "title"
  }]).then(movie =>{
    if (movie.title.includes("")) movie.title = movie.title.replace(/ /g, "+")
    axios.get(`http://www.omdbapi.com/?t=${movie.title}&y=&plot=short&apikey=${omdb.id}`).then(
      function(response) {
        displayMovie(response.data);
      }
    );
  })
}