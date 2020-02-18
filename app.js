const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// Customizze yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function() {
    console.log('Adding a new note!');
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function() {
    console.log('Remove a note');
  }
});

// Create a read command
yargs.command({
  command: 'read',
  describe: 'Reading note(s)',
  handler: function() {
    console.log('Read note');
  }
});

// Create a list command
yargs.command({
  command: 'list',
  describe: 'List note(s)',
  handler: function() {
    console.log('Listing out all the notes');
  }
});

// add, remove, read, list

console.log(yargs.argv);
