const chalk=require('chalk')
const yargs=require('yargs')
const notes=require('./utils.js')


yargs.command({
    command: 'add',
    describe:'add a new note',
    builder:{
        title:{
            describe:'notes title',
            demandOption:true,
            type:'string'
        },
        body:
        {
            describe:'notes body',
            demandOption:true,
            type:'string'
        }

    },
    handler: function(argv)
    {
        notes.addNotes(argv.title,argv.body)
    }
})
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:
    {
        title:
        {
            describe:'title of the note',
            demandOption:true,
            type:'string'
        }

    },
    handler:function(argv)
    {
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'listing',
    handler:function()
    {
        console.log('listing note')
    }
})

yargs.command({
    command:'read',
    describe:'reading notes',
    handler:function()
    {
        console.log('reading note')
    }
})

yargs.parse()
