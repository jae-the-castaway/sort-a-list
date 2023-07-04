// with map() method
const data = require("./imdb.json");
let result = [];
result = data.map((movie) => movie.title);
result.sort();
console.log(result);

// with forEach() method
const resultWithPush = [];
const getName = (movie) => {
  resultWithPush.push(movie.title);
};
data.forEach(getName);
// console.log(resultWithPush);
