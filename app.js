//Load in File System module by using require function that Node provides and pass in a string. Calling require which is going
// to load in the fs module.
const fs = require('fs');

// First argument is name of file, next argument is content.
fs.writeFileSync('notes.text', 'This file was created by Tobi Oladoja');
