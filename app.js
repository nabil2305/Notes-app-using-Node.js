// const fs=require('fs')
// fs.writeFileSync('notes.txt','My name is Khan')
// fs.appendFileSync('notes.txt',' and i am not a terrorist')


 const notes=require('./notes.js')
// const msg=getNotes()
// console.log(msg)
const yargs=require('yargs')
// const validator=require('validator')
// console.log(validator.isURL('abc@gmail'))
// const chalk=require('chalk')
// console.log(chalk.red('hello worlds'))
//console.log(process.argv[2])
yargs.command({
    command:'add',
    describe:'add a new note',
    builder:{
        title:{
            describe:'Note title',
            type:'string'

        },
        body:{
            describe:'Note Body',
            type:'string'

        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})
yargs.command({
    command:'remove',
    describe:'removing a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command:'list',
    describe:'listing the notes',
    handler(){
        console.log('Listing all the notes')
    }
})
yargs.command({
    command:'read',
    describe:'read the note',
    handler(){
        console.log('reading the notes')
    }

})
console.log(yargs.argv)