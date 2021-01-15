const request = require("request");
//const input = process.argv.slice(2);
//const inputID = input[0].substring(0, 4);

const fetchBreedDescription = function(breedName, callback) {
  const shortBreedName = breedName.substring(0,4);
  request(`https://api.thecatapi.com/v1/images/search?breed_ids=${shortBreedName}`, (error, response, body) => {
    if (error) {
      callback(error);
    } else {
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        callback(error, data.length);
      } else {
        const description = (data[0].breeds[0].description);
        callback(error, description)
      }
    }

  })

};

///////// WITHOUT REFACTORING AND NO CALLBACKS //////
// const breedFetcher = function (input) {
//   request(
//     "https://api.thecatapi.com/v1/images/search?breed_ids=" + inputID,
//     (error, response, body) => {
//       if (error) {
//         console.log("An error has been produced", error);
//       } else {
//         const data = JSON.parse(body);
//         //console.log(data);
//         //console.log(typeof data);
//         if (data[0] === undefined) {
//           console.log(`${input[0]} has not been found.`);
//         } else {
//           console.log(data[0].breeds[0].description);
//         }
//       }
//     }
//   ); 
// };


module.exports = {fetchBreedDescription};
