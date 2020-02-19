const fs = require('fs');
// const book = {
//   title: 'The Title',
//   author: 'The Author'
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('firstJSON.json', bookJSON);

// Read The File In
// const dataBuffer = fs.readFileSync('firstJSON.json');
// // Converted that data into a standard string in Javascript
// const dataBufferJSON = dataBuffer.toString();
// // Then parsed that data into an object
// const data = JSON.parse(dataBufferJSON);
// // Finally, I accessed an property from the object.
// console.log(data.title);

// NEW CHALLENGE: work with JSON and File System

// 1. Load and parse the JSON data
const dataBuffer = fs.readFileSync('firstJSON.json');
const dataBufferJSON = dataBuffer.toString();
const user = JSON.parse(dataBufferJSON);

// 2. Change the name and age property using my info
user.name = 'Tobi';
user.age = 21;

// 3. Stringify the changed object and overwrite the original data
const userJSON = JSON.stringify(user);
fs.writeFileSync('firstJSON.json', userJSON);

// 4. Test work by viewing the data in the JSON file.
