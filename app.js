const chalk = require('chalk');
const getNotes = require('./notes.js');

console.log(chalk.green.bgBlack(getNotes()));
