const request = require("request");
const input = process.argv.slice(2);
const inputID = input[0].substring(0, 4);

const breedFetcher = function (input) {
  request('https://api.thecatapi.com/v1/images/search?breed_ids=' + inputID, (error, response, body) => {
    if (error) {
      console.log("An error has been produced", error);
    } else {
      const data = JSON.parse(body);
      //console.log(data);
      //console.log(typeof data);
      if (data[0] === undefined) {
        console.log(`${input[0]} is not defined`);
      } else {
        console.log(data[0].breeds[0].description);
      }
    }
  });
};

breedFetcher(input);
