const fs = require('fs');

console.log('Hello  Wow it worked!');
// Using the imported `fs` module to read a file
fs.readFile('examp.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
