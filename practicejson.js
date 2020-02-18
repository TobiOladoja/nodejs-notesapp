const book = {
  title: 'The Title',
  author: 'The Author'
};

// Convert the above object below into JSON, which is essentially nothing more than a string.
// JSON.stringify takes in the object and gives me a JSON string back. **CONVERT TO JSON**

const bookJSON = JSON.stringify(book);
console.log(bookJSON);

// JSON.prase is opposite of stringify, it takes in the JSON string and gives back an object. **CONVERT TO OBJECT**
const parsedData = JSON.parse(bookJSON);
console.log(parsedData);
