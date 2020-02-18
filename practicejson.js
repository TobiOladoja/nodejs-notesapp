const fs = require('fs');
// const book = {
//   title: 'The Title',
//   author: 'The Author'
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('firstJSON.json', bookJSON);

// Read The File In
const dataBuffer = fs.readFileSync('firstJSON.json');
// Converted that data into a standard string in Javascript
const dataBufferJSON = dataBuffer.toString();
// Then parsed that data into an object
const data = JSON.parse(dataBufferJSON);
// Finally, I accessed an property from the object.
console.log(data.title);
