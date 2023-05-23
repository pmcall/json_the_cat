const request = require('request');
let breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {
  if (error !== null) {
    console.error(`OH NO! There was an error!\nHere are the details:\n\n`, error);
    return;
  }
  if (breed === undefined) {
    console.log("Please give me a breed to work with.");
    return;
  }

  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log(`We don't have that breed on file. Maybe try one like "Chartreux" or "Siberian"`);
    return;
  }
  console.log(data[0].description);
});