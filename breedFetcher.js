const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    if (error) {
      callback(`OH NO! There was an error!\nHere are the details:`);
      callback(error);
      return;
    }
    // if (breed === undefined) {
    //   return "Please give me a breed to work with.";
    // }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(`We don't have that breed on file. Maybe try one like "Chartreux" or "Siberian"`);
      return;
    }
    if (response.statusCode === 200) {
      callback(null, data[0].description);
      return;
    }
  });
};

module.exports = { fetchBreedDescription };
