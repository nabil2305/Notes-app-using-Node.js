const chalk=require('chalk')
const fs=require('fs')
const getNotes=() => {
    return "your notes"
}

const addNote=(title,body) => {
    const notes=loadNotes()
    const duplicateNotes=notes.filter((note)=> note.title===title)
        

    if(duplicateNotes.length === 0){
        notes.push({
            title:title,
            body: body
        })
            saveNotes(notes)
            console.log('new note added')
    }
    else{
        console.log('note title taken')
    }

   

}
const removeNote=(title)=>{
    const notes=loadNotes()
    const notesToKeep=notes.filter((note)=>note.title!=title)
         
    saveNotes(notesToKeep)

    if(notes.length>notesToKeep.length){
        console.log(chalk.green.inverse('Note removed'))
    }else{
        console.log(chalk.red.inverse('no note found'))
    }

}

const saveNotes=function(notes){
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)

}
const loadNotes=function(){
    try{
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}
module.exports = {
    getNotes:getNotes,
    addNote: addNote,
    removeNote:removeNote
}

