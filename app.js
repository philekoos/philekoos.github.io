const chalk = require('chalk');;
const yargs = require('yargs');
const notes = require('./notes.js');

/* const command = process.argv[2]
console.log(process.argv)
if (command==='add'){
    console.log('Adding Note!!');
}
else if (command==='remove'){
    console.log('Removing Note!!');
} */

// customized yargs version
yargs.version('1.1.0')

/* console.log(process.argv) */


//Create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
        title:{
            describe: 'Node title',
            demandOption: true,
            type: String
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler() {
        notes.listNotes();
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler() {
        console.log('Reading a note');
    }
})

yargs.parse()

/* console.log(yargs.argv) */